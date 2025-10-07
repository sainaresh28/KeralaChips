import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission:", formData);

    alert("Thank you for your message. We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-[80vh] bg-background py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our healthcare support team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="healthcare-form">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry or issue"
                    required
                    rows={5}
                    className="mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-3 mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Healthcare Support Helpline
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Email:</strong> support@dhrms.kerala.gov.in
                </p>
                <p>
                  <strong className="text-foreground">Phone:</strong> +91 XXXXX XXXXX
                </p>
                <p>
                  <strong className="text-foreground">Emergency:</strong> 108 (Ambulance)
                </p>
                <p>
                  <strong className="text-foreground">Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Technical Support
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  For technical issues with the portal, login problems, or system-related queries.
                </p>
                <p>
                  <strong className="text-foreground">Tech Support:</strong> tech@dhrms.kerala.gov.in
                </p>
                <p>
                  <strong className="text-foreground">Response Time:</strong> Within 24 hours
                </p>
              </div>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Medical Emergency
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  For immediate medical assistance, please contact emergency services directly.
                </p>
                <p className="text-destructive font-semibold">
                  Emergency: 108 | Police: 100 | Fire: 101
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
