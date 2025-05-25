
import { GraduationCap, Book } from "lucide-react";

export const Education = () => {
  const education = [
    {
      institution: "Sikkim Manipal Institute of Technology, Rangpo",
      degree: "B. Tech Computer Science & Engineering",
      specialization: "Specialization in Artificial Intelligence & Machine Learning",
      grade: "CGPA: 8.8",
      duration: "09-2022 to 08-2026 (Pursuing)",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-600"
    },
    {
      institution: "Delhi Public School, Siliguri",
      degree: "CBSE Class XII (Science)",
      grade: "Percentage: 88%",
      duration: "04-2020 to 03-2022",
      icon: Book,
      color: "from-purple-500 to-teal-600"
    },
    {
      institution: "Manjusri Public School, Temi-Tarku, South Sikkim",
      degree: "CBSE Class X",
      grade: "Percentage: 93%",
      duration: "02-2014 to 03-2020",
      icon: Book,
      color: "from-teal-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="relative flex items-start space-x-8 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-blue-200 relative z-10">
                  <edu.icon className={`w-8 h-8 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`} />
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{edu.institution}</h3>
                    <span className="text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 rounded-full text-gray-600 mt-2 md:mt-0">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <p className="text-lg font-semibold text-gray-700 mb-2">{edu.degree}</p>
                  
                  {edu.specialization && (
                    <p className="text-gray-600 italic mb-2">{edu.specialization}</p>
                  )}
                  
                  <div className="flex items-center">
                    <span className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white rounded-full text-sm font-medium`}>
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
