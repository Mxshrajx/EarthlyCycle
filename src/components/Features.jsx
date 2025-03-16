import { Leaf, ShoppingCart, Users, Bot, MapPin, Shield } from "lucide-react";

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold text-blue-700">Why Choose Earthly Cycles?</h3>
        <p className="text-gray-600 mt-2">Empowering menstrual health with sustainability and technology.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Eco-Friendly Products */}
          <div className="p-6 bg-white shadow-lg rounded-md text-center hover:shadow-xl transition">
            <Leaf className="text-green-500 mx-auto mb-3" size={40} />
            <h4 className="text-xl font-bold">Eco-Friendly Products</h4>
            <p className="text-gray-600 mt-2">Biodegradable, safe for the environment, and sustainable solutions.</p>
          </div>

          {/* Convenient Access */}
          <div className="p-6 bg-white shadow-lg rounded-md text-center hover:shadow-xl transition">
            <ShoppingCart className="text-blue-500 mx-auto mb-3" size={40} />
            <h4 className="text-xl font-bold">Convenient Access</h4>
            <p className="text-gray-600 mt-2">Find vending machines nearby or get doorstep delivery.</p>
          </div>

          {/* Community Support */}
          <div className="p-6 bg-white shadow-lg rounded-md text-center hover:shadow-xl transition">
            <Users className="text-purple-500 mx-auto mb-3" size={40} />
            <h4 className="text-xl font-bold">Community Forum</h4>
            <p className="text-gray-600 mt-2">Join discussions, ask questions, and connect anonymously.</p>
          </div>

          {/* AI Chatbot */}
          <div className="p-6 bg-white shadow-lg rounded-md text-center hover:shadow-xl transition">
            <Bot className="text-orange-500 mx-auto mb-3" size={40} />
            <h4 className="text-xl font-bold">AI Chatbot Assistance</h4>
            <p className="text-gray-600 mt-2">Get personalized menstrual health advice anytime.</p>
          </div>

          {/* Real-Time Inventory Tracking */}
          <div className="p-6 bg-white shadow-lg rounded-md text-center hover:shadow-xl transition">
            <MapPin className="text-red-500 mx-auto mb-3" size={40} />
            <h4 className="text-xl font-bold">Real-Time Inventory</h4>
            <p className="text-gray-600 mt-2">Track product availability in vending machines live.</p>
          </div>

          {/* Secure & Private */}
          <div className="p-6 bg-white shadow-lg rounded-md text-center hover:shadow-xl transition">
            <Shield className="text-teal-500 mx-auto mb-3" size={40} />
            <h4 className="text-xl font-bold">Secure & Private</h4>
            <p className="text-gray-600 mt-2">Ensuring data security and user anonymity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
