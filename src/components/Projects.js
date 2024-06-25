import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [animateProjects, setAnimateProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const projectsPosition = projectsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        setAnimateProjects(projectsPosition < screenHeight * 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='projects' className="container mx-auto mt-8 px-4 py-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform duration-500 ${animateProjects ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h3 className="text-xl font-semibold mb-2">Project Title 1</h3>
          <p className="text-gray-300 mb-4">Short description of the project goes here.</p>
          <a href="#" className="text-indigo-500 hover:underline">Read More</a>
        </div>
        <div className={`bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform duration-500 ${animateProjects ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h3 className="text-xl font-semibold mb-2">Project Title 2</h3>
          <p className="text-gray-300 mb-4">Short description of the project goes here.</p>
          <a href="#" className="text-indigo-500 hover:underline">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
