import React, { useRef, useEffect } from "react";
import { techStackDetails } from "../Details";
import gsap from "gsap";

// Komponen Kartu untuk setiap teknologi (Reusable)
function TechCard({ name, src }) {
  return (
    <div className="tech-card flex flex-col items-center justify-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-400/30 dark:hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
      <img src={src} title={name} alt={name} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
      <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">{name}</p>
    </div>
  );
}

function Technologies() {
  const { html, css, js, react, redux, tailwind, bootstrap, sass, vscode, git, github, npm, postman, figma, laravel, php, mysql, python } = techStackDetails;
  
  // Mengelompokkan teknologi dan tools ke dalam array agar mudah di-map
  const tech = [
    { name: "HTML", src: html }, { name: "CSS", src: css }, { name: "JavaScript", src: js },
    { name: "React", src: react }, { name: "Redux", src: redux }, { name: "Tailwind CSS", src: tailwind },
    { name: "Bootstrap", src: bootstrap }, { name: "SASS", src: sass }, { name: "Laravel", src: laravel },
    { name: "PHP", src: php }, { name: "MySQL", src: mysql }, { name: "Python", src: python }
  ];

  const tools = [
    { name: "VS Code", src: vscode }, { name: "Git", src: git }, { name: "Github", src: github },
    { name: "Figma", src: figma }, { name: "NPM", src: npm }, { name: "Postman", src: postman }
  ];

  const techRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(techRef.current, { opacity: 0, duration: 1 })
      .from(".section-title, .section-subtitle", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
      }, "-=0.7")
      .from(".tech-card", {
        opacity: 0,
        y: 30,
        stagger: {
          amount: 1, // Durasi total untuk semua stagger
          from: "start",
          grid: "auto",
        },
        duration: 0.6,
      }, "-=0.5");
  }, []);

  return (
    <main ref={techRef} className="container mx-auto max-w-7xl px-6 pt-28 pb-20">
      <section>
        <h1 className="section-title text-2xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Tech Stack
        </h1>
        <p className="section-subtitle py-4 text-lg text-gray-600 dark:text-gray-300">
          Technologies I've been working with recently
        </p>
      </section>

      <section className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
        {tech.map((item, index) => (
          <TechCard key={index} name={item.name} src={item.src} />
        ))}
      </section>

      <section className="mt-20">
        <h1 className="section-title text-2xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Tools I Use
        </h1>
      </section>

      <section className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
        {tools.map((item, index) => (
          <TechCard key={index} name={item.name} src={item.src} />
        ))}
      </section>
    </main>
  );
}

export default Technologies;