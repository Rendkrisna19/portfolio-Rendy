import React, { useRef, useEffect } from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";
import gsap from "gsap";

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" }});

    tl.from(projectsRef.current, { opacity: 0, duration: 1 })
      .from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, "-=0.7")
      .from(".project-card-wrapper", {
        opacity: 0,
        y: 30,
        stagger: 0.2, // Setiap kartu muncul 0.2 detik setelah sebelumnya
        duration: 0.6,
      }, "-=0.5");
  }, []);

  return (
    // 1. Jarak atas diubah menjadi pt-28 agar tidak tertutup Header
    <main ref={projectsRef} className="container mx-auto max-w-7xl px-6 pt-28 pb-20">
      <section>
        {/* 2. Warna judul diubah menjadi gradien */}
        <h1 className="section-title text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h1>
        {/* 3. Grid diberi jarak atas (mt-12) dan gap yang seragam */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectDetails.map((project, index) => (
            // Wrapper untuk animasi stagger
            <div key={index} className="project-card-wrapper">
              <Project
                title={project.title}
                image={project.image}
                description={project.description}
                techstack={project.techstack}
                previewLink={project.previewLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;