import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function FeaturedProducts() {
  // This would typically come from an API or database
  const featuredProducts = [
    {
      id: 1,
      name: "Organic Tomatoes",
      price: 3.99,
      unit: "kg",
      farmer: "Green Valley Farm",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Fresh Eggs",
      price: 4.5,
      unit: "dozen",
      farmer: "Sunrise Poultry",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Honey",
      price: 8.99,
      unit: "jar",
      farmer: "Bee Haven Apiary",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Organic Lettuce",
      price: 2.49,
      unit: "head",
      farmer: "Fresh Greens Farm",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">Featured Products</h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed mx-auto">
              Discover the freshest seasonal products from our local farmers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-square relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-500">by {product.farmer}</p>
                <p className="font-bold text-green-700 mt-2">
                  ${product.price.toFixed(2)} / {product.unit}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full border-green-600 text-green-600">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild variant="link" className="text-green-600">
            <Link href="/products">
              View All Products <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
