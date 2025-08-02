import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

function Contact() {
  // GANTI DENGAN ACCESS KEY ANDA DARI WEB3FORMS
  const accessKey = "YOUR_ACCESS_KEY_HERE"; 

  const [result, setResult] = useState(null);
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.from(contactRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(".form-group", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      delay: 0.5,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Mengirim....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Pesan berhasil terkirim!");
      event.target.reset(); // Reset form setelah berhasil
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <main ref={contactRef} className="container mx-auto max-w-7xl px-6 pt-28 pb-20">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Have a question or a project in mind? Feel free to reach out!
        </p>
      </section>

      <section className="mt-12 max-w-2xl mx-auto">
        <form onSubmit={onSubmit} className="space-y-6">
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />

          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            ></textarea>
          </div>

          <div className="form-group text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        {result && (
          <p className="text-center mt-6 text-green-500 dark:text-green-400">{result}</p>
        )}
      </section>
    </main>
  );
}

export default Contact;