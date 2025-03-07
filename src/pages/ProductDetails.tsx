
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { Star, Plus, Minus, ShoppingCart, Heart, Share2 } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // In a real app, you would fetch the product details using the id
  const product = {
    id: Number(id),
    name: "Test Item",
    price: "$1,232",
    rating: 4,
    reviews: 25,
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    ],
    description: "This is a detailed description of the product. This premium product offers exceptional quality and features. Perfect for both professional and casual use, it's designed to meet all your needs with its innovative technology and sleek design.",
    specs: {
      brand: "EZ SHOP",
      model: "TS-200",
      dimensions: "200 x 150 x 75 mm",
      weight: "1.2 kg",
      color: "Silver/Black"
    }
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} (${quantity}) added to your cart`,
    });
  };

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${
                    activeImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold text-primary">{product.price}</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? "fill-[#ffd700] text-[#ffd700]" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-accent ml-2">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <p className="text-accent">{product.description}</p>

            <div className="pt-4">
              <div className="flex items-center mb-6">
                <div className="border rounded-l-md px-3 py-2">
                  <Minus 
                    className="w-4 h-4 cursor-pointer" 
                    onClick={decreaseQuantity}
                  />
                </div>
                <div className="border-t border-b px-6 py-2 text-center w-16">
                  {quantity}
                </div>
                <div className="border rounded-r-md px-3 py-2">
                  <Plus 
                    className="w-4 h-4 cursor-pointer" 
                    onClick={increaseQuantity}
                  />
                </div>
                <div className="ml-4 text-accent text-sm">
                  In Stock
                </div>
              </div>
              
              <div className="flex gap-4 flex-wrap">
                <Button 
                  className="flex-1" 
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button 
                  variant="secondary" 
                  className="flex-1"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>
              </div>
              
              <div className="flex gap-4 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  {product.description}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="specifications">
                <AccordionTrigger>Specifications</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2">
                      <span className="text-accent">Brand:</span>
                      <span>{product.specs.brand}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-accent">Model:</span>
                      <span>{product.specs.model}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-accent">Dimensions:</span>
                      <span>{product.specs.dimensions}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-accent">Weight:</span>
                      <span>{product.specs.weight}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-accent">Color:</span>
                      <span>{product.specs.color}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="reviews">
                <AccordionTrigger>Reviews</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating ? "fill-[#ffd700] text-[#ffd700]" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm">Based on {product.reviews} reviews</span>
                    </div>
                    
                    <p className="text-sm text-accent">
                      Customer reviews would be displayed here. In a complete implementation, this would be populated with 
                      actual user reviews from the database.
                    </p>
                    
                    <Button variant="outline" size="sm">Write a Review</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Shipping Info */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Free shipping</h3>
                <p className="text-sm text-accent">On orders over $50.00</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Very easy to return</h3>
                <p className="text-sm text-accent">Just phone number</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Nationwide delivery</h3>
                <p className="text-sm text-accent">Fast and reliable shipping</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Refunds policy</h3>
                <p className="text-sm text-accent">Easy returns within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
