import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-portfolio-gradient px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-8">About</h1>
        </div>

        <div className="bg-black/40 rounded-xl p-12 shadow-2xl border border-white/10">
          <div className="relative">
            <div className="text-6xl text-portfolio-red/30 absolute -top-4 -left-4">
              "
            </div>
            <div className="pl-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am a highly motivated and detail-oriented Mechatronics Engineering student at Marmara University, set to graduate in 
                June 2025 with a solid academic background and a final GPA of 3.40. My engineering education has provided me with a 
                multidisciplinary foundation in mechanical systems, electronics, control systems, and programming. Throughout my 
                undergraduate studies, I have consistently demonstrated a strong interest in intelligent systems and automation, 
                culminating in my graduation thesis: "Motion Tracking Turret with Image Processing", which integrates computer vision 
                with real-time mechanical actuation.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My academic journey began at Nişantaşı Nuri Akın Anatolian High School in Istanbul, where I developed a disciplined 
                approach to learning and a passion for problem-solving, especially in the fields of science and technology. This passion led 
                me to pursue a degree in Mechatronics Engineering, where I have refined both my technical knowledge and hands-on skills 
                through coursework, projects, and independent research.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                In terms of technical proficiency, I have developed competency in programming languages such as Python, JavaScript, and 
                MATLAB, along with experience in designing automatic control systems. I am particularly interested in embedded systems, 
                image processing applications, and system optimization. I also have a growing familiarity with aircraft maintenance 
                principles and technical documentation processes. These skills are complemented by my ability to work with modern web 
                technologies and frameworks—especially in frontend development—as well as tools like pgAdmin for database interaction.
              </p>

            </div>
          </div>
          
        </div>
      </div>
                      <Button 
                variant="portfolio-outline" 
                size="xl"
                className="group absolute bottom-4 left-1/2 transform -translate-x-1/2"
                onClick={() => window.location.href = '/projects'}
                >
                For My Development
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
    </div>
    
  );
};

export default About;