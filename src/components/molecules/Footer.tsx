export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-100 mb-4">SEA Catering</h3>
              <p className="text-gray-300 leading-relaxed">
                Healthy Meals, Anytime, Anywhere. Delivering customized nutritious meals 
                across Indonesia with detailed nutritional information.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="/menu" className="text-gray-300 hover:text-blue-400 transition-colors">Menu</a></li>
                <li><a href="/subscription" className="text-gray-300 hover:text-blue-400 transition-colors">Subscription</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Manager: Brian</p>
                <p>Phone: 08123456789</p>
                <p>Service Area: All major cities in Indonesia</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 SEA Catering. All rights reserved. | Healthy Meals, Anytime, Anywhere
            </p>
          </div>
        </div>
      </footer>
    );
};