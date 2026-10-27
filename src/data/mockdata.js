
// 1. Overview Analytics KPIs
export const mockKpis = [
  {
    label: "TOTAL REVENUE",
    value: "$142,850.40",
    change: "+12.4%",
    isPositive: true,
    subtext: "vs. last month ($127,100)",
  },
  {
    label: "TOTAL ORDERS",
    value: "3,842",
    change: "+8.2%",
    isPositive: true,
    subtext: "vs. last month (3,550)",
  },
  {
    label: "ACTIVE CUSTOMERS",
    value: "12,480",
    change: "+24.1%",
    isPositive: true,
    subtext: "1,640 new this month",
  },
  {
    label: "CONVERSION RATE",
    value: "3.64%",
    change: "-0.4%",
    isPositive: false,
    subtext: "Industry bench: 3.20%",
  },
];

// 2. Revenue & Volume Velocity Chart Data
export const mockRevenueData = [
  { date: "May", revenue: 42000, orders: 1100 },
  { date: "Jun", revenue: 58000, orders: 1450 },
  { date: "Jul", revenue: 74000, orders: 1890 },
  { date: "Aug", revenue: 91000, orders: 2300 },
  { date: "Sep", revenue: 118000, orders: 3100 },
  { date: "Oct", revenue: 142850, orders: 3842 },
  { date: "Nov (Proj)", revenue: 158000, orders: 4200 },
];

// 3. Category Breakdown (Donut Chart)
export const mockCategoryData = [
  { name: "SaaS Licenses", value: 58400, color: "#4F46E5" }, // Indigo
  { name: "Hardware Extensions", value: 34200, color: "#00C853" }, // Emerald
  { name: "Cloud Analytics", value: 28500, color: "#06B6D4" }, // Cyan
  { name: "API Usage & Addons", value: 21750, color: "#F59E0B" }, // Amber
];

// 4. Recent Orders Table Data
export const mockOrders = [
  {
    id: "ORD-9482",
    customer: { name: "Sarah Jenkins", email: "sarah.j@example.com" },
    product: "Enterprise Plan - Annual",
    amount: 1250.00,
    status: "Completed",
    date: "2 mins ago",
    channel: "Direct",
  },
  {
    id: "ORD-9481",
    customer: { name: "Alex Rivera", email: "arivera@techcorp.io" },
    product: "Analytics Addon Pack",
    amount: 299.00,
    status: "Completed",
    date: "14 mins ago",
    channel: "Marketplace",
  },
  {
    id: "ORD-9480",
    customer: { name: "Marcus Chen", email: "m.chen@designhub.co" },
    product: "Pro Tier License",
    amount: 499.00,
    status: "Pending",
    date: "42 mins ago",
    channel: "Social",
  },
  {
    id: "ORD-9479",
    customer: { name: "Emma Watson", email: "emma@creative.agency" },
    product: "Custom Integration Setup",
    amount: 2450.00,
    status: "Shipped",
    date: "1 hour ago",
    channel: "Direct",
  },
  {
    id: "ORD-9478",
    customer: { name: "David Miller", email: "d.miller@gmail.com" },
    product: "Starter Plan - Monthly",
    amount: 49.00,
    status: "Cancelled",
    date: "3 hours ago",
    channel: "Social",
  },
];

// 5. Store Inventory / Products List
export const mockProducts = [
  {
    id: "PROD-01",
    name: "MetricPulse Enterprise Suite",
    category: "SaaS",
    price: 1299.00,
    stock: 999,
    sales: 420,
    status: "In Stock",
    image: "/images/prod-1.jpg",
  },
  {
    id: "PROD-02",
    name: "Telemetry Hardware Hub v2",
    category: "Hardware",
    price: 499.00,
    stock: 14,
    sales: 185,
    status: "Low Stock",
    image: "/images/prod-2.jpg",
  },
  {
    id: "PROD-03",
    name: "API Rate-Limit Expansion Key",
    category: "API",
    price: 199.00,
    stock: 0,
    sales: 610,
    status: "Out of Stock",
    image: "/images/prod-3.jpg",
  },
];