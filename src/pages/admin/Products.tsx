import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Package, 
  ShoppingCart, 
  Users, 
  CreditCard, 
  Settings, 
  LogOut,
  Plus,
  Pencil,
  Trash2
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: "Test Item",
    sku: "TST-001",
    price: "$1,232",
    stock: 12,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: 2,
    name: "Premium Laptop",
    sku: "LPT-002",
    price: "$1,231",
    stock: 8,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 3,
    name: "Smart Gadget",
    sku: "GDT-003",
    price: "$1,234",
    stock: 15,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 4,
    name: "Tech Accessory",
    sku: "ACC-004",
    price: "$21",
    stock: 42,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }
];

const ProductsPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [products, setProducts] = useState(mockProducts);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [productForm, setProductForm] = useState({
    name: "",
    sku: "",
    price: "",
    stock: "",
    description: "",
    image: ""
  });

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleAddNewProduct = () => {
    setEditingProduct(null);
    setProductForm({
      name: "",
      sku: "",
      price: "",
      stock: "",
      description: "",
      image: ""
    });
    setDialogOpen(true);
  };

  const handleEditProduct = (product: any) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      sku: product.sku,
      price: product.price.replace("$", ""),
      stock: product.stock.toString(),
      description: product.description || "",
      image: product.image
    });
    setDialogOpen(true);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
    toast({
      title: "Product Deleted",
      description: "The product has been successfully deleted.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProduct) {
      // Update existing product
      setProducts(products.map(product => 
        product.id === editingProduct.id ? {
          ...product,
          name: productForm.name,
          sku: productForm.sku,
          price: `$${productForm.price}`,
          stock: parseInt(productForm.stock),
          description: productForm.description,
          image: productForm.image
        } : product
      ));
      
      toast({
        title: "Product Updated",
        description: "The product has been successfully updated.",
      });
    } else {
      // Add new product
      const newProduct = {
        id: Math.max(...products.map(p => p.id)) + 1,
        name: productForm.name,
        sku: productForm.sku,
        price: `$${productForm.price}`,
        stock: parseInt(productForm.stock),
        description: productForm.description,
        image: productForm.image || "https://placehold.co/400x400?text=Product+Image"
      };
      
      setProducts([...products, newProduct]);
      
      toast({
        title: "Product Added",
        description: "The new product has been successfully added.",
      });
    }
    
    setDialogOpen(false);
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
            className="w-full justify-start text-white bg-primary/80 hover:bg-primary/90"
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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Products</h1>
          <Button onClick={handleAddNewProduct}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SKU
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-16 w-16 rounded-md overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{product.sku}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.stock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEditProduct(product)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500" onClick={() => handleDeleteProduct(product.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Product Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>{editingProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
            <DialogDescription>
              {editingProduct ? "Update product details below." : "Fill out the form below to add a new product."}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmitProduct} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={productForm.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input 
                  id="sku" 
                  name="sku" 
                  value={productForm.sku} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input 
                  id="price" 
                  name="price" 
                  type="number"
                  min="0" 
                  step="0.01"
                  value={productForm.price} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="stock">Stock</Label>
                <Input 
                  id="stock" 
                  name="stock" 
                  type="number"
                  min="0"
                  value={productForm.stock} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input 
                id="image" 
                name="image" 
                value={productForm.image} 
                onChange={handleInputChange} 
                placeholder="https://example.com/image.jpg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                value={productForm.description} 
                onChange={handleInputChange} 
                rows={3}
              />
            </div>
            
            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingProduct ? "Update Product" : "Add Product"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
