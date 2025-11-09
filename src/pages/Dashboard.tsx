import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Session } from "@supabase/supabase-js";
import { KanbanColumn } from "@/components/KanbanColumn";
import { ArrowLeft, LogOut } from "lucide-react";

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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logout realizado",
      description: "Você saiu com sucesso",
    });
    navigate("/login");
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
        <div className="flex gap-6 overflow-x-auto pb-4">
          {statuses.map((status) => (
            <KanbanColumn
              key={status.key}
              title={status.title}
              status={status.key}
              requests={getRequestsByStatus(status.key)}
              count={getRequestsByStatus(status.key).length}
              color={status.color}
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
