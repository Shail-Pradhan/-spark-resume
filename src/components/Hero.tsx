import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 bg-emerald-50">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SHAIL
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              PRADHAN
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            AI/ML Engineer & Full-Stack Developer
          </p>
          
          <p className="text-lg text-gray-500 max-w-lg">
            Computer Science student specializing in Artificial Intelligence & Machine Learning, 
            passionate about building innovative solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View My Work
            </Button>
            <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 pt-6">
            <a href="https://github.com/Shail-Pradhan" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
              <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/shail-pradhan/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a href="mailto:shail.pradhan@icloud.com" className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className="flex justify-center md:justify-end animate-fade-in delay-300">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 animate-pulse">
              <img alt="Shail Pradhan" src="/lovable-uploads/441e6344-7a91-42cf-82f1-3f3b350d0e71.jpg" className="w-full h-full rounded-full bg-white object-scale-down" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-80 animate-bounce delay-500"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-80 animate-bounce delay-700"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>;
};