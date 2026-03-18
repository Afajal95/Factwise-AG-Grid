import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import type { KpiData } from "../../hooks/useDashboardData";4
import type { Transition } from "framer-motion";


const transition: Transition = {
  duration: 0.2,
  ease: [0.2, 0, 0, 1],
};

interface KpiCardsProps {
  kpis: KpiData[];
}

export function KpiCards({ kpis }: KpiCardsProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {kpis.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: i * 0.04 }}
          className="rounded-xl bg-card p-5 shadow-card"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {kpi.label}
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground tabular-nums">
            {kpi.value}
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <TrendingUp className="h-3 w-3 text-accent" />
            <span className="text-xs text-muted-foreground">{kpi.change}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}