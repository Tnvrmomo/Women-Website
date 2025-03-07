
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const orderNumber = `ORD-${Math.floor(Math.random() * 1000000)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-2">Order Successful!</h1>
          <p className="text-accent mb-4">Your order #{orderNumber} has been placed successfully.</p>
          
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h2 className="font-medium mb-2">What happens next?</h2>
            <p className="text-sm text-accent mb-4">
              We're preparing your order for delivery. You'll receive an email confirmation shortly.
            </p>
            <p className="text-sm text-accent">
              For any questions about your order, please contact our customer support.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" onClick={() => navigate("/")}>
              Back to Home
            </Button>
            <Button onClick={() => navigate("/marketplace")}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderSuccess;
