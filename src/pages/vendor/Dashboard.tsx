
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useVendor } from "@/contexts/VendorContext";
import VendorSidebar from "@/components/vendor/VendorSidebar";
import StatsCard from "@/components/vendor/StatsCard";
import SalesChart from "@/components/vendor/SalesChart";
import VisitorsChart from "@/components/vendor/VisitorsChart";
import TopProducts from "@/components/vendor/TopProducts";
import { 
  Package, 
  DollarSign, 
  Search 
} from "lucide-react";
import { 
  mockSalesStatistics, 
  mockVisitorStats 
} from "@/models/vendor";
import { Input } from "@/components/ui/input";

const VendorDashboard = () => {
  const { currentVendor, isLoading } = useVendor();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !currentVendor) {
      navigate("/vendor/login");
    }
  }, [currentVendor, isLoading, navigate]);

  if (isLoading || !currentVendor) {
    return <div>Loading...</div>;
  }

  const commissionRate = 15; // 15% commission rate

  return (
    <div className="flex min-h-screen bg-gray-50">
      <VendorSidebar />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">
            Welcome, {currentVendor.name.split(' ')[0]}
          </h1>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search for products..." 
                className="pl-10 w-64"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <StatsCard 
            title="Orders"
            value={mockSalesStatistics.totalOrders.toLocaleString()}
            increasedBy="20"
            bgColor="bg-blue-50"
            icon={<Package className="h-10 w-10 p-2 bg-blue-100 text-blue-600 rounded-lg" />}
          />
          
          <StatsCard 
            title="Profit"
            value={`$${mockSalesStatistics.totalProfit.toLocaleString(undefined, {
              minimumFractionDigits: 2, 
              maximumFractionDigits: 2
            })}`}
            subValue={`Commission (${commissionRate}%): $${mockSalesStatistics.commissionsTotal.toFixed(2)}`}
            bgColor="bg-pink-50"
            icon={<DollarSign className="h-10 w-10 p-2 bg-pink-100 text-pink-600 rounded-lg" />}
          />
        </div>
        
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2">
            <SalesChart data={mockSalesStatistics} />
          </div>
          
          <div>
            <TopProducts products={mockSalesStatistics.topProducts} />
          </div>
        </div>
        
        <div>
          <VisitorsChart data={mockVisitorStats} />
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
