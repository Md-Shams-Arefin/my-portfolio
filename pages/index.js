import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import About from "../pages/about";
import Services from "../pages/services";
import Resume from "../pages/resume";
import Portfolio from "../pages/portfolio";
import Reviews from "../pages/reviews";
import Contact from "../pages/contact";
import {
  ThumbUpIcon,
  ChatIcon,
  UserAddIcon,
  TagIcon,
} from "@heroicons/react/solid";


export default function Home() {
  return (
    <div className={styles.arefin}>
      <div className="pt-[300px] pb-[200px] pl-[50px]">
        <p className="text-[20px] text-[#fff]">Hello</p>
        <p className="text-[30px]">
          I´m <a className="text-[#eb2f06]">Shams </a>Arefin
        </p>
        <h1 className="text-[50px]">I´m Web Developer</h1>
        <div className="flex">
          <a>
            <ThumbUpIcon className="h-7 w-7 mx-2 text-[#eb2f06]" />
          </a>
          <a>
            <ChatIcon className="h-7 w-7 mx-2 text-[#eb2f06]" />
          </a>
          <a>
            <UserAddIcon className="h-7 w-7 mx-2 text-[#eb2f06]" />
          </a>
          <a>
            <TagIcon className="h-7 w-7 text-[#eb2f06]" />
          </a>
          
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
