import { motion } from "framer-motion";
import { Users, Building2, DollarSign, Star } from "lucide-react";
import type { KpiData } from "../../hooks/useEmployeeData";
import type { Transition } from "framer-motion";

const icons = [Users, Building2, DollarSign, Star];


const transition: Transition = {
  duration: 0.2,
  ease: [0.2, 0, 0, 1],
};

export function KpiCards({ kpis }: { kpis: KpiData[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {kpis.map((kpi, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: i * 0.04 }}
            className="rounded-xl bg-card p-4 shadow-card"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface">
                <Icon className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {kpi.label}
              </span>
            </div>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground tabular-nums">
              {kpi.value}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">{kpi.subtitle}</p>
          </motion.div>
        );
      })}
    </div>
  );
}