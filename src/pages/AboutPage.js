import React from "react";
import "../styles/AboutPage.scss";
import logo from "../images/Online-Shopping-icon-512px.png";

import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animations/pageTransition";

const AboutPage = () => {
  return (
    <motion.div
      className="AboutPage container"
      initial="out"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h2 className="header-big">About</h2>
      <section className="about">
        <div className="top">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo
            deleniti laborum pariatur quas consequatur. Non culpa amet, nemo quo
            optio veritatis dolore molestiae eos suscipit tenetur cumque ut
            quod. Velit harum aut fugit. Earum alias perspiciatis voluptatibus!
            Alias illum sapiente quaerat voluptates dignissimos magni, maxime
            nemo fugit consequatur similique quisquam incidunt accusamus,
            consectetur soluta dolore labore? Dignissimos, ex odio! Quae aut
            mollitia fuga explicabo distinctio assumenda illum iure rem
            reprehenderit, animi veniam! Perspiciatis placeat iste sapiente
            libero architecto similique, eligendi excepturi dolorum quam id
            suscipit temporibus dignissimos! Quas, reiciendis. Ipsa odio eos
            repellendus sed corrupti non delectus, dolores, sit, illo quisquam
            aliquid quas eligendi ipsam autem totam velit doloremque magni
            doloribus dicta alias quam. Recusandae, quam dicta! Ea, iste?
            Nesciunt distinctio hic porro culpa accusamus incidunt similique
            minima exercitationem, numquam corporis, id adipisci ea? Accusamus
            magni impedit optio, eaque minima neque, beatae dolorem cupiditate
            quo autem hic libero id.
          </p>
          <div className="logo">
            <img src={logo} alt="reactive shop logo" />
          </div>
        </div>
        <div className="bottom">
          <p>
            Donec mauris tellus, lobortis id dignissim id, luctus ut purus.
            Etiam rutrum nibh consectetur purus tincidunt scelerisque. Etiam
            faucibus volutpat lectus, quis blandit diam consectetur ac. In hac
            habitasse platea dictumst. Sed rhoncus mattis condimentum. Vivamus
            sit amet mi volutpat enim tincidunt fringilla. Etiam porttitor dolor
            eleifend felis consectetur facilisis. Ut pulvinar sollicitudin erat,
            nec malesuada nunc scelerisque nec. Aliquam vel dolor diam. Cras
            efficitur dignissim justo, ac tristique tellus pellentesque
            pharetra. Quisque pharetra lectus molestie, posuere lectus eget,
            tempor justo.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
