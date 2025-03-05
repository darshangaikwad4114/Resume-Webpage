import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 selection:bg-primary-100 selection:text-primary-700 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform duration-200 animate-fade-in"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden print:shadow-none animate-slide-up">
          {/* Header Section */}
          <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Darshan Gaikwad</h1>
            <div className="mt-3 flex flex-wrap gap-4 items-center text-gray-600 dark:text-gray-300">
              <a href="tel:8378908006" className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200" aria-label="Phone number">
                <Phone size={18} aria-hidden="true" />
                <span className="font-medium">8378908006</span>
              </a>
              <a href="mailto:darshangaikwad4114@gmail.com" className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200" aria-label="Email address">
                <Mail size={18} aria-hidden="true" />
                <span className="font-medium">darshangaikwad4114@gmail.com</span>
              </a>
              <a href="#" className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200" aria-label="GitHub profile">
                <Github size={18} aria-hidden="true" />
                <span className="font-medium">GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200" aria-label="LinkedIn profile">
                <Linkedin size={18} aria-hidden="true" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="px-8 py-6 space-y-8">
            {/* Education Section */}
            <section className="animate-slide-in [animation-delay:200ms]">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">EDUCATION</h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Savitribai Phule Pune University (SPPU)</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">Bachelor in Computer Application - BCA</p>
                  <p className="text-gray-900 dark:text-white font-medium mt-1">CGPA: 8.79/10.00 With A+ Grade</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">Relevant Coursework: Object-Oriented Programming, Database Management System, Data Structures and Algorithms, Operating Systems, Computer Networks</p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="text-gray-700 dark:text-gray-300">Pune, India</p>
                  <p className="text-gray-600 dark:text-gray-400">2020 - 2023</p>
                </div>
              </div>
            </section>

            {/* Technical Skills Section */}
            <section className="animate-slide-in [animation-delay:400ms]">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">TECHNICAL SKILLS</h2>
              <div className="space-y-2.5 text-gray-700 dark:text-gray-300">
                <p><span className="font-semibold text-gray-900 dark:text-white">Programming Languages:</span> JavaScript, HTML, CSS, SCSS, SQL</p>
                <p><span className="font-semibold text-gray-900 dark:text-white">Frameworks:</span> React, Node.js, Express, TailwindCSS, Bootstrap</p>
                <p><span className="font-semibold text-gray-900 dark:text-white">Databases & Deployments:</span> MongoDB, MySQL, Firebase, Vercel</p>
                <p><span className="font-semibold text-gray-900 dark:text-white">Development Tools:</span> Webpack, Vite, GitHub, Git, Visual Studio Code, Postman</p>
              </div>
            </section>

            {/* Experience Section */}
            <section className="animate-slide-in [animation-delay:600ms]">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">EXPERIENCE</h2>
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Idle Solutions Pvt Ltd</h3>
                  <p className="text-gray-700 dark:text-gray-300 shrink-0 ml-4">Pune, India</p>
                </div>
                <div className="flex justify-between items-start mt-1">
                  <p className="text-gray-700 dark:text-gray-300 italic">Front End Developer Intern - Remote</p>
                  <p className="text-gray-600 dark:text-gray-400 shrink-0 ml-4">Nov - Dec 2022</p>
                </div>
                <ul className="list-disc ml-4 mt-3 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                  <li>Optimized website structure by refactoring HTML and compressing images, improving load speed by 25%.</li>
                  <li>Developed and tested responsive UI using CSS media queries and Chrome DevTools, improving cross-device experience and increasing user satisfaction by 15%.</li>
                  <li>Improved site performance by minifying JavaScript (30% reduction) and optimizing CSS rules, increasing search visibility by 20%. Used Google Lighthouse for performance analysis.</li>
                  <li>Implemented interactive JavaScript features such as real-time content loading and tooltips, enhancing website interactivity and user experience.</li>
                </ul>
              </div>
            </section>

            {/* Projects Section */}
            <section className="animate-slide-in [animation-delay:800ms]">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">PROJECTS</h2>
              
              {/* QuickCart Project */}
              <div className="mb-8 hover:translate-x-2 transition-transform duration-200">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  QuickCart E-Commerce App | 
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 ml-1">Live</a> | 
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 ml-1">Source Code</a>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 italic mt-1">Tech Stack: React, Node.js, Tailwind CSS, FakeStoreAPI</p>
                <ul className="list-disc ml-4 mt-3 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                  <li>Implemented a real-time product search using FakeStoreAPI, reducing search latency by 25% and ensuring up-to-date listings.</li>
                  <li>Developed an advanced filtering system for category, price, and stock availability, improving navigation efficiency by 30%.</li>
                  <li>Built a fully functional shopping cart with real-time price calculation and a seamless checkout flow, reducing cart abandonment by 20%.</li>
                  <li>Designed a 100% SEO-optimized, mobile-responsive UI using Tailwind CSS, enhancing accessibility across devices.</li>
                </ul>
              </div>

              {/* FilmFinder Project */}
              <div className="mb-8 hover:translate-x-2 transition-transform duration-200">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  FilmFinder Movie App | 
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 ml-1">Live</a> | 
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 ml-1">Source Code</a>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 italic mt-1">Tech Stack: React | Node.js | Bootstrap | OMDB API</p>
                <ul className="list-disc ml-4 mt-3 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                  <li>Engineered a movie app with OMDB API integration, improving API response time by 30% through caching techniques.</li>
                  <li>Integrated a debounced search function and "Add to Favorites" feature, boosting user engagement by 40%.</li>
                  <li>Optimized performance with lazy loading, asset compression, and code splitting, reducing load times by 35%.</li>
                  <li>Developed a 100% SEO-optimized, mobile-friendly UI, ensuring cross-device compatibility and faster indexing.</li>
                </ul>
              </div>

              {/* Crypto Price Tracker Project */}
              <div className="hover:translate-x-2 transition-transform duration-200">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Crypto Price Tracker App | 
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 ml-1">Live</a> | 
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 ml-1">Source Code</a>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 italic mt-1">Tech Stack: HTML | CSS | JavaScript | Bootstrap | SCSS | FormSubmit</p>
                <ul className="list-disc ml-4 mt-3 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                  <li>Implemented a secure login and registration system for guest account management, improving security and privacy.</li>
                  <li>Designed a real-time room booking system with availability, pricing, and amenities, increasing booking efficiency by 25%.</li>
                  <li>Created event-specific sections for weddings and conferences, improving venue visibility and inquiry rates by 30%.</li>
                  <li>Integrated FormSubmit for encrypted form submissions, streamlining guest inquiries and reducing response time by 40%.</li>
                </ul>
              </div>
            </section>

            {/* Honors & Involvement Section */}
            <section className="animate-slide-in [animation-delay:1000ms]">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">HONORS & INVOLVEMENT</h2>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                <li>React Course – Certificate from Udemy</li>
                <li>JavaScript Mastery Course – Certificate from Udemy</li>
                <li>NodeJS Masterclass (Nodejs, Rest API, Express, MongoDB) - Certificate from Udemy</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;