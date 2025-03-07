import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { VendorProvider } from "./contexts/VendorContext";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import AdminDashboard from "./pages/admin/Dashboard";
import ProductsPage from "./pages/admin/Products";
import PaymentMethodsPage from "./pages/admin/PaymentMethods";
import VendorLogin from "./pages/vendor/Login";
import VendorDashboard from "./pages/vendor/Dashboard";
import VendorProductsPage from "./pages/vendor/Products";
import VendorOrdersPage from "./pages/vendor/Orders";
// filepath: src/pages/Home.tsx
import Home from './pages/Home';
// filepath: src/pages/About.tsx
import About from './pages/About';
// filepath: src/components/Testimonial.tsx
import Testimonial from './components/Testimonial';
// filepath: src/components/Footer.tsx
import Footer from './components/Footer';

// Create a new query client with better production settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <CartProvider>
            <VendorProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <div className="flex flex-col min-h-screen">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    
                    {/* Admin routes */}
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/products" element={<ProductsPage />} />
                    <Route path="/admin/payment" element={<PaymentMethodsPage />} />
                    
                    {/* Vendor routes */}
                    <Route path="/vendor/login" element={<VendorLogin />} />
                    <Route path="/vendor/dashboard" element={<VendorDashboard />} />
                    <Route path="/vendor/products" element={<VendorProductsPage />} />
                    <Route path="/vendor/orders" element={<VendorOrdersPage />} />
                    
                    {/* Fallback route for 404 pages */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                  <Testimonial />
                  <Footer />
                </div>
              </TooltipProvider>
            </VendorProvider>
          </CartProvider>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
