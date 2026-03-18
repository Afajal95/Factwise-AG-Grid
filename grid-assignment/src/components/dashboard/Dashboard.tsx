 import { useState, useCallback, useMemo, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, type ColDef, type GridReadyEvent, type SelectionChangedEvent, type GridApi } from "ag-grid-community";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Download, X, Users } from "lucide-react";
import { useEmployeeData } from "../../hooks/useEmployeeData";
import { KpiCards } from "../../components/dashboard/KpiCards";
import { StatusRenderer, RatingRenderer, SkillsRenderer, salaryFormatter, dateFormatter } from "../../components/dashboard/CellRenderes";
import type { Employee } from "../../data/employee";
import "../../styles/ag-grid-theme.css";
import type { Transition } from "framer-motion";

const transition: Transition = {
  duration: 0.2,
  ease: [0.2, 0, 0, 1],
};

export default function Dashboard() {
  const { rowData, kpis } = useEmployeeData();
  const [searchText, setSearchText] = useState("");
  const [selectedCount, setSelectedCount] = useState(0);
  const gridApiRef = useRef<GridApi | null>(null);

  const columnDefs = useMemo<ColDef<Employee>[]>(() => [
    { field: "id", headerName: "ID", width: 70, checkboxSelection: false, headerCheckboxSelection: true },
    { field: "firstName", headerName: "First Name", flex: 1, minWidth: 110 },
    { field: "lastName", headerName: "Last Name", flex: 1, minWidth: 110 },
    { field: "department", headerName: "Department", flex: 1, minWidth: 120, filter: "agSetColumnFilter" },
    { field: "position", headerName: "Position", flex: 1.3, minWidth: 150 },
    { field: "salary", headerName: "Salary", width: 120, type: "numericColumn", valueFormatter: salaryFormatter, filter: "agNumberColumnFilter" },
    { field: "location", headerName: "Location", width: 120, filter: "agSetColumnFilter" },
    { field: "hireDate", headerName: "Hire Date", width: 130, valueFormatter: dateFormatter, filter: "agDateColumnFilter" },
    { field: "performanceRating", headerName: "Rating", width: 140, cellRenderer: RatingRenderer },
    { field: "projectsCompleted", headerName: "Projects", width: 95, type: "numericColumn" },
    { field: "isActive", headerName: "Status", width: 110, cellRenderer: StatusRenderer },
    { field: "skills", headerName: "Skills", flex: 1, minWidth: 180, cellRenderer: SkillsRenderer, sortable: false, filter: false },
    { field: "manager", headerName: "Manager", flex: 1, minWidth: 130, valueFormatter: (p) => p.value ?? "—" },
  ], []);

  const defaultColDef = useMemo<ColDef>(() => ({
    sortable: true,
    filter: true,
    resizable: true,
  }), []);

  const onGridReady = useCallback((e: GridReadyEvent) => {
    gridApiRef.current = e.api;
  }, []);

  const onSelectionChanged = useCallback((e: SelectionChangedEvent) => {
    setSelectedCount(e.api.getSelectedRows().length);
  }, []);

  const onSearchChange = useCallback((value: string) => {
    setSearchText(value);
    gridApiRef.current?.setGridOption("quickFilterText", value);
  }, []);

  const exportCsv = useCallback(() => {
    gridApiRef.current?.exportDataAsCsv({ fileName: "factwise-employees.csv" });
  }, []);

  const clearSelection = useCallback(() => {
    gridApiRef.current?.deselectAll();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <span className="text-sm font-bold text-primary-foreground">F</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-foreground">FactWise</h1>
              <p className="text-xs text-muted-foreground">Employee Dashboard</p>
            </div>
          </div>
          <button
            onClick={exportCsv}
            className="flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-border"
          >
            <Download className="h-3.5 w-3.5" />
            Export CSV
          </button>
        </div>
      </header>

      <main className="flex-1 space-y-4 p-6">
        <KpiCards kpis={kpis} />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
         transition={{ ...transition, delay: 0.18 }}
          className="rounded-xl bg-card shadow-card"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Employees</span>
              <span className="rounded-md bg-surface px-1.5 py-0.5 text-[11px] tabular-nums text-muted-foreground">
                {rowData.length}
              </span>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchText}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-8 w-56 rounded-md border border-border bg-background pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1"
              />
            </div>
          </div>

          <div className="ag-theme-custom" style={{ height: 540 }}>
            <AgGridReact<Employee>
              modules={[AllCommunityModule]}
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowSelection={{ mode: "multiRow" }}
              onGridReady={onGridReady}
              onSelectionChanged={onSelectionChanged}
              animateRows={true}
              suppressCellFocus={false}
              enableCellTextSelection={true}
            />
          </div>
        </motion.div>
      </main>

      <AnimatePresence>
        {selectedCount > 0 && (
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={transition}
            className="fixed inset-x-0 bottom-6 mx-auto flex w-fit items-center gap-4 rounded-xl bg-foreground px-5 py-3 shadow-elevated"
          >
            <span className="text-sm font-medium text-primary-foreground">
              {selectedCount} row{selectedCount > 1 ? "s" : ""} selected
            </span>
            <div className="h-4 w-px bg-primary-foreground/20" />
            <button
              onClick={exportCsv}
              className="rounded-md bg-accent px-3 py-1 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Export Selected
            </button>
            <button
              onClick={clearSelection}
              className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <X className="h-3 w-3" />
              Clear
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}