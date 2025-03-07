
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const { isAuthenticated, userRole, logout } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">EZ SHOP</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/marketplace" className="nav-link">Mobile phone</Link>
          <Link to="/marketplace" className="nav-link">Laptop</Link>
          <Link to="/marketplace" className="nav-link">Gadget</Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>EZ SHOP</SheetTitle>
                <SheetDescription>Shop the latest products</SheetDescription>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                <Link to="/marketplace" className="px-4 py-2 hover:bg-accent rounded-md">Mobile phone</Link>
                <Link to="/marketplace" className="px-4 py-2 hover:bg-accent rounded-md">Laptop</Link>
                <Link to="/marketplace" className="px-4 py-2 hover:bg-accent rounded-md">Gadget</Link>
                
                {isAuthenticated ? (
                  <>
                    {userRole === "admin" && (
                      <Link to="/admin/dashboard" className="px-4 py-2 hover:bg-accent rounded-md">Admin Dashboard</Link>
                    )}
                    <Button variant="ghost" onClick={handleLogout} className="justify-start px-4">
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="px-4 py-2 hover:bg-accent rounded-md">Login</Link>
                    <Link to="/signup" className="px-4 py-2 hover:bg-accent rounded-md">Sign Up</Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center space-x-6">
          <button className="p-2 hover:text-accent transition-colors">
            <Search size={20} />
          </button>
          
          <Popover>
            <PopoverTrigger asChild>
              <button className="p-2 hover:text-accent transition-colors">
                <User size={20} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-56" align="end">
              {isAuthenticated ? (
                <div className="space-y-2">
                  <div className="font-medium pb-2 border-b border-gray-100">
                    <div>Welcome back!</div>
                    <div className="text-sm text-muted-foreground">
                      {userRole === "admin" ? "Admin Account" : "User Account"}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    {userRole === "admin" && (
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start" 
                        onClick={() => navigate("/admin/dashboard")}
                      >
                        Admin Dashboard
                      </Button>
                    )}
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => navigate("/profile")}
                    >
                      Profile
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => navigate("/orders")}
                    >
                      My Orders
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="font-medium pb-2 border-b border-gray-100">Account</div>
                  <div className="space-y-1">
                    <Button 
                      variant="default" 
                      className="w-full" 
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => navigate("/signup")}
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              )}
            </PopoverContent>
          </Popover>
          
          <div className="relative">
            <button 
              className="p-2 hover:text-accent transition-colors"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
