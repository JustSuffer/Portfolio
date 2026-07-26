import { Award, Building2 } from "lucide-react";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
};

const certificates: Certificate[] = [
  {
    title: "Claude on Google Cloud",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "im57i93ibtqf",
    skills: ["MCP", "Retrieval-Augmented Generation (RAG)", "+3 skills"],
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "4yx5b2danvuq",
    skills: ["Prompt Engineering", "MCP", "+1 skill"],
  },
  {
    title: "Claude in Amazon Bedrock",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "t395no7bysq2",
    skills: ["Amazon Web Services (AWS)", "Amazon Bedrock", "+1 skill"],
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "mrgedzg5ywig",
    skills: ["Claude Code", "MCP", "+1 skill"],
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "8ka56nbgskgo",
    skills: ["MCP", "Retrieval-Augmented Generation (RAG)"],
  },
  {
    title: "Teaching the AI Fluency Framework",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "8ohvxf36a487",
    skills: ["AI Fluency", "Claude Code"],
  },
  {
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "o4ih9wxvssux",
    skills: ["AI Agents", "Claude Agent SDK"],
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "zqxhaho6kshz",
    skills: ["MCP"],
  },
  {
    title: "Building with the Claude API",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "xorjx4239em4",
    skills: ["Web Services API", "WebSocket", "+1 skill"],
  },
  {
    title: "AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "df9cx7nac4pu",
    skills: ["Claude Code", "Claude Agent SDK", "+2 skills"],
  },
  {
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "4euq79cg9hv5",
    skills: ["AI Fluency"],
  },
  {
    title: "AI Fluency for Nonprofits",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "igygtqeuem3u",
    skills: ["AI Fluency", "Prompt Flow", "+1 skill"],
  },
  {
    title: "AI Fluency for Educators",
    issuer: "Anthropic",
    date: "Jul 2026",
    credentialId: "ocybbotgdsnv",
    skills: ["AI Fluency"],
  },
  {
    title: "A Deep Understanding of Deep Learning (with Python Intro)",
    issuer: "Udemy",
    date: "Nov 2025",
    credentialId: "UC-37ac1b67-9988-439f-975a-a424acdac4d2",
    skills: ["PyTorch", "Python", "+3 skills"],
  },
  {
    title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    issuer: "Udemy",
    date: "Oct 2025",
    credentialId: "UC-52fe3c90-6392-4bed-94d8-b0ce46b30b81",
    skills: ["React.js", "Redux", "+3 skills"],
  },
  {
    title: "Launch Your First Full-Stack App on AWS",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2026",
    skills: ["JavaScript", "Python", "+1 skill"],
  },
  {
    title: "Build and Ship Cloud-Native Python Apps",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2026",
    skills: ["Docker", "Python", "+2 skills"],
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen bg-portfolio-gradient px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
            Certificates
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Licenses and certifications I've earned across AI, deep learning,
            cloud engineering, and modern web development — a record of
            continuous learning alongside my engineering work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-portfolio-card rounded-xl p-6 sm:p-7 shadow-lg border border-white/10 hover:border-portfolio-red/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-portfolio-red/10 blur-2xl group-hover:bg-portfolio-red/20 transition-all duration-500" />

              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-portfolio-red/15 border border-portfolio-red/30 flex items-center justify-center">
                  <Award className="h-6 w-6 text-portfolio-red" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-2">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-300 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="h-4 w-4 text-gray-400" />
                      {cert.issuer}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">Issued {cert.date}</span>
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs sm:text-sm text-gray-400 mb-4 font-mono break-all">
                      Credential ID:{" "}
                      <span className="text-gray-200">{cert.credentialId}</span>
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-portfolio-red/15 text-portfolio-red text-xs rounded-full border border-portfolio-red/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;