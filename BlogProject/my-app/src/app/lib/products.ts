export interface Product {
    id: number
    name: string
    description: string
    price: number
    discount: number
    rating: number
    reviews: number
    isNew: boolean
    category: string
    image: string
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description:
        "Experience crystal-clear sound with our premium wireless headphones. Perfect for music lovers and professionals alike.",
      price: 199.99,
      discount: 15,
      rating: 4.5,
      reviews: 128,
      isNew: true,
      category: "electronics",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      description:
        "Work in comfort with our ergonomic office chair. Designed to provide optimal support for long working hours.",
      price: 249.99,
      discount: 0,
      rating: 4.8,
      reviews: 95,
      isNew: false,
      category: "furniture",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      description:
        "Track your fitness goals with our advanced smart watch. Features heart rate monitoring, step counting, and more.",
      price: 149.99,
      discount: 10,
      rating: 4.2,
      reviews: 210,
      isNew: true,
      category: "electronics",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      name: "Organic Cotton T-Shirt",
      description:
        "Stay comfortable and stylish with our 100% organic cotton t-shirt. Available in multiple colors and sizes.",
      price: 29.99,
      discount: 0,
      rating: 4.0,
      reviews: 78,
      isNew: false,
      category: "clothing",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 5,
      name: "Professional DSLR Camera",
      description:
        "Capture stunning photos with our professional-grade DSLR camera. Includes multiple lenses and accessories.",
      price: 899.99,
      discount: 5,
      rating: 4.9,
      reviews: 56,
      isNew: false,
      category: "electronics",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 6,
      name: "Modern Coffee Table",
      description:
        "Enhance your living room with our sleek, modern coffee table. Made from high-quality materials for durability.",
      price: 179.99,
      discount: 0,
      rating: 4.3,
      reviews: 42,
      isNew: true,
      category: "furniture",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 7,
      name: "Leather Wallet",
      description:
        "Keep your essentials organized with our genuine leather wallet. Features multiple card slots and a coin pocket.",
      price: 49.99,
      discount: 0,
      rating: 4.6,
      reviews: 112,
      isNew: false,
      category: "accessories",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 8,
      name: "Stainless Steel Water Bottle",
      description:
        "Stay hydrated on the go with our insulated stainless steel water bottle. Keeps drinks cold for 24 hours or hot for 12 hours.",
      price: 34.99,
      discount: 20,
      rating: 4.7,
      reviews: 89,
      isNew: false,
      category: "accessories",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]
  
  