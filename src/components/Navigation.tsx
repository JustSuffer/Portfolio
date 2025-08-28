import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Youtube, Linkedin, Instagram } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (

    <nav className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 before:content-[''] before:absolute before:inset-0 before:z-[-1] before:bg-gradient-to-r before:from-[#501230]/100 before:to-[#122800]/100 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8 overflow-x-auto">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <Button
                variant={isActive(item.path) ? "portfolio" : "ghost"}
                size="sm"
                className={`text-white hover:text-white whitespace-nowrap text-xs sm:text-sm ${
                  isActive(item.path) ? "" : "hover:bg-white/10"
                }`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
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
    </nav>

/*     <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <Button
                variant={isActive(item.path) ? "portfolio" : "ghost"}
                className={`text-white hover:text-white ${
                  isActive(item.path) ? "" : "hover:bg-white/10"
                }`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-white hover:bg-white/10"
            onClick={() => window.open('https://www.youtube.com/@izzetchovy', '_blank')}
          >
            <Youtube className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-white hover:bg-white/10"
            onClick={() => window.open('https://www.linkedin.com/in/izzetcansorna', '_blank')}
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-white hover:bg-white/10"
            onClick={() => window.open('https://www.instagram.com/izzet_srn/', '_blank')}
          >
            <Instagram className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav> */
  );
};

export default Navigation;