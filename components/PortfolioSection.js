import React from 'react';

const PortfolioSection = () => {
  // Replace this with your actual portfolio data
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      imageUrl: 'https://th.bing.com/th/id/OIG.NpmF5dZpz13l8guj62zd?pid=ImgGn',
      url: 'https://th.bing.com/th/id/OIG.NpmF5dZpz13l8guj62zd?pid=ImgGn',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      imageUrl: 'https://th.bing.com/th/id/OIG.NpmF5dZpz13l8guj62zd?pid=ImgGn',
      url: 'https://th.bing.com/th/id/OIG.NpmF5dZpz13l8guj62zd?pid=ImgGn',

    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-black">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="mb-4 w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
