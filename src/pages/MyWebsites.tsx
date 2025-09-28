import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const MyWebsites = () => {
  const websites = [
    {
      title: "Sudoku Game",
      description: "Interactive Sudoku puzzle game with multiple difficulty levels and solving assistance.",
      url: "https://sudoku-izgames.netlify.app",
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      title: "Wedding Album",
      description: "Beautiful wedding photo gallery with elegant design and smooth transitions.",
      url: "https://wedding-album-ized.netlify.app",
      gradient: "from-pink-600/20 to-rose-600/20"
    },
    {
      title: "Packoria",
      description: "Travel packing checklist tool to help organize your luggage for any trip.",
      url: "https://packoria.netlify.app",
      gradient: "from-green-600/20 to-teal-600/20"
    },
    {
      title: "WatchPopList",
      description: "Movie rating and watchlist management system to track and rate films.",
      url: "https://watchpoplist.netlify.app",
      gradient: "from-orange-600/20 to-red-600/20"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-gradient px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">My Websites</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Explore my live web applications - interactive games, photo galleries, 
            productivity tools, and entertainment platforms built with modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {websites.map((website, index) => (
            <div 
              key={index} 
              className={`bg-portfolio-card rounded-xl p-6 sm:p-8 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group bg-gradient-to-br ${website.gradient}`}
              onClick={() => window.open(website.url, '_blank')}
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-portfolio-red transition-colors">
                    {website.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                    {website.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs sm:text-sm text-gray-400 font-mono">
                    Live Website
                  </span>
                  <Button
                    variant="portfolio"
                    size="sm"
                    className="group-hover:scale-105 transition-transform"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(website.url, '_blank');
                    }}
                  >
                    Visit Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <span className="text-sm text-gray-400">
              Click any card to visit the website directly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWebsites;