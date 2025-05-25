
import { Code, Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Digitized Monitoring System for Field Raids & Seizures",
      subtitle: "MERN Stack + Firebase Auth",
      duration: "April 2025 - May 2025",
      description: "Built a full-stack web application to streamline field operations for excise enforcement.",
      highlights: [
        "Authentication & Role-Based Access: Secured with JWT and Firebase, role-specific access for Admin, Excise Officer, Analyst, and Legal Officer.",
        "Real-Time Data Entry: Enabled officers to log raid details, offender info, seized items (with images), and notes using validated React forms and MongoDB.",
        "Centralized Dashboard: Implemented data filters and summaries for raids, seizures, and activity logs.",
        "Automated Reporting: Generated monthly seizure reports and performance metrics in PDF/CSV via Puppeteer/jsPDF.",
        "GIS-Based Hotspot Mapping: Integrated heat maps of violation hotspots using raid GPS data.",
        "Legal Document Automation: Created auto-filled FIRs, case reports, and notices from logged data, ready for download/print."
      ],
      tech: ["React", "Node.js", "MongoDB", "Firebase", "JWT", "Puppeteer"],
      featured: true
    },
    {
      title: "Quiz Application",
      subtitle: "MERN Stack + Firebase Auth",
      duration: "Current Project",
      description: "Developed a full-stack quiz platform where users can create, upload, and manage custom quizzes, enabling interactive knowledge sharing.",
      highlights: [
        "Allowed public access to user-generated content with real-time scoring and secure authentication using Firebase authentication tokens.",
        "Designed with scalability in mind, with plans to add features like quiz analytics, difficulty levels, and leaderboard rankings."
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase"],
      featured: true
    },
    {
      title: "Nepali Sign Language Recognition",
      subtitle: "Deep Learning & Computer Vision",
      duration: "August 2023 - April 2025",
      description: "Project Based Learning initiative focused on developing accessibility solutions for the deaf community.",
      highlights: [
        "Developed a novel method to augment the existing dataset, generating 8,000 new images for training, and improved the performance of computer vision accessibility solutions.",
        "Employed transfer learning, achieving 91% accuracy with VGG16, 99% with ResNet50 & 90% with DNN.",
        "Deployed a real-time Nepali Sign Language (NSL) gesture recognition system with 95%+ accuracy and response times under 100ms."
      ],
      tech: ["TensorFlow", "MediaPipe", "OpenCV", "Flask", "React"],
      featured: true
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {project.featured && <Star className="w-5 h-5 text-yellow-500 fill-current" />}
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                  </div>
                  <p className="text-lg text-blue-600 font-semibold mb-2">{project.subtitle}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
                <span className="text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-gray-600 lg:ml-6 mb-4 lg:mb-0 self-start">
                  {project.duration}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                {project.highlights.map((highlight, hlIndex) => (
                  <div key={hlIndex} className="flex items-start space-x-3">
                    <Code className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-600 rounded-full text-sm border border-blue-200 hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extracurricular Activities */}
        <div className="mt-16 animate-fade-in delay-500">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Extracurricular Activities
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-3">Smart India Hackathon 2024</h4>
              <p className="text-gray-700 text-sm">
                Participated in Smart India Hackathon 2024, worked on machine learning models for monitoring Glacial Lakes 
                Outburst Floods, accomplished second position in college, collaborating on real-world problems, solving 
                challenges and managing teams.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-3">Government of Sikkim Hackathon</h4>
              <p className="text-gray-700 text-sm">
                Participated in Government of Sikkim Hackathon, worked on digitizing the manual process of record keeping for 
                field raids and seizures on illegal liquor selling for the Excise Department of Sikkim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
