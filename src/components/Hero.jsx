export function Hero() {
    return (
      <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-bold leading-tight">
              Empowering Women with <span className="text-yellow-300">Sustainable Choices</span>
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Access eco-friendly menstrual products via vending machines or home delivery.
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
                Get Started
              </button>
              <button className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-green-600 transition">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Right Side - Optimized Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img 
              src="https://image-tc.galaxy.tf/wijpeg-1p2ew6k8yqy5e65dm1refojnc/file.jpg" 
              alt="Sustainable Women’s Health"
              className="w-3/4 max-w-sm rounded-lg shadow-lg"
            />
          </div>
  
        </div>
      </section>
    );
  }
  