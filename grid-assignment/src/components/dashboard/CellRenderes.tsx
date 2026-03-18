import type { CustomCellRendererProps } from "ag-grid-react";

export function StatusRenderer(props: CustomCellRendererProps) {
  const active = props.value as boolean;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium ${
      active ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"
    }`}>
      <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-emerald-500" : "bg-slate-400"}`} />
      {active ? "Active" : "Inactive"}
    </span>
  );
}

export function RatingRenderer(props: CustomCellRendererProps) {
  const rating = props.value as number;
  const pct = (rating / 5) * 100;
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs tabular-nums text-foreground">{rating.toFixed(1)}</span>
    </div>
  );
}

export function SkillsRenderer(props: CustomCellRendererProps) {
  const skills = props.value as string[];
  if (!skills?.length) return null;
  return (
    <div className="flex gap-1 overflow-hidden">
      {skills.slice(0, 2).map(s => (
        <span key={s} className="inline-block max-w-[100px] truncate rounded bg-surface px-1.5 py-0.5 text-[11px] text-muted-foreground">
          {s}
        </span>
      ))}
      {skills.length > 2 && (
        <span className="rounded bg-surface px-1.5 py-0.5 text-[11px] text-muted-foreground">
          +{skills.length - 2}
        </span>
      )}
    </div>
  );
}

export function salaryFormatter(params: { value: number }) {
  return params.value != null ? `$${params.value.toLocaleString()}` : "";
}

export function dateFormatter(params: { value: string }) {
  if (!params.value) return "";
  return new Date(params.value).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}