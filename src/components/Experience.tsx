
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative animate-fade-in delay-200">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white shadow-lg">
                <Briefcase className="w-8 h-8" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Machine Learning Trainee</h3>
                    <p className="text-lg text-blue-600 font-semibold">Manipal University Jaipur</p>
                  </div>
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-gray-600 mt-2 md:mt-0">
                    06-2024 to 07-2024
                  </span>
                </div>

                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Developed foundational knowledge in machine learning,</strong> including supervised and unsupervised learning, 
                      neural networks, optimization techniques, and backpropagation algorithms using Python.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Gained hands-on experience</strong> by building an SMS spam message classifier using Logistic Regression, 
                      implementing preprocessing techniques and feature extraction on texts.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Proficient in ML tools and libraries</strong> such as scikit-learn, NumPy, Pandas, and NLTK; 
                      strengthened ability to evaluate models using confusion matrices and classification metrics in real-world datasets.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Python", "Machine Learning", "Scikit-learn", "NumPy", "Pandas", "NLTK", "Data Analysis"].map((skill, index) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-600 rounded-full text-sm border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
