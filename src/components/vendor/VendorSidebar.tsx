
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useVendor } from "@/contexts/VendorContext";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart, 
  FileText, 
  Settings, 
  LogOut 
} from "lucide-react";

const VendorSidebar = () => {
  const { currentVendor, logout } = useVendor();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    {
      name: "Dashboard",
      path: "/vendor/dashboard",
      icon: <LayoutDashboard className="w-5 h-5 mr-3" />,
    },
    {
      name: "Orders",
      path: "/vendor/orders",
      icon: <ShoppingCart className="w-5 h-5 mr-3" />,
    },
    {
      name: "Products",
      path: "/vendor/products",
      icon: <Package className="w-5 h-5 mr-3" />,
    },
    {
      name: "Reports",
      path: "/vendor/reports",
      icon: <FileText className="w-5 h-5 mr-3" />,
    },
    {
      name: "Settings",
      path: "/vendor/settings",
      icon: <Settings className="w-5 h-5 mr-3" />,
    },
  ];

  return (
    <div className="w-64 bg-indigo-700 text-white min-h-screen flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl">{currentVendor?.storeName}</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-white hover:bg-indigo-600 ${
                    isActive(item.path) ? "bg-indigo-600" : ""
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-indigo-600">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-white hover:bg-indigo-600"
          onClick={logout}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default VendorSidebar;
