import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-portfolio-gradient flex items-center justify-center px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-portfolio-hero rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Responsive Flex Direction */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Sol Kısım */}
            <div className="w-full md:flex-1 max-w-2xl text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Izzet Can Sorna
              </h1>
              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                Mechatronics Engineering graduate from Marmara University
                with a strong interest in web development, aircraft
                structures and maintenance, and computer vision systems.
              </p>
              <Button 
                variant="portfolio-outline" 
                size="xl"
                className="group"
                onClick={() => window.location.href = '/work'}
              >
                For My Development
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Sağ Kısım: Fotoğraf */}
            <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src={profilePhoto} 
                alt="Izzet Can Sorna"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CV Button */}
        <div className="flex justify-center md:justify-end mt-8">
          <Button 
            variant="portfolio" 
            size="lg"
            className="group"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Izzet_Can_Sorna_CV.pdf';
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
    </div>
  );
};

export default Home;
