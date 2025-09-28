import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Work = () => {
  const workExperiences = [
    {
      title: "Aircraft Maintenance Engineer Intern",
      company: "Turkish Technic",
      period: "Aug - Sep 2023",
      location: "Istanbul, Turkey",
      description: "Perform maintenance on aircraft systems, engines, and components in accordance with aviation regulations and manufacturer guidelines."
    },
    {
      title: "ICT Network Engineer Intern",
      company: "Albil Merkezi Hizmetler",
      period: "July - Aug 2024",
      location: "Istanbul, Turkey",
      description: "Manage and oversee the organization's information systems, ensuring secure and efficient data storage, access, and distribution."
    },
    {
      title: "Web Design Frontend Developer Intern",
      company: "INNOEM Sustainability Network",
      period: "Sep 2024 - Jan 2025",
      location: "Istanbul, Turkey",
      description: "Develop and maintain responsive, user-friendly web interfaces using Vue.js, JavaScript, HTML, and CSS."
    },
    {
      title: "Web Developer Intern",
      company: "Erden Bilgisayar",
      period: "Mar - Apr 2025",
      location: "Istanbul, Turkey",
      description: "Collaborate with backend teams to integrate Java and C# based services into frontend applications."
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-gradient px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">Work</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Gaining hands-on experience even before graduation, I worked as an intern
            during my studies to develop real-world skills in engineering and software.
            These early roles helped me grow professionally, solve practical problems,
            and lay a solid foundation for my future career.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {workExperiences.map((experience, index) => (
            <div key={index} className="bg-portfolio-card rounded-xl p-6 sm:p-8 shadow-lg border border-white/10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1 mb-4 lg:mb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-portfolio-red text-base sm:text-lg font-medium mb-2">
                    {experience.company}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm font-mono">
                    {experience.period} / {experience.location}
                  </p>
                </div>
                <div className="flex-shrink-0 lg:ml-8">
                  <div className="max-w-md">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-portfolio-red/0 via-portfolio-red/50 to-portfolio-red/0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;