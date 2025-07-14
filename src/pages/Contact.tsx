import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Youtube, Linkedin, Instagram, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-portfolio-gradient px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-8">Contact</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Feel free to reach out for collaboration opportunities, technical discussions, or any 
            inquiries related to my work. I am always open to connecting with professionals, teams,
            or organizations that value innovation and engineering excellence.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white text-sm font-medium">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Please enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-portfolio-red focus:ring-portfolio-red/20"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-white text-sm font-medium">Mobile</Label>
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="Enter mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-portfolio-red focus:ring-portfolio-red/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white text-sm font-medium">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-portfolio-red focus:ring-portfolio-red/20 resize-none"
              required
            />
          </div>

          <Button 
            type="submit"
            variant="portfolio-green" 
            size="xl"
            className="w-full group"
          >
            Submit
            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="space-y-2 mb-6 md:mb-0">
              <p className="text-gray-300">
                <a href="https://www.linkedin.com/in/izzetcansorna" className="hover:text-portfolio-red transition-colors">
                  www.linkedin.com/in/izzetcansorna
                </a>
              </p>
              <p className="text-gray-300">
                <a href="mailto:izzet4626@gmail.com" className="hover:text-portfolio-red transition-colors">
                  izzet4626@gmail.com
                </a>
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;