
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  ShoppingCart, 
  Users, 
  CreditCard, 
  Settings, 
  LogOut 
} from "lucide-react";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-primary text-white p-6 flex flex-col">
        <div className="text-2xl font-bold mb-8">Admin Dashboard</div>
        
        <nav className="space-y-1 flex-1">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white hover:bg-primary/90"
            onClick={() => navigate("/admin/dashboard")}
          >
            <Package className="mr-2 h-5 w-5" />
            Dashboard
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white hover:bg-primary/90"
            onClick={() => navigate("/admin/products")}
          >
            <Package className="mr-2 h-5 w-5" />
            Products
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white hover:bg-primary/90"
            onClick={() => navigate("/admin/orders")}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Orders
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white hover:bg-primary/90"
            onClick={() => navigate("/admin/customers")}
          >
            <Users className="mr-2 h-5 w-5" />
            Customers
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white hover:bg-primary/90"
            onClick={() => navigate("/admin/payment")}
          >
            <CreditCard className="mr-2 h-5 w-5" />
            Payment Methods
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white hover:bg-primary/90"
            onClick={() => navigate("/admin/settings")}
          >
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>
        </nav>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start text-white hover:bg-primary/90"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Button>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome, Admin</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium mb-2">Total Products</h3>
            <p className="text-3xl font-bold">24</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium mb-2">Total Orders</h3>
            <p className="text-3xl font-bold">12</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium mb-2">Total Revenue</h3>
            <p className="text-3xl font-bold">$4,582</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Order #12345</p>
                  <p className="text-sm text-accent">2 hours ago</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$156.00</p>
                  <p className="text-sm text-green-500">Completed</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Order #12344</p>
                  <p className="text-sm text-accent">5 hours ago</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$228.00</p>
                  <p className="text-sm text-blue-500">Processing</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Order #12343</p>
                  <p className="text-sm text-accent">Yesterday</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$92.50</p>
                  <p className="text-sm text-green-500">Completed</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="mt-4 w-full">View All Orders</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">New Customers</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">JD</div>
                <div className="ml-4">
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-accent">Joined today</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">AS</div>
                <div className="ml-4">
                  <p className="font-medium">Alice Smith</p>
                  <p className="text-sm text-accent">Joined yesterday</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">RJ</div>
                <div className="ml-4">
                  <p className="font-medium">Robert Johnson</p>
                  <p className="text-sm text-accent">Joined 3 days ago</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="mt-4 w-full">View All Customers</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
