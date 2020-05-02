import React, { Component } from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/pageTransition";
import "../styles/ContactPage.scss";

class ContactPage extends Component {
  state = {
    username: "",
    email: "",
    phone: "",
    message: "",
    verified: false,

    errors: {
      username: false,
      email: false,
      phone: false,
      message: false,
    },
  };

  errorMessages = {
    errorName: "Enter your name (2 letters at least)",
    errorEmail: "Enter your valid email (example@ex.com)",
    errorPhone: "Enter your phone (9 digits)",
    errorMessage: "Enter your message",
  };

  handleChange = (e) => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value,
    });
  };

  formValidator = () => {
    let username = false;
    let email = false;
    let phone = false;
    let message = false;
    let correct = false;

    if (this.state.username.length > 0) {
      username = true;
    }
    if (
      this.state.email.length !== 0 &&
      this.state.email.indexOf("@") !== -1 &&
      this.state.email.indexOf(".") !== -1
    ) {
      email = true;
    }
    if (this.state.phone.match(/^\d{9}$/)) {
      phone = true;
    }
    if (this.state.message.length > 0) {
      message = true;
    }
    if (username && email && phone && message) {
      correct = true;
      this.setState({
        verified: true,
      });
      setTimeout(() => {
        this.setState({ verified: false });
      }, 4500);
    }
    return {
      username,
      email,
      phone,
      message,
      correct,
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidator();

    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        phone: "",
        message: "",

        errors: {
          username: false,
          email: false,
          phone: false,
          message: false,
        },
      });
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          phone: !validation.phone,
          message: !validation.message,
        },
      });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      errorName,
      errorEmail,
      errorPhone,
      errorMessage,
    } = this.errorMessages;

    const { username, email, phone, message } = this.state.errors;

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
            <div
              className={username ? "input alert-validate" : "input"}
              validator-message={errorName}
            >
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
            <div
              className={email ? "input alert-validate" : "input"}
              validator-message={errorEmail}
            >
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
            <div
              className={phone ? "input alert-validate" : "input"}
              validator-message={errorPhone}
            >
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
            <div
              className={message ? "input alert-validate" : "input"}
              validator-message={errorMessage}
            >
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
            <button className="send_btn">
              {this.state.verified ? "Message send" : "Send"}
            </button>
            {this.state.verified ? (
              <h3>Thank you for your message. We will reply soon!</h3>
            ) : null}
          </form>
        </div>
      </motion.div>
    );
  }
}

export default ContactPage;
