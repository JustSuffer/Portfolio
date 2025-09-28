import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-portfolio-gradient flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-portfolio-hero rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Izzet Can Sorna
              </h1>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Mechatronics Engineering graduate from Marmara University
                with a strong interest in web development, aircraft
                structures and maintenance, and computer vision systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                <Button 
                  variant="portfolio-outline" 
                  size="lg"
                  className="group w-full sm:w-auto"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/İzzet_Can_Sorna_CV.pdf'; 
                    link.download = 'Izzet_Can_Sorna_CV.pdf'; 
                    document.body.appendChild(link);
                    link.click(); 
                    document.body.removeChild(link); 
                  }}
                >
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download my CV
                </Button>
              </div>
            </div>
            
            <div className="flex-shrink-0 order-1 lg:order-2">
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src={profilePhoto} 
                    alt="Izzet Can Sorna"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
{/*         <div className="flex justify-end mt-8">
          <Button 
            variant="portfolio" 
            size="lg"
            className="group"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/İzzet_Can_Sorna_CV.pdf'; 
              link.download = 'Izzet_Can_Sorna_CV.pdf'; 
              document.body.appendChild(link);
              link.click(); 
              document.body.removeChild(link); 
            }}
          >
            <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            Download my CV
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;