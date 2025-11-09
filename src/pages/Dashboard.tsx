import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Session } from "@supabase/supabase-js";
import { KanbanColumn } from "@/components/KanbanColumn";
import { ArrowLeft, LogOut, Users, TrendingUp, CheckCircle, XCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DemonstrationRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  created_at: string;
  status: string;
}

const Dashboard = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<DemonstrationRequest[]>([]);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [highlightedColumn, setHighlightedColumn] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const statuses = [
    { key: "new", title: "Novo", color: "bg-blue-500/10 text-blue-700 dark:text-blue-400" },
    { key: "contacted", title: "Contato Realizado", color: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400" },
    { key: "negotiating", title: "Em Negociação", color: "bg-purple-500/10 text-purple-700 dark:text-purple-400" },
    { key: "closed", title: "Fechado", color: "bg-green-500/10 text-green-700 dark:text-green-400" },
    { key: "lost", title: "Perdido", color: "bg-red-500/10 text-red-700 dark:text-red-400" },
  ];

  useEffect(() => {
    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        navigate("/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setSession(session);

    if (!session) {
      navigate("/login");
      return;
    }

    const { data: roleData, error: roleError } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (roleError || !roleData) {
      toast({
        title: "Acesso negado",
        description: "Você não tem permissão para acessar esta página",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    setIsAdmin(true);
    await fetchRequests();
    setLoading(false);
  };

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from("demonstration_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Erro",
        description: "Erro ao carregar solicitações",
        variant: "destructive",
      });
      return;
    }

    setRequests(data || []);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>, newStatus: string) => {
    e.preventDefault();
    
    if (!draggedId) return;

    const { error } = await supabase
      .from("demonstration_requests")
      .update({ status: newStatus })
      .eq("id", draggedId);

    if (error) {
      toast({
        title: "Erro",
        description: "Erro ao atualizar status",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Sucesso",
      description: "Status atualizado com sucesso",
    });

    setDraggedId(null);
    fetchRequests();
  };

  const getRequestsByStatus = (status: string) => {
    return requests.filter((req) => req.status === status);
  };

  const stats = {
    total: requests.length,
    new: getRequestsByStatus("new").length,
    contacted: getRequestsByStatus("contacted").length,
    negotiating: getRequestsByStatus("negotiating").length,
    closed: getRequestsByStatus("closed").length,
    lost: getRequestsByStatus("lost").length,
    conversionRate: requests.length > 0 
      ? ((getRequestsByStatus("closed").length / requests.length) * 100).toFixed(1)
      : "0",
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logout realizado",
      description: "Você saiu com sucesso",
    });
    navigate("/login");
  };

  const scrollToColumn = (columnKey: string) => {
    const element = document.getElementById(`kanban-column-${columnKey}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setHighlightedColumn(columnKey);
      setTimeout(() => setHighlightedColumn(null), 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/admin")}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Dashboard CRM
                </h1>
                <p className="text-sm text-muted-foreground">
                  Gerencie suas solicitações de demonstração
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Total: <span className="font-semibold text-foreground">{requests.length}</span> solicitações
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-all" onClick={() => scrollToColumn("new")}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Leads
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Todas as solicitações
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all" onClick={() => scrollToColumn("new")}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Novos Contatos
              </CardTitle>
              <Clock className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.new}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Aguardando contato
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all" onClick={() => scrollToColumn("negotiating")}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Em Negociação
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.negotiating}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Oportunidades ativas
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all border-green-500/20" onClick={() => scrollToColumn("closed")}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Fechados
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.closed}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Conversões realizadas
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all" onClick={() => scrollToColumn("closed")}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Taxa de Conversão
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.conversionRate}%</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.closed} de {stats.total} leads
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CRM Kanban */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-foreground">Pipeline de Vendas</h2>
          <p className="text-sm text-muted-foreground">Arraste os cards para atualizar o status</p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-4">
          {statuses.map((status) => (
            <KanbanColumn
              key={status.key}
              title={status.title}
              status={status.key}
              requests={getRequestsByStatus(status.key)}
              count={getRequestsByStatus(status.key).length}
              color={status.color}
              highlighted={highlightedColumn === status.key}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragStart={handleDragStart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
