
// Vendor product model
export interface VendorProduct {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  vendorId: string;
  totalSold: number;
}

// Vendor order model
export interface VendorOrder {
  id: number;
  date: string;
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  total: number;
  commission: number;
  netProfit: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
}

// Sales statistics model
export interface SalesStatistics {
  totalOrders: number;
  totalRevenue: number;
  totalProfit: number;
  commissionsTotal: number;
  weeklyData: WeeklyData[];
  topProducts: TopProduct[];
}

interface WeeklyData {
  week: string;
  orders: number;
  revenue: number;
  profit: number;
}

export interface TopProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  position: number;
}

// Visitors stats
export interface VisitorStats {
  day: string;
  visitors: number;
}

// Mock data
export const mockVendorProducts: VendorProduct[] = [
  {
    id: 1,
    name: "T-shirt Levis",
    sku: "TS-LEV-001",
    price: 49.99,
    stock: 42,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    description: "Classic Levis t-shirt with logo",
    vendorId: "v1",
    totalSold: 25
  },
  {
    id: 2,
    name: "Long jeans jacket",
    sku: "JJ-001",
    price: 129.99,
    stock: 18,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e",
    description: "Stylish long jean jacket, perfect for fall",
    vendorId: "v1",
    totalSold: 12
  },
  {
    id: 3,
    name: "Fullcap",
    sku: "FC-001",
    price: 20.99,
    stock: 56,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
    description: "Urban style fullcap hat",
    vendorId: "v1",
    totalSold: 34
  },
  {
    id: 4,
    name: "Adidas pants",
    sku: "AP-001",
    price: 89.99,
    stock: 21,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
    description: "Comfortable Adidas track pants",
    vendorId: "v1",
    totalSold: 18
  }
];

export const mockVendorOrders: VendorOrder[] = [
  {
    id: 1001,
    date: "2023-05-15",
    productId: 1,
    productName: "T-shirt Levis",
    quantity: 3,
    price: 49.99,
    total: 149.97,
    commission: 22.50,
    netProfit: 127.47,
    status: "delivered"
  },
  {
    id: 1002,
    date: "2023-05-16",
    productId: 2,
    productName: "Long jeans jacket",
    quantity: 1,
    price: 129.99,
    total: 129.99,
    commission: 19.50,
    netProfit: 110.49,
    status: "shipped"
  },
  {
    id: 1003,
    date: "2023-05-18",
    productId: 3,
    productName: "Fullcap",
    quantity: 2,
    price: 20.99,
    total: 41.98,
    commission: 6.30,
    netProfit: 35.68,
    status: "delivered"
  }
];

export const mockSalesStatistics: SalesStatistics = {
  totalOrders: 23789,
  totalRevenue: 7320.89,
  totalProfit: 12890.89,
  commissionsTotal: 840.00,
  weeklyData: [
    { week: "Week 1", orders: 40, revenue: 5200, profit: 4420 },
    { week: "Week 2", orders: 65, revenue: 6500, profit: 5525 },
    { week: "Week 3", orders: 100, revenue: 7320.89, profit: 6222.76 }
  ],
  topProducts: [
    {
      id: 1,
      name: "T-shirt Levis",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
      position: 1
    },
    {
      id: 2,
      name: "Long jeans jacket",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e",
      position: 2
    },
    {
      id: 3,
      name: "Fullcap",
      price: 20.99,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
      position: 3
    },
    {
      id: 4,
      name: "Adidas pants",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      position: 4
    }
  ]
};

export const mockVisitorStats: VisitorStats[] = [
  { day: "Mon", visitors: 30000 },
  { day: "Tue", visitors: 42000 },
  { day: "Wed", visitors: 28000 },
  { day: "Thu", visitors: 35000 },
  { day: "Fri", visitors: 27000 },
  { day: "Sat", visitors: 43000 },
  { day: "Sun", visitors: 35000 }
];
