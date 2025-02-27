import { useContext } from "react";
import {
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Javascript,
  GithubLite,
  CPP,
  C,
} from "../assets/Constant";
// import aos from "aos";
import "aos/dist/aos.css";
import Image from "./ImgProp";
import { ThemeContext } from "../context/ThemeContext";

function Skills() {
  const { theme } = useContext(ThemeContext);
  console.log("hello");
  const skill = [
    C,
    HTML,
    CSS,
    TailwindCSS,
    react,
    Javascript,
    CPP,
    Vite,
    Git,
    Github,
  ];
  const skillLite = [
    C,
    HTML,
    CSS,
    TailwindCSS,
    react,
    Javascript,
    CPP,
    Vite,
    Git,
    GithubLite,
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="font-bold text-center mt-4 text-indigo-600 dark:text-indigo-500 text-5xl "
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        SKILLS
      </div>

      <div
        className="grid grid-cols-3 place-items-center w-[80%]  items-center justify-center text-center content-center mx-auto  max-[600px]:mx-auto max-[600px]:grid-cols-2  mt-12 gap-y-5 "
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-once="false"
      >
        {(theme === "dark" ? skill : skillLite).map((skill, index) => (
          <Image img={skill} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
