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
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
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
          <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10">
            <Youtube className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10">
            <Instagram className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;