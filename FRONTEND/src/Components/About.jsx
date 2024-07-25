import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            rerum accusantium commodi! Nihil iste optio autem reiciendis nulla
            earum! Magnam quas perspiciatis eum voluptatem at reprehenderit
            deleniti deserunt, ipsam provident quod eaque unde corporis facere
            alias optio, molestias modi obcaecati esse architecto culpa iure
            facilis atque impedit rem? Reiciendis, obcaecati?
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
