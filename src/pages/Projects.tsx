import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import motionTrackingProject from "@/assets/motion-tracking-project.jpg";
import rcCarProject from "@/assets/rc-car-project.jpg";


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
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-gradient px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-8">Projects</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Below are selected academic and personal projects that reflect my technical
            skills, problem-solving approach, and interest in engineering, automation,
            and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-portfolio-card rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-portfolio-red/20 text-portfolio-red text-sm rounded-full border border-portfolio-red/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button 
                    variant="portfolio-outline" 
                    size="sm"
                    className="group"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Github Repo
                  </Button>

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