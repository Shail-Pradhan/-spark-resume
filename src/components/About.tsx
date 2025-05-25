
export const About = () => {
  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in delay-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Computer Science student at <strong>Sikkim Manipal Institute of Technology</strong>, 
              specializing in Artificial Intelligence & Machine Learning. With a strong CGPA of 8.8, 
              I'm dedicated to creating innovative solutions that bridge the gap between technology and real-world problems.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in technology began with a curiosity about how intelligent systems work. 
              Today, I'm proficient in multiple programming languages and have hands-on experience 
              in machine learning, web development, and building scalable applications.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600">8.8</div>
                <div className="text-sm text-gray-600">CGPA</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-teal-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in delay-400">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Based in Sikkim, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Pursuing B.Tech in CSE with AI & ML</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Experienced in Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Passionate about Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
