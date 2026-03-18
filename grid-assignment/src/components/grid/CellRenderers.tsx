import type { CustomCellRendererProps } from "ag-grid-react";

export function StatusBadge(props: CustomCellRendererProps) {
  const status = props.value as string;

  const styles: Record<string, string> = {
    Active: "bg-emerald-50 text-emerald-700",
    Inactive: "bg-slate-100 text-slate-600",
    Pending: "bg-amber-50 text-amber-700",
    Archived: "bg-slate-50 text-slate-400",
  };

  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${styles[status] || "bg-muted text-muted-foreground"}`}>
      <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
        status === "Active" ? "bg-emerald-500" :
        status === "Pending" ? "bg-amber-500" :
        status === "Inactive" ? "bg-slate-400" : "bg-slate-300"
      }`} />
      {status}
    </span>
  );
}

export function PriorityBadge(props: CustomCellRendererProps) {
  const priority = props.value as string;

  const styles: Record<string, string> = {
    High: "text-rose-600",
    Medium: "text-foreground",
    Low: "text-muted-foreground",
  };

  return (
    <span className={`text-sm font-medium ${styles[priority] || "text-foreground"}`}>
      {priority}
    </span>
  );
}

export function currencyFormatter(params: { value: number }) {
  return params.value != null ? `$${params.value.toLocaleString()}` : "";
}