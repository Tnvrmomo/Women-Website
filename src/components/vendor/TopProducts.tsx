
import React from "react";
import { TopProduct } from "@/models/vendor";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface TopProductsProps {
  products: TopProduct[];
}

const TopProducts: React.FC<TopProductsProps> = ({ products }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Top selling products</h3>
        <Button variant="ghost" size="sm" className="text-sm text-indigo-600 hover:bg-indigo-50">
          See all <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center">
            <div className="text-indigo-600 font-semibold w-5">
              {product.position}
            </div>
            <div className="w-14 h-14 rounded-md overflow-hidden ml-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="font-medium text-gray-800">{product.name}</p>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
