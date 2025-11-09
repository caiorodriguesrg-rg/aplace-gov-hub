import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { KanbanCard } from "./KanbanCard";

interface KanbanColumnProps {
  title: string;
  status: string;
  requests: any[];
  count: number;
  color: string;
  highlighted?: boolean;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, status: string) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
}

export const KanbanColumn = ({
  title,
  status,
  requests,
  count,
  color,
  highlighted = false,
  onDragOver,
  onDrop,
  onDragStart,
}: KanbanColumnProps) => {
  return (
    <div id={`kanban-column-${status}`} className="flex-1 min-w-[300px]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <Badge variant="secondary" className={color}>
          {count}
        </Badge>
      </div>
      <div
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, status)}
        className={`bg-muted/30 rounded-lg p-4 min-h-[600px] space-y-3 transition-all ${
          highlighted ? 'ring-2 ring-primary shadow-lg' : ''
        }`}
      >
        {requests.map((request) => (
          <KanbanCard
            key={request.id}
            request={request}
            onDragStart={onDragStart}
          />
        ))}
        {requests.length === 0 && (
          <p className="text-center text-muted-foreground text-sm py-8">
            Nenhum item
          </p>
        )}
      </div>
    </div>
  );
};
