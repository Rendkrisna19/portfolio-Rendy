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
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              <Icon d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1-1.6-2-3-2s-3 .9-3 2v3.5m6-10.5c0-1-1.6-2-3-2s-3 .9-3 2v3.5" />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;