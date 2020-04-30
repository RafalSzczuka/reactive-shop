import React, { Component } from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/pageTransition";

class ContactPage extends Component {
  state = {};
  render() {
    return (
      <motion.div
        className="ContactPage container"
        initial="out"
        exit="out"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <h2 className="header-big">contact with us</h2>
        <form></form>
      </motion.div>
    );
  }
}

export default ContactPage;
