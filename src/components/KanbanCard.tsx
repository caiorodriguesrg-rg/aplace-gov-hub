import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Building2, Calendar } from "lucide-react";

interface KanbanCardProps {
  request: {
    id: string;
    name: string;
    email: string;
    phone: string;
    organization: string;
    created_at: string;
    status: string;
  };
  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
}

export const KanbanCard = ({ request, onDragStart }: KanbanCardProps) => {
  return (
    <Card
      draggable
      onDragStart={(e) => onDragStart(e, request.id)}
      className="cursor-move hover:shadow-lg transition-shadow bg-card"
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-card-foreground">
          {request.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="h-4 w-4" />
          <span className="truncate">{request.organization}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span className="truncate">{request.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>{request.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t">
          <Calendar className="h-4 w-4" />
          <span>{new Date(request.created_at).toLocaleDateString("pt-BR")}</span>
        </div>
      </CardContent>
    </Card>
  );
};
