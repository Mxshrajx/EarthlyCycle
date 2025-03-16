export function Community() {
    return (
      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700">Join Our Community</h2>
          <p className="text-gray-600 mt-2">Share your experiences, ask questions, and support others.</p>
  
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Discussion Forum */}
            <div className="bg-gray-100 shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold">Anonymous Forum</h4>
              <p className="text-gray-600">Engage in open discussions and share your experiences.</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Join Now</button>
            </div>
  
            {/* Chatbot */}
            <div className="bg-gray-100 shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold">Menstrual Health Chatbot</h4>
              <p className="text-gray-600">Get instant answers to your menstrual health queries.</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Chat Now</button>
            </div>
  
            {/* Support & Help */}
            <div className="bg-gray-100 shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold">Community Support</h4>
              <p className="text-gray-600">Get help from experts and connect with others.</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Get Support</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  