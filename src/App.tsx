import React from 'react';
import { Github, Linkedin, Mail, Phone, Moon, Sun, ExternalLink } from 'lucide-react';
import { useDarkMode } from './hooks/useDarkMode';
import ProjectCard from './components/ProjectCard';
import SectionHeading from './components/SectionHeading';
import ContactItem from './components/ContactItem';
import SkillItem from './components/SkillItem';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform duration-200 animate-fade-in z-10"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" aria-hidden="true" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" aria-hidden="true" />
          )}
        </button>

        <main className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden print:shadow-none animate-slide-up">
          {/* Header Section */}
          <header className="px-6 sm:px-8 py-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Darshan Gaikwad</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Full Stack Developer</p>
            <div className="mt-4 flex flex-wrap gap-y-3 gap-x-4 items-center text-gray-600 dark:text-gray-300">
              <ContactItem 
                href="tel:8378908006" 
                icon={<Phone size={18} />} 
                text="8378908006" 
              />
              <ContactItem 
                href="mailto:darshangaikwad4114@gmail.com" 
                icon={<Mail size={18} />} 
                text="darshangaikwad4114@gmail.com" 
              />
              <ContactItem 
                href="https://github.com/darshangaikwad" 
                icon={<Github size={18} />} 
                text="GitHub" 
                external={true}
              />
              <ContactItem 
                href="https://linkedin.com/in/darshangaikwad" 
                icon={<Linkedin size={18} />} 
                text="LinkedIn" 
                external={true}
              />
            </div>
          </header>

          <div className="px-6 sm:px-8 py-6 space-y-8">
            {/* Education Section */}
            <section className="animate-slide-in [animation-delay:200ms]" aria-labelledby="education-heading">
              <SectionHeading id="education-heading">EDUCATION</SectionHeading>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Savitribai Phule Pune University (SPPU)</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">Bachelor in Computer Application - BCA</p>
                  <p className="text-gray-900 dark:text-white font-medium mt-1">CGPA: 8.79/10.00 With A+ Grade</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">Relevant Coursework: Object-Oriented Programming, Database Management System, Data Structures and Algorithms, Operating Systems, Computer Networks</p>
                </div>
                <div className="text-left sm:text-right shrink-0 mt-2 sm:mt-0 sm:ml-4">
                  <p className="text-gray-700 dark:text-gray-300">Pune, India</p>
                  <p className="text-gray-600 dark:text-gray-400">2020 - 2023</p>
                </div>
              </div>
            </section>

            {/* Technical Skills Section */}
            <section className="animate-slide-in [animation-delay:400ms]" aria-labelledby="skills-heading">
              <SectionHeading id="skills-heading">TECHNICAL SKILLS</SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-4 text-gray-700 dark:text-gray-300">
                <SkillItem category="Programming Languages" skills="JavaScript, HTML, CSS, SCSS, SQL" />
                <SkillItem category="Frameworks" skills="React, Node.js, Express, TailwindCSS, Bootstrap" />
                <SkillItem category="Databases & Deployments" skills="MongoDB, MySQL, Firebase, Vercel" />
                <SkillItem category="Development Tools" skills="Webpack, Vite, GitHub, Git, Visual Studio Code, Postman" />
              </div>
            </section>

            {/* Experience Section */}
            <section className="animate-slide-in [animation-delay:600ms]" aria-labelledby="experience-heading">
              <SectionHeading id="experience-heading">EXPERIENCE</SectionHeading>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Idle Solutions Pvt Ltd</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-1 sm:mt-0 shrink-0 sm:ml-4">Pune, India</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mt-1">
                  <p className="text-gray-700 dark:text-gray-300 italic">Front End Developer Intern - Remote</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 shrink-0 sm:ml-4">Nov - Dec 2022</p>
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
            <section className="animate-slide-in [animation-delay:800ms]" aria-labelledby="projects-heading">
              <SectionHeading id="projects-heading">PROJECTS</SectionHeading>
              
              <div className="space-y-8">
                <ProjectCard
                  title="QuickCart E-Commerce App"
                  liveLink="https://quickcart-ecommerce.vercel.app"
                  sourceLink="https://github.com/darshangaikwad/quickcart"
                  techStack="React, Node.js, Tailwind CSS, FakeStoreAPI"
                  points={[
                    "Implemented a real-time product search using FakeStoreAPI, reducing search latency by 25% and ensuring up-to-date listings.",
                    "Developed an advanced filtering system for category, price, and stock availability, improving navigation efficiency by 30%.",
                    "Built a fully functional shopping cart with real-time price calculation and a seamless checkout flow, reducing cart abandonment by 20%.",
                    "Designed a 100% SEO-optimized, mobile-responsive UI using Tailwind CSS, enhancing accessibility across devices."
                  ]}
                />

                <ProjectCard
                  title="FilmFinder Movie App"
                  liveLink="https://filmfinder-app.vercel.app"
                  sourceLink="https://github.com/darshangaikwad/filmfinder"
                  techStack="React | Node.js | Bootstrap | OMDB API"
                  points={[
                    "Engineered a movie app with OMDB API integration, improving API response time by 30% through caching techniques.",
                    "Integrated a debounced search function and \"Add to Favorites\" feature, boosting user engagement by 40%.",
                    "Optimized performance with lazy loading, asset compression, and code splitting, reducing load times by 35%.",
                    "Developed a 100% SEO-optimized, mobile-friendly UI, ensuring cross-device compatibility and faster indexing."
                  ]}
                />

                <ProjectCard
                  title="Crypto Price Tracker App"
                  liveLink="https://crypto-tracker-app.vercel.app"
                  sourceLink="https://github.com/darshangaikwad/crypto-tracker"
                  techStack="HTML | CSS | JavaScript | Bootstrap | SCSS | FormSubmit"
                  points={[
                    "Implemented a secure login and registration system for guest account management, improving security and privacy.",
                    "Designed a real-time room booking system with availability, pricing, and amenities, increasing booking efficiency by 25%.",
                    "Created event-specific sections for weddings and conferences, improving venue visibility and inquiry rates by 30%.",
                    "Integrated FormSubmit for encrypted form submissions, streamlining guest inquiries and reducing response time by 40%."
                  ]}
                />
              </div>
            </section>

            {/* Honors & Involvement Section */}
            <section className="animate-slide-in [animation-delay:1000ms]" aria-labelledby="honors-heading">
              <SectionHeading id="honors-heading">HONORS & INVOLVEMENT</SectionHeading>
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                <li>React Course – Certificate from Udemy</li>
                <li>JavaScript Mastery Course – Certificate from Udemy</li>
                <li>NodeJS Masterclass (Nodejs, Rest API, Express, MongoDB) - Certificate from Udemy</li>
              </ul>
            </section>

            {/* Footer with custom button style */}
            <footer className="px-6 sm:px-8 py-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <button 
                onClick={() => window.print()} 
                className="btn-custom mt-4 print:hidden"
              >
                Print or Save as PDF
              </button>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;