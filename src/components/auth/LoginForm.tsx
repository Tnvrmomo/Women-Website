import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple mock authentication
    setTimeout(() => {
      setIsLoading(false);

      // Hidden admin credentials (NEVER do this in production)
      const ADMIN_CREDENTIALS = {
        email: "tjms.kp@gmail.com",
        password: "Pjokjict4"
      };

      if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem("userRole", "admin");
        localStorage.setItem("isAuthenticated", "true");
        toast({
          title: "Login successful",
          description: "Welcome back, Admin!",
        });
        navigate("/admin/dashboard");
      } 
      // Regular user login
      else if (email && password.length >= 6) {
        // ... existing user login code
      } else {
        // ... existing error handling
      }
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </Button>
      <div className="text-center text-sm">
        <p>
          Don't have an account?{" "}
          {/* ... existing signup link */}
        </p>
        <p className="mt-2 text-muted-foreground">
          <span className="block">Demo accounts:</span>
          <span className="block">Admin: admin@example.com / admin123</span>
          <span className="block">User: user@example.com / user123</span>
        </p>
      </div>
    </form>
  );
};

// import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;