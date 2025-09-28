import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from 'emailjs-com';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_v38qrf9',      // 📌 EmailJS dashboard'tan
      'template_177uoum',     // 📌 Template ID
      formData,               // 📤 Email template'e gönderilecek veriler
      'yJo6Wmfi0PHp7P3Bf'       // 📌 EmailJS Public Key
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Your message has been sent!');
      },
      (error) => {
        console.error('FAILED...', error.text);
        alert('Something went wrong. Please try again.');
      }
    );
  };

  return (
    <div className="min-h-screen bg-portfolio-gradient px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">Contact</h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed px-4">
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

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
          <div className="text-center space-y-2">
            <p className="text-gray-300 text-sm sm:text-base">
              <a href="https://www.linkedin.com/in/izzetcansorna" className="hover:text-portfolio-red transition-colors">
                www.linkedin.com/in/izzetcansorna
              </a>
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              <a href="mailto:izzet4626@gmail.com" className="hover:text-portfolio-red transition-colors">
                izzet4626@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;