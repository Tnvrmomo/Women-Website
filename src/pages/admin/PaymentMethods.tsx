
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Package, 
  ShoppingCart, 
  Users, 
  CreditCard, 
  Settings, 
  LogOut,
  CreditCard as CardIcon,
  Banknote,
  Bitcoin
} from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const PaymentMethodsPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [paymentMethods, setPaymentMethods] = useState({
    stripe: {
      enabled: false,
      apiKey: "",
      secretKey: ""
    },
    paypal: {
      enabled: false,
      clientId: "",
      clientSecret: ""
    },
    crypto: {
      enabled: false,
      walletAddress: ""
    }
  });

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleTogglePaymentMethod = (method: 'stripe' | 'paypal' | 'crypto') => {
    setPaymentMethods({
      ...paymentMethods,
      [method]: {
        ...paymentMethods[method],
        enabled: !paymentMethods[method].enabled
      }
    });
  };

  const handleInputChange = (method: 'stripe' | 'paypal' | 'crypto', field: string, value: string) => {
    setPaymentMethods({
      ...paymentMethods,
      [method]: {
        ...paymentMethods[method],
        [field]: value
      }
    });
  };

  const handleSaveSettings = (method: 'stripe' | 'paypal' | 'crypto') => {
    toast({
      title: "Settings Saved",
      description: `${method.charAt(0).toUpperCase() + method.slice(1)} payment method settings have been saved.`,
    });
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
            className="w-full justify-start text-white bg-primary/80 hover:bg-primary/90"
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
        <h1 className="text-3xl font-bold mb-6">Payment Methods</h1>
        
        <Alert className="mb-6">
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            Configure payment gateway settings here. Make sure to keep your API keys and secret keys secure.
          </AlertDescription>
        </Alert>
        
        <div className="space-y-8">
          {/* Stripe */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <CardIcon className="h-8 w-8 text-[#6772E5] mr-3" />
                <h2 className="text-xl font-semibold">Stripe</h2>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">{paymentMethods.stripe.enabled ? "Enabled" : "Disabled"}</span>
                <div 
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${paymentMethods.stripe.enabled ? "bg-green-500" : "bg-gray-300"}`}
                  onClick={() => handleTogglePaymentMethod("stripe")}
                >
                  <div className={`bg-white w-4 h-4 rounded-full transform transition-transform ${paymentMethods.stripe.enabled ? "translate-x-6" : ""}`} />
                </div>
              </div>
            </div>
            
            {paymentMethods.stripe.enabled && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="stripe-api-key">API Key (Publishable Key)</Label>
                  <Input 
                    id="stripe-api-key" 
                    value={paymentMethods.stripe.apiKey}
                    onChange={(e) => handleInputChange("stripe", "apiKey", e.target.value)}
                    placeholder="pk_test_..."
                  />
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="stripe-secret-key">Secret Key</Label>
                  <Input 
                    id="stripe-secret-key" 
                    type="password"
                    value={paymentMethods.stripe.secretKey}
                    onChange={(e) => handleInputChange("stripe", "secretKey", e.target.value)}
                    placeholder="sk_test_..."
                  />
                  <p className="text-xs text-accent mt-1">
                    Your secret key should be kept secure and never exposed in client-side code.
                  </p>
                </div>
                
                <Button onClick={() => handleSaveSettings("stripe")}>Save Stripe Settings</Button>
              </div>
            )}
          </div>
          
          {/* PayPal */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Banknote className="h-8 w-8 text-[#003087] mr-3" />
                <h2 className="text-xl font-semibold">PayPal</h2>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">{paymentMethods.paypal.enabled ? "Enabled" : "Disabled"}</span>
                <div 
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${paymentMethods.paypal.enabled ? "bg-green-500" : "bg-gray-300"}`}
                  onClick={() => handleTogglePaymentMethod("paypal")}
                >
                  <div className={`bg-white w-4 h-4 rounded-full transform transition-transform ${paymentMethods.paypal.enabled ? "translate-x-6" : ""}`} />
                </div>
              </div>
            </div>
            
            {paymentMethods.paypal.enabled && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="paypal-client-id">Client ID</Label>
                  <Input 
                    id="paypal-client-id" 
                    value={paymentMethods.paypal.clientId}
                    onChange={(e) => handleInputChange("paypal", "clientId", e.target.value)}
                    placeholder="Client ID from PayPal Developer Dashboard"
                  />
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="paypal-client-secret">Client Secret</Label>
                  <Input 
                    id="paypal-client-secret" 
                    type="password"
                    value={paymentMethods.paypal.clientSecret}
                    onChange={(e) => handleInputChange("paypal", "clientSecret", e.target.value)}
                    placeholder="Client Secret from PayPal Developer Dashboard"
                  />
                </div>
                
                <Button onClick={() => handleSaveSettings("paypal")}>Save PayPal Settings</Button>
              </div>
            )}
          </div>
          
          {/* Cryptocurrency */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Bitcoin className="h-8 w-8 text-[#F7931A] mr-3" />
                <h2 className="text-xl font-semibold">Cryptocurrency</h2>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">{paymentMethods.crypto.enabled ? "Enabled" : "Disabled"}</span>
                <div 
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${paymentMethods.crypto.enabled ? "bg-green-500" : "bg-gray-300"}`}
                  onClick={() => handleTogglePaymentMethod("crypto")}
                >
                  <div className={`bg-white w-4 h-4 rounded-full transform transition-transform ${paymentMethods.crypto.enabled ? "translate-x-6" : ""}`} />
                </div>
              </div>
            </div>
            
            {paymentMethods.crypto.enabled && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="crypto-wallet">Wallet Address</Label>
                  <Input 
                    id="crypto-wallet" 
                    value={paymentMethods.crypto.walletAddress}
                    onChange={(e) => handleInputChange("crypto", "walletAddress", e.target.value)}
                    placeholder="Your Bitcoin or Ethereum wallet address"
                  />
                </div>
                
                <p className="text-sm text-accent">
                  Accepting cryptocurrency requires additional setup and integration with crypto payment processors.
                  This is a simplified example for demonstration purposes.
                </p>
                
                <Button onClick={() => handleSaveSettings("crypto")}>Save Crypto Settings</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsPage;
