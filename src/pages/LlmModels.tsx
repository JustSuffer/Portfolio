import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import darkCircleProject from "@/assets/dark-circle-project.png";
import lowerEyelidProject from "@/assets/lower-eyelid-project.png";

const LlmModels = () => {
  const models = [
    {
      title: "Dark Circle Detection Model",
      description:
        "Deep learning object detection model that analyzes facial images to detect and quantify dark circles under the eyes. Built with transfer learning on Google Colab and deployed as an API service on Hugging Face Spaces.",
      /* image: darkCircleProject, */
      technologies: ["Python", "YOLO", "Transfer Learning", "FastAPI"],
      siteLink:
        "https://nagumo21-dark-circle-service.hf.space/docs#/default/analyze_and_show_analyze_and_show_post",
    },
    {
      title: "Droopy Lower Eyelid Detection Model",
      description:
        "YOLO-based computer vision model for automated quantification of lower eyelid positioning, detecting droopy eyelid conditions. Research-grade biometric model deployed as an API service on Hugging Face Spaces.",
      /* image: lowerEyelidProject, */
      technologies: ["Python", "YOLO", "Computer Vision", "FastAPI"],
      siteLink:
        "https://nagumo21-lower-eyelid-service.hf.space/docs#/default/analyze_image_analyze_post",
    },
    {
      title: "Brain MRI Tumor Detection Model",
      description:
        "Deep learning classification model that analyzes brain MRI scans to detect and classify tumor presence. Built with state-of-the-art architectures and deployed as an API service on Hugging Face Spaces.",
      technologies: ["Python", "Deep Learning", "MRI Analysis", "FastAPI"],
      siteLink: "https://nagumo21-tumormodel.hf.space/docs",
    },
    {
      title: "Brain MRI Alzheimer Classification Model",
      description:
        "Deep learning model for automated classification of Alzheimer's disease from brain MRI scans. Leverages advanced neural network architectures to assist in early diagnosis and research.",
      technologies: ["Python", "Deep Learning", "MRI Analysis", "FastAPI"],
      siteLink: "https://nagumo21-alzheimermodelmri.hf.space/docs",
    },
  ];

  return (
    <div className="min-h-screen bg-portfolio-gradient px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
            LLM Models
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            A collection of deep learning models I've developed and deployed,
            focused on computer vision and biometric analysis using transfer
            learning and modern object detection frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-portfolio-card rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => window.open(model.siteLink, "_blank")}
            >
              {/* image removed */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {model.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {model.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {model.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-portfolio-red/20 text-portfolio-red text-xs sm:text-sm rounded-full border border-portfolio-red/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="portfolio-green"
                  size="sm"
                  className="group w-full sm:w-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(model.siteLink, "_blank");
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Try Model
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LlmModels;
