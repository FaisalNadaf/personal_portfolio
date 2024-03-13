import React from "react";
import hero from "../assets/images/faisal-rm-bg.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 pl-20">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Faisal Nadaf</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <a href="https://www.instagram.com/faisal.fn_?igsh=ZGUzMzM3NWJiOQ==">
              <div className="text-gray-600 hover:text-white cursor-pointer ">
                <ion-icon name="logo-instagram"></ion-icon>
              </div>
            </a>
            <a href="https://linktr.ee/faisal_fn?utm_source=linktree_admin_share">
              <div className="text-gray-600 hover:text-white cursor-pointer ">
                <ion-icon name="link-outline"></ion-icon>{" "}
              </div>
            </a>
            <a href="https://www.linkedin.com/in/faisal-nadaf-429160281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <div className="text-gray-600 hover:text-white cursor-pointer ">
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </a>
            <a href="https://x.com/faisal_nadaf?t=-IAL4YuRdjF9g9Cb7hVFGg&s=09">
              <div className="text-gray-600 hover:text-white cursor-pointer ">
                <ion-icon name="logo-twitter"></ion-icon>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center h-full">
        <div>
          <img
            src={hero}
            alt=""
            className="md:w-11/12  h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
