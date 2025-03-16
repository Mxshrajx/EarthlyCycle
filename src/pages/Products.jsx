export function Products() {
    return (
      <section className="py-16 bg-gray-100 min-h-screen">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700">Our Products</h2>
          <p className="text-gray-600 mt-2">Choose from our range of biodegradable menstrual products.</p>
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Example Product 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img src="https://image-tc.galaxy.tf/wijpeg-1p2ew6k8yqy5e65dm1refojnc/file.jpg" alt="Product" className="w-full h-48 object-cover rounded-md"/>
              <h4 className="text-xl font-semibold mt-4">Organic Cotton Pads</h4>
              <p className="text-gray-600">Eco-friendly and comfortable menstrual pads.</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Order Now</button>
            </div>
  
            {/* Example Product 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img src="https://image-tc.galaxy.tf/wijpeg-1p2ew6k8yqy5e65dm1refojnc/file.jpg" alt="Product" className="w-full h-48 object-cover rounded-md"/>
              <h4 className="text-xl font-semibold mt-4">Reusable Menstrual Cup</h4>
              <p className="text-gray-600">A sustainable alternative for menstrual hygiene.</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Order Now</button>
            </div>
  
            {/* Example Product 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img src="https://image-tc.galaxy.tf/wijpeg-1p2ew6k8yqy5e65dm1refojnc/file.jpg" alt="Product" className="w-full h-48 object-cover rounded-md"/>
              <h4 className="text-xl font-semibold mt-4">Biodegradable Tampons</h4>
              <p className="text-gray-600">Made from 100% organic materials.</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Order Now</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  