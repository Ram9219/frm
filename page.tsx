import Link from "next/link"
import { ArrowRight, Leaf, ShoppingBasket, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f7e9]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                  From Farm to Table, Directly to You
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  Connect with local farmers, buy fresh produce, and support sustainable agriculture.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/products">
                    Browse Products <ShoppingBasket className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-green-600 text-green-600">
                  <Link href="/farmers/register">
                    Join as Farmer <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square rounded-lg overflow-hidden">
                <img alt="Fresh farm produce" className="object-cover" src="/placeholder.svg?height=500&width=500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                Why Choose Our Farmer&apos;s Market?
              </h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed mx-auto">
                We connect farmers directly with consumers, eliminating middlemen and ensuring fair prices.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 border border-green-100 p-6 rounded-lg bg-white shadow-sm">
              <div className="p-3 rounded-full bg-green-100">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800">Fresh & Organic</h3>
              <p className="text-center text-gray-700">
                All products are freshly harvested and follow organic farming practices.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-green-100 p-6 rounded-lg bg-white shadow-sm">
              <div className="p-3 rounded-full bg-green-100">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800">Direct Delivery</h3>
              <p className="text-center text-gray-700">Get products delivered directly from farms to your doorstep.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-green-100 p-6 rounded-lg bg-white shadow-sm">
              <div className="p-3 rounded-full bg-green-100">
                <ShoppingBasket className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800">Support Local</h3>
              <p className="text-center text-gray-700">
                Every purchase supports local farmers and sustainable agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* How It Works */}
      <HowItWorks />
    </div>
  )
}
