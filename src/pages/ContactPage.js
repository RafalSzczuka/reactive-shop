import React, { Component } from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/pageTransition";
import "../styles/ContactPage.scss";

class ContactPage extends Component {
  state = {
    username: "",
    email: "",
    phone: "",
    message: "",
  };

  handleSubmit = (e) => {
    e.preventDedault();
  };

  handleChange = (e) => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value,
    });
  };

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
        <div className="form_container">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="input">
              <label htmlFor="user">
                <input
                  type="text"
                  id="user"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Name"
                />
              </label>
            </div>
            <div className="input">
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="input">
              <label htmlFor="phone">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder="Phone"
                />
              </label>
            </div>
            <div className="input">
              <label htmlFor="message">
                <textarea
                  name="message"
                  id="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  placeholder="Your message"
                ></textarea>
              </label>
            </div>
            <button type="button" className="send_btn">
              Send
            </button>
          </form>
        </div>
      </motion.div>
    );
  }
}

export default ContactPage;
