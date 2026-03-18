import { useState, useMemo } from "react";
import { sampleData, type RowData } from "../data/sampleData";

export interface KpiData {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}

export function useDashboardData() {
  const [rowData] = useState<RowData[]>(sampleData);
  const [selectedRows, setSelectedRows] = useState<RowData[]>([]);
  const [searchText, setSearchText] = useState("");

  const kpis = useMemo<KpiData[]>(() => {
    const totalRecords = rowData.length;
    const activeCount = rowData.filter(r => r.status === "Active").length;
    const totalValue = rowData.reduce((sum, r) => sum + r.value, 0);
    const totalQty = rowData.reduce((sum, r) => sum + r.quantity, 0);

    return [
      { label: "Total Records", value: totalRecords.toString(), change: "+3 this week", trend: "up" },
      { label: "Active", value: activeCount.toString(), change: `${Math.round((activeCount / totalRecords) * 100)}% of total`, trend: "up" },
      { label: "Total Value", value: `$${totalValue.toLocaleString()}`, change: "+12.4%", trend: "up" },
      { label: "Total Quantity", value: totalQty.toLocaleString(), change: "+8.2%", trend: "up" },
    ];
  }, [rowData]);

  return { rowData, selectedRows, setSelectedRows, searchText, setSearchText, kpis };
}