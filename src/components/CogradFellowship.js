import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer"; // Imported Footer Component

const CogradFellowship = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="container-fluid bg-light min-vh-100 p-0" style={{ fontFamily: "Poppins, sans-serif" }}>
      <style>
        {`
          body, html { overflow-x: hidden; margin: 0; padding: 0; width: 100%; }
          .fixed-header { position: fixed; top: 0; width: 100%; z-index: 1000; background: white; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); height: 80px; }
          .card { transition: transform 0.3s ease-in-out; }
          .card:hover { transform: translateY(-5px); }
        `}
      </style>

      <div className="fixed-header p-3 shadow-lg">
        <Header />
      </div>

      <div style={{ paddingTop: "150px" }}></div>

      <main className="container py-5">
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="text-center mb-5"
        >
          <motion.h2 
            className="fw-bold text-dark" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            Cograd Fellowship
          </motion.h2>

          <p className="text-muted px-3">
            The Cograd Fellowship is a unique opportunity designed to support ambitious students and professionals 
            in their academic and career growth. It provides financial aid, mentorship, and global exposure 
            to help individuals excel in their respective fields.
          </p>

          <motion.h2 
            className="fw-bold text-dark mt-4" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            Key Benefits
          </motion.h2>

          <div className="row mt-4">
            <div className="col-md-6 text-start">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">✔ Financial Support</li>
                <li className="list-group-item">✔ Expert Mentorship</li>
                <li className="list-group-item">✔ Career Growth</li>
                <li className="list-group-item">✔ Global Opportunities</li>
              </ul>
            </div>
            <div className="col-md-6">
              <iframe 
                className="rounded shadow-lg" 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute" 
                title="YouTube video" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mb-5">
          <div className="p-4 rounded shadow-lg bg-white">
            <h2 className="fw-bold text-center text-dark">How to Apply</h2>
            <div className="row mt-4">
              {["Fill out the online application", "Submit CV & research proposal", "Attend an interview", "Final selection announcement"].map((step, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                  <div className="card border-0 shadow rounded h-100">
                    <div className="card-body text-center">
                      <h5 className="fw-bold text-primary">{step}</h5>
                      <p className="text-muted">Step {index + 1} of your journey</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="p-5 bg-primary text-white rounded shadow-lg text-center">
          <h2 className="fw-bold">Ready to Elevate Your Career?</h2>
          <p className="mt-3">Join the Cograd Fellowship and gain access to mentorship, funding, and global opportunities!</p>
          <a href="https://forms.gle/iTM8HiXNdaTkwRnG7" target="_blank" rel="noopener noreferrer" className="btn btn-light fw-bold px-5 py-3 mt-3 rounded-pill">
            Apply Now
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default CogradFellowship;
