import React from "react";
import { logo, logo_2 } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex flex-col items-center justify-center">
      <nav className="w-full flex justify-between items-center mt-5 mb-10">
        <img src={logo_2} alt="logo" className="w-[200px] object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/Animesh-Chakrabarty/project_article_summarizer"
            )
          }
          className="black_btn"
        >
          Link
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with
        <br />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
