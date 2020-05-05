import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/pageTransition";
import "../styles/ErrorPage.scss";

const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="out"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
      className="ErrorPage container"
    >
      <div className="error_message">
        <p className="error_header">page not found</p>
        <div className="four_o_four">
          <span className="first_four">4</span>
          <span className="zero">0</span>
          <span className="last_four">4</span>
        </div>
        <div className="error_footer">
          <p>we are sorry, but the page you requested was not found</p>
          <Link to="/" className="home_btn">
            Home page
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorPage;
