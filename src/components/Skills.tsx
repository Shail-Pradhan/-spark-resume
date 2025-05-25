
import { Code, Award } from "lucide-react";

export const Skills = () => {
  const programmingSkills = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "C++", level: 80 },
    { name: "SQL", level: 85 },
    { name: "C", level: 75 },
  ];

  const technologies = [
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TensorFlow", level: 85 },
    { name: "Flask", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Firebase", level: 80 },
  ];

  const SkillBar = ({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) => (
    <div className="mb-6 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-8">
              <Code className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Programming Languages</h3>
            </div>
            <div className="space-y-4">
              {programmingSkills.map((skill, index) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 100} />
              ))}
            </div>
          </div>

          {/* Frameworks & Technologies */}
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-8">
              <Award className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800">Frameworks & Technologies</h3>
            </div>
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <SkillBar key={tech.name} name={tech.name} level={tech.level} delay={index * 100} />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center animate-fade-in delay-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Machine Learning", "Deep Learning", "REST APIs", "Git/GitHub", "Linux", "Postman", "JWT Authentication", "Data Analysis"].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
