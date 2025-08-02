import React, { useEffect, useRef } from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";
import gsap from "gsap";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animasi untuk seluruh kontainer
    tl.from(aboutRef.current, {
      opacity: 0,
      duration: 1,
    })
    // Animasi untuk setiap section-title
    .from(".section-title", {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 0.8,
    }, "-=0.5")
    // Animasi untuk paragraf about me
    .from(".about-text", {
      opacity: 0,
      y: 20,
      duration: 0.8,
    }, "-=0.7")
    // Animasi untuk setiap item di timeline
    .from(".timeline-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.6,
    }, "-=0.5");
  }, []);

  return (
    // Padding atas (pt-28) untuk memberi ruang di bawah header fixed
    <main ref={aboutRef} className="container mx-auto max-w-7xl px-6 pt-28 pb-20">
      {/* Bagian About Me */}
      <section>
        <h1 className="section-title text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="about-text text-content py-8 lg:max-w-3xl text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          {personalDetails.about}
        </p>
      </section>

      {/* Bagian Work Experience dengan Timeline */}
      <section className="mt-12">
        <h1 className="section-title text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Work Experience
        </h1>
        {/* Container untuk Timeline */}
        <div className="relative mt-8 border-l-2 border-blue-200 dark:border-gray-700">
          {workDetails.map((item, index) => (
            <div key={index} className="timeline-item mb-12 ml-6">
              {/* Titik pada timeline */}
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <svg className="h-3 w-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-1a1 1 0 00-1 1v1h2V6a1 1 0 00-1-1z"></path>
                </svg>
              </span>
              <Work
                position={item.Position}
                company={item.Company}
                location={item.Location}
                type={item.Type}
                duration={item.Duration}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bagian Education dengan Timeline */}
      <section className="mt-16">
        <h1 className="section-title text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Education
        </h1>
        <div className="relative mt-8 border-l-2 border-blue-200 dark:border-gray-700">
          {eduDetails.map((item, index) => (
            <div key={index} className="timeline-item mb-12 ml-6">
              {/* Titik pada timeline */}
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                 <svg className="h-3 w-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.082 1.012A9 9 0 001 10a9 9 0 009.082 8.988C15.525 19.342 20 15.013 20 10c0-5.013-4.475-9.342-9.918-8.988zM10 2a8 8 0 100 16 8 8 0 000-16zM5.5 9.5a.5.5 0 01.5-.5h2.25a.5.5 0 01.5.5v5a.5.5 0 01-1 0V10H6a.5.5 0 01-.5-.5zm4 .5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5z" clipRule="evenodd"></path>
                 </svg>
              </span>
              <Work
                position={item.Position}
                company={item.Company}
                location={item.Location}
                type={item.Type}
                duration={item.Duration}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;