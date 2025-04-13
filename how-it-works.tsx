import { Check, Tractor, ShoppingCart, Truck } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">How It Works</h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed mx-auto">
              Our platform connects farmers and consumers in just a few simple steps.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 rounded-full bg-green-100">
              <Tractor className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-800">For Farmers</h3>
            <ul className="space-y-2 text-left">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>Register and create your farm profile</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>List your products with details and pricing</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>Receive orders and arrange deliveries</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>Get paid directly to your account</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 rounded-full bg-green-100">
              <ShoppingCart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-800">For Customers</h3>
            <ul className="space-y-2 text-left">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>Browse products from local farmers</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>Add items to your cart and checkout</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>Choose delivery or pickup options</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>Enjoy fresh, local produce</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 rounded-full bg-green-100">
              <Truck className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-800">Delivery</h3>
            <ul className="space-y-2 text-left">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>Choose from available delivery options</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>Track your order in real-time</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>Receive notifications about your delivery</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>Rate your experience and provide feedback</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
