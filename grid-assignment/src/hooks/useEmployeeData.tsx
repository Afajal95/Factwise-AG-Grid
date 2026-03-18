import { useMemo } from "react";
import { employees, type Employee } from "../data/employee";

export interface KpiData {
  label: string;
  value: string;
  subtitle: string;
}

export function useEmployeeData() {
  const kpis = useMemo<KpiData[]>(() => {
    const total = employees.length;
    const active = employees.filter(e => e.isActive).length;
    const avgSalary = Math.round(employees.reduce((s, e) => s + e.salary, 0) / total);
    const avgRating = (employees.reduce((s, e) => s + e.performanceRating, 0) / total).toFixed(1);
    const departments = new Set(employees.map(e => e.department)).size;
    const totalProjects = employees.reduce((s, e) => s + e.projectsCompleted, 0);

    return [
      { label: "Total Employees", value: total.toString(), subtitle: `${active} active` },
      { label: "Departments", value: departments.toString(), subtitle: `${Math.round(total / departments)} avg size` },
      { label: "Avg. Salary", value: `$${avgSalary.toLocaleString()}`, subtitle: "Across all roles" },
      { label: "Avg. Rating", value: avgRating, subtitle: `${totalProjects} projects total` },
    ];
  }, []);

  return { rowData: employees, kpis };
}