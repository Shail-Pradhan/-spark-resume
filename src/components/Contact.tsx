
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss projects, opportunities, or just say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in delay-200">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:shail.pradhan@icloud.com" className="text-gray-800 hover:text-blue-600 transition-colors">
                      shail.pradhan@icloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-teal-600 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+919832147441" className="text-gray-800 hover:text-blue-600 transition-colors">
                      +91 98321 47441
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">GitHub</p>
                    <a href="https://github.com/Shail-Pradhan" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors">
                      github.com/Shail-Pradhan
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-500 rounded-full">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/shail-pradhan/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors">
                      linkedin.com/in/shail-pradhan
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Location</h4>
              <p className="text-gray-600">
                Singtam, Gangtok District<br />
                Sikkim - 737134<br />
                India
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="animate-fade-in delay-400">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to collaborate?</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Whether you're looking for a dedicated developer for your team, have an exciting project in mind, 
                or just want to connect with a fellow tech enthusiast, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => window.location.href = 'mailto:shail.pradhan@icloud.com'}
                >
                  Send me an email
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-2 border-blue-300 hover:border-blue-500 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://www.linkedin.com/in/shail-pradhan/', '_blank')}
                >
                  Connect on LinkedIn
                </Button>
              </div>

              <div className="mt-8 p-4 bg-white/60 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Certifications</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• HackerRank: Problem-Solving & Python (Basic)</p>
                  <p>• Google: Foundations of Cybersecurity</p>
                  <p>• Meta: Programming in Python</p>
                  <p>• Udemy: Full-Stack Web Development</p>
                  <p>• IBM: Cybersecurity Tools & Compliance Framework</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
