import React from "react";

// Komponen ikon kecil untuk tombol, agar lebih rapi
const Icon = ({ d }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  // Mengubah string techstack menjadi array
  const techStackArray = techstack.split(', ').filter(tech => tech);

  return (
    <article className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Gambar Proyek */}
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={`Screenshot of ${title}`} 
          loading="lazy"
          className="w-full h-auto aspect-video object-cover" // Aspek rasio agar gambar seragam
        />
      </div>

      {/* Konten Kartu */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Judul Proyek dengan Gradien */}
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h1>
        
        {/* Deskripsi */}
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStackArray.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-gray-200 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Tombol Aksi */}
        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          {/* Tombol Live Preview dengan efek hover baru */}
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 transition-all duration-300"
          >
            Live Preview
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              <Icon d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3l6 6m-6-6l-6 6" />
            </span>
          </a>

          {/* Tombol View Code */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-semibold rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
          >
            View Code
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;