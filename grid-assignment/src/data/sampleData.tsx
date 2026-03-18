export interface RowData {
  id: string;
  name: string;
  category: string;
  status: "Active" | "Inactive" | "Pending" | "Archived";
  priority: "High" | "Medium" | "Low";
  value: number;
  quantity: number;
  assignee: string;
  region: string;
  lastUpdated: string;
}

export const sampleData: RowData[] = [
  { id: "FW-001", name: "Alpha Component", category: "Hardware", status: "Active", priority: "High", value: 12450, quantity: 340, assignee: "Sarah Chen", region: "APAC", lastUpdated: "2026-03-15" },
  { id: "FW-002", name: "Beta Module", category: "Software", status: "Active", priority: "Medium", value: 8900, quantity: 120, assignee: "James Wilson", region: "NA", lastUpdated: "2026-03-14" },
  { id: "FW-003", name: "Gamma Sensor", category: "Hardware", status: "Pending", priority: "High", value: 23100, quantity: 560, assignee: "Priya Patel", region: "EMEA", lastUpdated: "2026-03-13" },
  { id: "FW-004", name: "Delta Interface", category: "Software", status: "Active", priority: "Low", value: 5670, quantity: 89, assignee: "Marcus Lee", region: "NA", lastUpdated: "2026-03-12" },
  { id: "FW-005", name: "Epsilon Core", category: "Infrastructure", status: "Inactive", priority: "Medium", value: 31200, quantity: 12, assignee: "Elena Rodriguez", region: "LATAM", lastUpdated: "2026-03-11" },
  { id: "FW-006", name: "Zeta Gateway", category: "Network", status: "Active", priority: "High", value: 18750, quantity: 45, assignee: "David Kim", region: "APAC", lastUpdated: "2026-03-10" },
  { id: "FW-007", name: "Eta Processor", category: "Hardware", status: "Archived", priority: "Low", value: 7800, quantity: 200, assignee: "Anna Fischer", region: "EMEA", lastUpdated: "2026-03-09" },
  { id: "FW-008", name: "Theta Analytics", category: "Software", status: "Active", priority: "Medium", value: 14300, quantity: 67, assignee: "Raj Sharma", region: "APAC", lastUpdated: "2026-03-08" },
  { id: "FW-009", name: "Iota Controller", category: "Infrastructure", status: "Pending", priority: "High", value: 42000, quantity: 8, assignee: "Sophie Martin", region: "EMEA", lastUpdated: "2026-03-07" },
  { id: "FW-010", name: "Kappa Display", category: "Hardware", status: "Active", priority: "Medium", value: 9100, quantity: 430, assignee: "Tom Baker", region: "NA", lastUpdated: "2026-03-06" },
  { id: "FW-011", name: "Lambda Service", category: "Software", status: "Inactive", priority: "Low", value: 3200, quantity: 15, assignee: "Yuki Tanaka", region: "APAC", lastUpdated: "2026-03-05" },
  { id: "FW-012", name: "Mu Adapter", category: "Network", status: "Active", priority: "High", value: 27600, quantity: 78, assignee: "Carlos Mendez", region: "LATAM", lastUpdated: "2026-03-04" },
  { id: "FW-013", name: "Nu Framework", category: "Software", status: "Active", priority: "Medium", value: 11400, quantity: 34, assignee: "Lisa Chang", region: "NA", lastUpdated: "2026-03-03" },
  { id: "FW-014", name: "Xi Board", category: "Hardware", status: "Pending", priority: "High", value: 56700, quantity: 5, assignee: "Alexei Petrov", region: "EMEA", lastUpdated: "2026-03-02" },
  { id: "FW-015", name: "Omicron Router", category: "Network", status: "Active", priority: "Low", value: 8400, quantity: 150, assignee: "Maria Santos", region: "LATAM", lastUpdated: "2026-03-01" },
  { id: "FW-016", name: "Pi Database", category: "Infrastructure", status: "Active", priority: "High", value: 38900, quantity: 3, assignee: "Henrik Larsson", region: "EMEA", lastUpdated: "2026-02-28" },
  { id: "FW-017", name: "Rho Connector", category: "Network", status: "Inactive", priority: "Medium", value: 6300, quantity: 92, assignee: "Wei Zhang", region: "APAC", lastUpdated: "2026-02-27" },
  { id: "FW-018", name: "Sigma Engine", category: "Software", status: "Active", priority: "High", value: 19800, quantity: 28, assignee: "Kate O'Brien", region: "NA", lastUpdated: "2026-02-26" },
  { id: "FW-019", name: "Tau Amplifier", category: "Hardware", status: "Archived", priority: "Low", value: 4100, quantity: 310, assignee: "Omar Hassan", region: "EMEA", lastUpdated: "2026-02-25" },
  { id: "FW-020", name: "Upsilon Cache", category: "Infrastructure", status: "Active", priority: "Medium", value: 15600, quantity: 21, assignee: "Julia Costa", region: "LATAM", lastUpdated: "2026-02-24" },
];