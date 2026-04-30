import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
              Full Stack Developer & Creative Problem Solver
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            I build exceptional digital experiences that make people's lives easier.
            Passionate about creating clean, efficient, and user-friendly applications.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium border border-gray-300 dark:border-gray-600"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center space-x-6 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>

          <div className="pt-12 animate-bounce">
            <a href="#about" className="text-gray-600 dark:text-gray-400">
              <ArrowDown size={32} className="mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
