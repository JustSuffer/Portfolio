import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Youtube, Linkedin, Instagram, Github, Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "My Websites", path: "/my-websites" },
    { name: "LLM Models", path: "/llmmodels" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 before:content-[''] before:absolute before:inset-0 before:z-[-1] before:bg-gradient-to-r before:from-[#501230]/100 before:to-[#122800]/100">
      <div className="max-w-7xl mx-auto p-3 sm:p-4 flex items-center justify-between relative z-10">
        {/* Mobile hamburger button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-white hover:bg-white/10 w-10 h-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <Button
                variant={isActive(item.path) ? "portfolio" : "ghost"}
                size="sm"
                className={`text-white hover:text-white whitespace-nowrap text-sm ${
                  isActive(item.path) ? "" : "hover:bg-white/10"
                }`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10"
            onClick={() => window.open('https://github.com/JustSuffer', '_blank')}
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10"
            onClick={() => window.open('https://www.youtube.com/@izzetchovy', '_blank')}
          >
            <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10"
            onClick={() => window.open('https://www.linkedin.com/in/izzetcansorna', '_blank')}
          >
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10"
            onClick={() => window.open('https://www.instagram.com/izzet_srn/', '_blank')}
          >
            <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-[#501230] to-[#122800] border-t border-white/10 animate-fade-in">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} onClick={handleNavClick}>
                <Button
                  variant={isActive(item.path) ? "portfolio" : "ghost"}
                  className={`w-full justify-start text-white hover:text-white ${
                    isActive(item.path) ? "" : "hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;