import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-portfolio-gradient px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">About</h1>
        </div>

        <div className="bg-black/40 rounded-xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/10">
          <div className="relative">
            <div className="text-6xl text-portfolio-red/30 absolute -top-4 -left-4">
              "
            </div>
            <div className="pl-4 sm:pl-8">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                I am a highly motivated Mechatronics Engineer and a graduate of Marmara University (Class of 2025), where I maintained a solid academic standing with a GPA of 3.10. My engineering education provided a rigorous multidisciplinary foundation in mechanical systems, electronics, control theory, and advanced programming. Throughout my academic tenure, I have focused on the intersection of intelligent systems and automation, consistently seeking to bridge the gap between theoretical research and practical application.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                My academic and research contributions are highlighted by several key projects:
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                <span className="text-portfolio-red font-semibold">Computer Vision & Biometrics:</span> I have conducted specialized research in automated biometric quantification, specifically developing a YOLO-based computer vision model for the quantification of lower eyelid positioning. This work, which utilized state-of-the-art object detection frameworks, has been published on ResearchGate, demonstrating my ability to contribute to the broader scientific community.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                <span className="text-portfolio-red font-semibold">Robotics & Embedded Systems:</span> My technical expertise extends to quadrupedal robotics, exemplified by the development of Metsuke, an ESP32-S3 based quadruped robot. This project involved complex motion control, voltage regulation systems, and the integration of a custom React-based interface via WebSockets for real-time interaction.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                <span className="text-portfolio-red font-semibold">Graduation Thesis:</span> For my final capstone, I engineered a "Motion Tracking Turret with Image Processing." This project integrated real-time mechanical actuation with computer vision algorithms to achieve high-precision automated tracking.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                <span className="text-portfolio-red font-semibold">Full-Stack Development:</span> Beyond hardware, I have developed and deployed robust web applications, such as the dark-fantasy-themed platform Acoria. This involved utilizing React.js, Supabase, and AWS cloud infrastructure, showcasing a comprehensive understanding of frontend architecture and database management (pgAdmin).
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                In addition to my core technical competencies in Python, JavaScript, and MATLAB, I possess a growing familiarity with aircraft maintenance principles and technical documentation. This diverse skill set—ranging from embedded system optimization to high-level system architecture—enables me to approach complex engineering challenges with a disciplined, problem-solving mindset. Having built a strong foundation at Nişantaşı Nuri Akın Anatolian High School and refined it through rigorous university-level research, I am now focused on advancing the field of intelligent automation.
              </p>

            </div>
          </div>
          
        </div>
      </div>

    </div>
    
  );
};

export default About;