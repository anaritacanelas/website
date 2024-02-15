import Image from "next/image";

import profile from "../images/photo.jpg";
import mail from "../images/mail.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

export default function Home() {
  return (
    <div className="max-w-sm px-5 pt-12 mx-auto my-0 md:pt-20 md:max-w-4xl">
      <div className="flex flex-col gap-6 bg-gray-900 md:flex-row md:gap-12 ">
        <div className="md:basis-[32rem] max-w-64 md:max-w-full mx-auto grow-0 flex flex-col justify-items-start">
          <Image
            src={profile}
            alt="Picture of the author"
            className="mb-10 rounded-full"
            style={{ width: "100%" }}
          />
          <div>
            <ul className="flex justify-center space-x-4 text-white">
              <li className="h-5 md:h-10">
                <a href="mailto:ritacanelasferreira@gmail.com" target="_blank">
                  <Image
                    src={mail}
                    alt="Email"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </li>
              <li className="h-5 md:h-10">
                <a
                  href="https://www.linkedin.com/in/rita-ferreira-silva/"
                  target="_blank"
                >
                  <Image
                    src={linkedin}
                    alt="Linkedin"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </li>
              <li className="h-5 md:h-10">
                <a href="https://github.com/ritaferreirasilva" target="_blank">
                  <Image
                    src={github}
                    alt="Github"
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col pt-16 grow">
          <div className="font-josefin text-white text-2xl md:text-4xl !leading-[1.25] mb-5">
            Hi 👋, <br /> I&apos;m Rita, a front-end developer from Portugal
          </div>
          <div className="font-light text-white font-inter md:text-xl">
            <p className="pb-5">
              After 9 years as an Optometrist and researcher, I decided to
              change course.
            </p>
            <p className="pb-5">
              In 2019, I enrolled in a bachelor&apos;s degree in Software
              Engineering, which I finished in July 2022.
            </p>
            <p className="pb-5">
              I&apos;ve since found my passion for front-end development.
            </p>
          </div>

          <div className="pt-5 font-inter ">
            <p className="pb-2 font-semibold text-amber-400 md:text-xl ">
              {" "}
              Skills:
            </p>
            <ul className="pl-10 font-light text-white list-disc md:text-xl">
              <li className="pb-0.5">React</li>
              <li className="pb-0.5">Svelte</li>
              <li className="pb-0.5">Javascript</li>
              <li className="pb-0.5">Next JS</li>
              <li className="pb-0.5">Html</li>
              <li className="pb-0.5">CSS</li>
              <li className="pb-0.5">Tailwind CSS</li>
              <li className="pb-0.5">Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
