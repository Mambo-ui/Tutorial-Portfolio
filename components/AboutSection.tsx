import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              {" "}
              Hi, my name is Bill and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>
              <span className="font-bold">{" self-motivated"} </span>
              <span className="font-bold">{" driven"}</span> software engineer
              based in Nairobi, Kenya.
            </p>
            <br />
            <p>
              I work well as part of a team but also on individual projects
              because I like to create goals that I will attain. I have
              excellent communication and listening skills. I am open to taking
              on new tasks and have an imagination that is unlimited.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing games🎮, traveling, to listening and
              discovering new music🎶, I am always seeking new experiences and
              love to keep myself engaged and learning new things.
            </p>
            <br />
            <p>
              I aim to live up to my belief that you should{" "}
              <span className="font-bold text-teal-500">
                never stop evolving
              </span>{" "}
              and that&#39;s what I strive to do. I am really passionate about
              technology and constantly want to push the envelope of what is
              conceivable🤓. I'm eager to follow my career wherever it may lead,
              and I'm constantly ready to seize opportunities that arise😄.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/about-image.png"
              alt=""
              width={325}
              height={200}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 pt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
