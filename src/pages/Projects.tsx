import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import motionTrackingProject from "@/assets/motion-tracking-project.jpg";
import rcCarProject from "@/assets/rc-car-project.jpg";
import sudokuGameProject from "@/assets/sudoku-game-project.png";
import weddingAlbumProject from "@/assets/wedding-album-project.png";
import packoriaProject from "@/assets/packoria-project.png";
import watchpoplistProject from "@/assets/watchpoplist-project.png";
import skynowProject from "@/assets/skynow-project.png";


const Projects = () => {
  const projects = [
    {
      title: "Motion Tracking Turret with Image Processing",
      description: "Developed a computer vision-based turret system using Python and OpenCV to detect and track moving objects in real time. The turret automatically adjusts servo angles to follow targets, demonstrating integration of image processing with electromechanical control.",
      image: motionTrackingProject,
      technologies: ["Python", "OpenCV", "Servo Control", "Image Processing"],
      githubLink: "https://github.com/JustSuffer/Motion-tracking-turret"
    },
    {
      title: "RC Car and Controller",
      description: "Built an RC car controlled via a custom-designed joystick-based wireless controller using Arduino and NRF24L01 modules. The project focused on real-time communication, motor control, and user-friendly remote handling for responsive navigation.",
      image: rcCarProject,
      technologies: ["Arduino", "NRF24L01", "Motor Control", "Wireless Communication"],
      githubLink: "https://github.com/JustSuffer/RC-Car-Controller"
    },
    {
      title: "Sudoku Game",
      description: "Interactive Sudoku puzzle game with multiple difficulty levels, hint system, and clean user interface. Built with modern web technologies for an engaging puzzle-solving experience with responsive design.",
      image: sudokuGameProject,
      technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
      githubLink: "https://github.com/JustSuffer/Sudoku",
      siteLink: "https://sudoku-izgames.netlify.app/"
    },
    {
      title: "Wedding Album",
      description: "Elegant digital wedding album platform featuring photo galleries, timeline views, and responsive design. Created to showcase wedding memories with beautiful layouts and smooth user experience.",
      image: weddingAlbumProject,
      technologies: ["React", "CSS3", "Responsive Design", "Photo Gallery"],
      githubLink: "https://github.com/JustSuffer/vault",
      siteLink: "https://wedding-album-ized.netlify.app/"
    },
    {
      title: "Packoria",
      description: "Travel packing checklist application that helps users organize and plan their trip essentials. Features intuitive item management, categorization, and a clean interface to ensure nothing is forgotten when packing for travel.",
      image: packoriaProject,
      technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      githubLink: "https://github.com/JustSuffer/Packoria",
      siteLink: "https://packoria.netlify.app/"
    },
    {
      title: "WatchPopList",
      description: "Movie rating and tracking platform for cinema enthusiasts. Users can search, rate, and maintain lists of watched movies with detailed statistics and personalized recommendations for an enhanced movie-watching experience.",
      image: watchpoplistProject,
      technologies: ["JavaScript", "API Integration", "CSS3", "Movie Database"],
      githubLink: "https://github.com/JustSuffer/WatchPopList",
      siteLink: "https://watchpoplist.netlify.app/"
    },
    {
      title: "SkyNow",
      description: "Weather forecast application providing 7-day weather predictions for any location worldwide. Features location-based weather detection, detailed daily forecasts, and an intuitive interface for quick weather information access.",
      image: skynowProject,
      technologies: ["JavaScript", "Weather API", "Geolocation", "Responsive Design"],
      githubLink: "https://github.com/JustSuffer/SkyNow",
      siteLink: "https://skynowiz.netlify.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-gradient px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">Projects</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Below are selected academic and personal projects that reflect my technical
            skills, problem-solving approach, and interest in engineering, automation,
            and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-portfolio-card rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => project.siteLink && window.open(project.siteLink, '_blank')}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-portfolio-red/20 text-portfolio-red text-xs sm:text-sm rounded-full border border-portfolio-red/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    variant="portfolio-outline" 
                    size="sm"
                    className="group w-full sm:w-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubLink, '_blank');
                    }}
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Github Repo
                  </Button>
                  {project.siteLink && (
                    <Button 
                      variant="portfolio-green" 
                      size="sm"
                      className="group w-full sm:w-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.siteLink, '_blank');
                      }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Visit Site
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;