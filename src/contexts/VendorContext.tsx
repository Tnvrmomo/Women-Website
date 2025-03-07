
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export interface Vendor {
  id: string;
  name: string;
  email: string;
  storeName: string;
  joinDate: string;
}

// Mock vendors data
const mockVendors = [
  {
    id: "v1",
    name: "Damian Smith",
    email: "vendor@example.com",
    password: "vendor123",
    storeName: "ForShop",
    joinDate: "2023-01-15"
  }
];

interface VendorContextType {
  currentVendor: Vendor | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const VendorContext = createContext<VendorContextType | undefined>(undefined);

export const VendorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentVendor, setCurrentVendor] = useState<Vendor | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check for stored vendor data on init
    const storedVendor = localStorage.getItem("vendor");
    if (storedVendor) {
      setCurrentVendor(JSON.parse(storedVendor));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const vendor = mockVendors.find(
      v => v.email === email && v.password === password
    );
    
    if (vendor) {
      const { password, ...vendorData } = vendor;
      setCurrentVendor(vendorData);
      localStorage.setItem("vendor", JSON.stringify(vendorData));
      toast({
        title: "Login successful",
        description: `Welcome back, ${vendorData.name}!`,
      });
      return true;
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive"
      });
      return false;
    }
  };

  const logout = () => {
    setCurrentVendor(null);
    localStorage.removeItem("vendor");
    navigate("/vendor/login");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <VendorContext.Provider value={{ currentVendor, login, logout, isLoading }}>
      {children}
    </VendorContext.Provider>
  );
};

export const useVendor = () => {
  const context = useContext(VendorContext);
  if (context === undefined) {
    throw new Error("useVendor must be used within a VendorProvider");
  }
  return context;
};
