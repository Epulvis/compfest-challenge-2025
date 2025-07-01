import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Have Questions?
          </h2>
          <p className="text-xl text-gray-600">
            Our manager is ready to assist you with any inquiries.
          </p>
        </div>

        <Card className="max-w-md mx-auto bg-white shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-800">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="text-lg font-semibold text-gray-700">Manager:</p>
              <p className="text-xl text-blue-600">Brian</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700">Phone Number:</p>
              <a 
                href="http://wa.me/628123456789" 
                className="text-xl text-blue-600 hover:text-blue-800 transition-colors"
              >
                08123456789
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;