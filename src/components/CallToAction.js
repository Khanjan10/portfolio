import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-secondary py-20 px-6 text-center shadow-sm">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Available for New Opportunities
      </h2>
      <p className="text-black-400 mb-6 max-w-2xl mx-auto">
        I'm always excited to take on challenging projects and collaborate with innovative teams.
        Let's discuss how I can help bring your ideas to life.
      </p>
      <a
        onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({behavior: "smooth"});
            }} 
        className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded-full hover:bg-white border border-primary hover:text-primary transition"
      >
        Let's Work Together
      </a>
    </section>
  );
};

export default CallToAction;
