"use client";


import WaveIcon from "../assets/wave-icon.svg";

import casestudy1 from "../assets/casestudy-1.png";
import casestudy2 from "../assets/casestudy-2.png";
import casestudy3 from "../assets/casestudy-3.png";
import casestudy4 from "../assets/casestudy-4.png";
import casestudy5 from "../assets/casestudy-5.png";
import mypicture from "../assets/Tommy.jpg";
import contactImage from "../assets/contact-image.png";
import curveUnderIcon from "../assets/curve-underline-icon.svg";
import hamburgerIcon from "../assets/hamburger-menu.svg";
import personIcon from "../assets/person-icon.svg";
import messageIcon from "../assets/message-icon.svg";
import StarCircleIcon from "../assets/star-circle.svg";
import linebelow from "../assets/linebelow.svg";
import PSIcon from "../assets/adobe-photoshop-icon.png";
import LinkedIcon from "../assets/linkedin-icon.svg";
import WAIcon from "../assets/wa-icon.svg";
import BehanceIcon from "../assets/behance-icon.svg";
import FigmaIcon from "../assets/volumetric-figma-icon.png";
import resumeImage from "../assets/cand-res-brief.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const caseStudies = [
  {
    image: casestudy1,
    title: "Servv",
    description:
      "Servv is a market place for artisan to post their various services for customers to hire. It serves as a means for both artisan and customer to locate each other conveniently. ",
    link: "https://servvmarketplace.netlify.app/",
  },
  {
    image: casestudy2,
    title: "Gpt-3",
    description:
      "Gpt-3 is a website wher you find all sort of news about AI. Various updates and new features that are availablr in AI. All news AI is can be found here.",
    link: "https://aiwebsite-kd.netlify.app/",
  },
  {
    image: casestudy3,
    title: "C-bake",
    description:
      "C-bake is a website for a bakery in which they post their various products. It serves as a means for customers to purchase and also for advertisement of their various new products.",
    link: "https://bakerywebsite-kd.netlify.app/",
  },
  {
    image: casestudy4,
    title: "Snap",
    description:
      "Snap is a website developed to link up various tech individuals to work remotely. If you have a product or you require the knowhow of people in the tech field, snap is the site for you.  ",
    link: "https://snap-kd.netlify.app/",
  },
  {
    image: casestudy5,
    title: "Agile.co",
    description:
      "Agile.co is a platform that helps workers communicate and work  together effectively it provides a central location for team members to communicate, share files and communicate on projects.",
    link: "https://www.behance.net/gallery/167600553/Agileco-UX-case-study",
  },
];

export default function Home() {
   const [validationState, setValidatiionState] = useState(true);

  //   const [buttonStyle, setButtonStyle] = useState(false);

  // FORM VALIDATION
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear previous errors on change
  };

  const handleSubmit = (e: any) => {
    if (validationState) {
      // e.target.reset();
      // window.location.reload(false);
      console.log("Form submitted successfully:", formData);
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  function validateForm() {
    let valid = true;
    setValidatiionState(true);
    // Name validation
    if (!formData.user_name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_name: "Name is required",
      }));
      valid = false;
      setValidatiionState(false);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.user_email.trim() || !emailRegex.test(formData.user_email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_email: "Enter a valid email address",
      }));
      valid = false;
      setValidatiionState(false);
    }

    // Message validation
    if (!formData.message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message is required",
      }));
      valid = false;
      setValidatiionState(false);
    }
  }

  return (
    <main className="flex relative flex-col items-center w-screen bg-[#0F0F0F] md:px-0 space-y-[80px]  ">
      <div className="homepage flex flex-col gap-[92px] max-w-[1240px] w-[100%] px-[20px] ">
        <div className="hero flex flex-col md:flex-row  mt-[45px]">
          <div className="w-[70%] rounded-[20px] overflow-hidden md:hidden mt-[45px] mx-auto">
            <Image src={mypicture} alt="my profile picture" />
          </div>
          <div className="hero-section relative md:w-[60%] w-full rounded-[15px] bg-opacity-10  bg-center bg-cover pt-[70px] pb-[70px] md:px-[40px] md:items-start items-center flex flex-col ">
            <div className="flex flex-wrap gap-[10px] text-[36px] md:text-[50px] font-bold tracking-wide md:max-w-[80%] max-w-[95%] text-center md:justify-start justify-center space-y-[1px] mb-[5px] ">
              <span className=" md:text-left">
                Hi, I&lsquo;m Atanniyi Ayotomiwa, a
              </span>
              {/* <Image
              className=" w-[28px] md:w-[50px] "
              src={WaveIcon}
              alt="wave icon"
            />
            ,<span className=" md:text-left"> </span> */}
              <span className=" md:text-left gradient-text ">
                Web developer
              </span>
            </div>
            <p className=" text-[20px] md:justify-start md:text-left text-center md:max-w-[567px] w-[80%] leading-[32px] tracking-wide mb-[34px] ">
              I am a developer with understanding of methods geared towards
              creating innovative and user-centered solutions to solve web
              development challenges as well as solving problems using
              Javascript, Typescript, MongoDB and so much more
            </p>
            <div className="flex items-center md:justify-start justify-center gap-[10px] mb-[40px] ">
              <Image
                className=" w-[40px] "
                src={FigmaIcon}
                alt="tools used icon"
              />
              <Image
                className=" w-[50px] "
                src={PSIcon}
                alt="tools used icon"
              />
            </div>
            <button className=" main-color rounded-[5px] py-[13px] px-[40px] ">
              <a href="#portfolio">See my work</a>
            </button>
          </div>
          <div className="w-[50%] rounded-[20px] overflow-hidden mt-[45px] hidden md:block mx-auto">
            <Image src={mypicture} alt="my profile picture" />
          </div>
        </div>

        <div className="skills flex flex-col gap-[40px] overflow-hidden ">
          <div className=" flex flex-col gap-[5px] items-center justify-center ">
            <h1 className=" text-[30px] font-medium ">Skills</h1>
            <Image src={curveUnderIcon} alt=" underline curve " />
          </div>
          <div className="py-20px bg-[#131313] rounded-[10px] border-solid border-[2px] border-[#FFFFFF1A] px-[30px] py-[20px]  ">
            <span className="text-[20px] mb-[20px]">Languages</span>
            <div className=" mt-[20px] flex flex-wrap gap-[20px] items-start justify-left text-[14px] text-nowrap ">
              <p className=" w-fit ">HTML</p>
              <Image src={StarCircleIcon} alt=" star circle curve " />
              <p className=" w-fit  ">CSS</p>
              <Image src={StarCircleIcon} alt=" star circle curve " />
              <p className=" w-fit ">JAVASRIPT</p>
              <Image src={StarCircleIcon} alt=" mcircle curve " />
              <p className=" w-fit ">TYPESCRIPT</p>
              <Image src={StarCircleIcon} alt=" mcircle curve " />
              <p className=" w-fit ">PYTHON</p>
            </div>
          </div>
          <div className="py-20px bg-[#131313] rounded-[10px] border-solid border-[2px] border-[#FFFFFF1A] px-[30px] py-[20px]  ">
            <span className="text-[20px] mb-[20px]">Technlogies</span>
            <div className=" mt-[20px] flex flex-wrap gap-[20px] items-start justify-left text-[14px] text-nowrap ">
              <p className=" w-fit ">React</p>
              <Image src={StarCircleIcon} alt=" star circle curve " />
              <p className=" w-fit  ">Node</p>
              <Image src={StarCircleIcon} alt=" star circle curve " />
              <p className=" w-fit ">Express</p>
              <Image src={StarCircleIcon} alt=" mcircle curve " />
              <p className=" w-fit ">Next</p>
              <Image src={StarCircleIcon} alt=" star circle curve " />
              <p className=" w-fit ">MongoDB</p>
              <Image src={StarCircleIcon} alt=" star circle curve " />
              <p className=" w-fit ">Figma</p>
              <Image src={StarCircleIcon} alt=" star circle curve " />
              <p className=" w-fit ">Tailwind</p>
              <Image src={StarCircleIcon} alt=" star circle curve " />
              <p className=" w-fit ">Bootstrap</p>
              <Image src={StarCircleIcon} alt=" star circle curve " />
              <p className=" w-fit ">Git</p>
            </div>
          </div>
        </div>

        <div className="what-i-do flex flex-col gap-[60px] items-center justify-center ">
          <div className=" flex flex-col gap-[5px] items-center justify-center ">
            <h1 className=" text-[30px] font-medium ">What I Do</h1>
            <Image src={curveUnderIcon} alt=" underline curve " />
          </div>
          <div className="flex flex-wrap md:gap-[27px] gap-[20px] items-center justify-center ">
            <WhatDoCard
              title="Frontend development"
              description="Developing accessible and responsive website interfaces for end users to optimize user experience."
            />
            <WhatDoCard
              title="Backend development"
              description="Building mechanisms and structures that ensure security, reliability and data storage for end user and website owner."
            />
            <WhatDoCard
              title="UI/UX Design"
              description="Design the product's interface and user interactions to ensure a seamless and user-friendly experience."
            />
            <WhatDoCard
              title="Iterative Design"
              description="Continuously refine designs based on feedback and testing, ensuring the final product meets user expectations."
            />
            <WhatDoCard
              title="Collaboration"
              description="Work closely with cross-functional teams, including engineers, marketers, and project managers, to bring the product from concept to reality."
            />
            <WhatDoCard
              title="Concept Development"
              description="Generate creative ideas and concepts for new products or enhancements to existing ones."
            />
            <WhatDoCard
              title="Solve problems"
              description="I contribute to crafting products that are tailored to tackle challenges and fulfill distinct requirements for both individuals and businesses."
            />
          </div>
        </div>

        <div
          id="portfolio"
          className="my-works flex flex-col gap-[80px] justify-center items-center "
        >
          <div className=" flex flex-col gap-[5px] items-center justify-center ">
            <h1 className=" text-[30px] font-medium ">Development portfolio</h1>
            <Image src={curveUnderIcon} alt=" underline curve " />
          </div>
          <div className=" md:container mx-auto flex md:flex-col md:flex-wrap flex-col w-full md:gap-[80px] gap-[100px] justify-center space-y-[100x] ">
            {caseStudies.map((content, index) => (
              <CaseStudy
                key={index}
                image={content.image}
                title={content.title}
                description={content.description}
                link={content.link}
              />
            ))}
          </div>
        </div>
        <div className="socials flex flex-col md:gap-[60px] gap-[30px] text-[14px]  ">
          <div
            className=" flex flex-col gap-[5px] items-center justify-center "
            id="resume"
          >
            <h1 className=" text-[30px] font-medium ">My Resume</h1>
            <Image src={curveUnderIcon} alt=" underline curve " />
          </div>
          <div className="flex flex-col gap-[30px] justify-center items-center ">
            <Image
              className=" md:flex w-[250px] md:w-[auto]"
              src={resumeImage}
              alt="contact person avatar"
            />
            <a
              href="/emmaCV.pdf"
              className=" px-[20px] md:mx-0 mx-auto w-fit py-[15px] bg-[#0853f5] rounded-[5px] underline "
            >
              View my resume
            </a>
          </div>
        </div>
        <div className="contact-me flex flex-col gap-[80px] ">
          <div className=" flex flex-col gap-[5px] items-center justify-center ">
            <h1 className=" text-[30px] font-medium ">Contact me</h1>
            <Image src={curveUnderIcon} alt=" underline curve " />
          </div>
          <div className="flex gap-[128px] justify-center items-center ">
            <form
              id="contact-form"
              action="submit"
              // method="post"
              ref={null}
              onSubmit={handleSubmit}
              autoComplete="name"
              className="flex flex-col gap-[20px] md:p-0 p-[20px] w-[550px] rounded-[10px] md:text-[#EDF5FF] text-[#151C23] "
            >
              <div className="flex relative flex-col gap-[10px] ">
                <label
                  className=" absolute left-[10px] top-[5px] "
                  id="email"
                  htmlFor=""
                >
                  <Image
                    className=" m-[6px] "
                    src={personIcon}
                    alt="person icon"
                  />
                </label>
                <input
                  name="user_name"
                  id="name"
                  type="text"
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  className="  w-full h-[60px] border-solid border-[1px] md:border-[#EDF5FF] border-[#71A1FF50] rounded-[5px] p-[5px] pl-[60px] bg-[#93b9ff00]  "
                />
              </div>
              <div className="flex relative flex-col gap-[10px] ">
                <label
                  className=" absolute left-[10px] top-[5px] "
                  id="email"
                  htmlFor=""
                >
                  <Image src={messageIcon} alt="message icon" />
                </label>
                <input
                  name="user_email"
                  id="email"
                  type="text"
                  onChange={handleChange}
                  placeholder="Your email address"
                  autoComplete="email"
                  className=" w-full h-[60px] border-solid border-[1px] md:border-[#EDF5FF] border-[#71A1FF50] rounded-[5px] p-[5px] pl-[60px] bg-[#93b9ff00]  "
                />
              </div>

              <div className="flex relative flex-col gap-[10px] ">
                <textarea
                  name="message"
                  id="message"
                  onChange={handleChange}
                  cols={40}
                  rows={20}
                  placeholder="Your message here"
                  className=" w-full h-[250px] text-[18px] border-solid border-[1px] md:border-[#EDF5FF] border-[#71A1FF50] rounded-[5px] p-[5px] pl-[10px] bg-[#93b9ff00]  "
                ></textarea>
              </div>
              <input
                type="submit"
                typeof="submit"
                value="Send me a message"
                onSubmit={handleSubmit}
                className=" cursor-pointer bg-[#0853f5] text-[20px] text-[#ffffff] py-[14px] px-[20px] w-fit md:mx-0 mx-auto rounded-[5px] "
              />
            </form>
            <Image
              className=" hidden md:flex "
              src={contactImage}
              alt="contact person avatar"
            />
          </div>
        </div>
        <div className="socials flex flex-col gap-[60px] ">
          <div className=" flex flex-col gap-[5px] items-center justify-center ">
            <h1 className=" text-[30px] font-medium ">Socials</h1>
            <Image src={curveUnderIcon} alt=" underline curve " />
          </div>
          <div className=" flex flex-wrap gap-[40px] md:text-[30px] text-[20px] justify-center ">
            <div className=" flex gap-[15px] items-center justify-center ">
              <Image
                className=" p-[10px] w-[50px] rounded-[5px] bg-[#474747] flex self-center "
                src={LinkedIcon}
                alt=" linkedIn social media icon "
              />
              <a
                className=" underline "
                href="https://www.linkedin.com/in/ayotomiwa-atanniyi-15b4a3254?"
              >
                Emmanuel Ayotomiwa
              </a>
            </div>
            <div className=" flex gap-[15px] items-center justify-center ">
              <Image
                className=" p-[10px] w-[50px] rounded-[5px] bg-[#474747] flex self-center "
                src={WAIcon}
                alt="whatsapp social media icon"
              />
              <a
                className=" underline "
                href="https://wa.link/biwegt"
              >
                +2348036818230
              </a>
            </div>
            <div className=" flex gap-[15px] items-center justify-center ">
              <Image
                className=" p-[10px] w-[50px] rounded-[5px] bg-[#474747] flex self-center "
                src={BehanceIcon}
                alt=" behance social media icon"
              />
              <a className=" underline " href="">
                Ayotowiwa
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const WhatDoCard = (props: any) => {
  return (
    <div className=" flex flex-col w-[160px] md:p-[24px] p-[16px] gap-[8px] border-solid border-[2px] border-[#FFFFFF1A] md:w-[270px]  md:min-h-[280px] h-[320px] flex-auto hover:bg-[#ffffff2f] bg-[#131313] rounded-[10px] ">
      <h1 className=" md:text-[20px] text-[18px] font-semibold w-full ">
        {props.title}
      </h1>
      <p className=" md:text-[16px] text-[14px] text-[#FFFFFF99] md:leading-loose leading-[30px] ">
        {props.description}
      </p>
    </div>
  );
};

const CaseStudy = (props: any) => {
  return (
    <div className=" flex flex-col gap-[40px]">
      <div className=" flex md:gap-[35px] gap-[20px] md:max-w-[100%] max-w-[380px] mx-auto flex-row md:flex-nowrap flex-wrap md:text-left text-center ">
        <Image
          className=" md:max-w-[550px] md:mx-0 h-auto object-fill "
          src={props.image}
          alt=" case study image "
        />
        <div className=" flex flex-col md:gap-[22px] gap-[16px] max-w-[500px] items-left ">
          <h1 className=" text-[22px] md:text-[30px] font-medium ">
            {props.title}
          </h1>
          <p className=" md:text-[20px] text-[14px] w-[80%] md:mx-0 mx-auto leading-[30px]  ">
            {props.description}
          </p>
          <a
            href={props.link}
            className=" px-[20px] md:mx-0 mx-auto w-fit py-[15px] bg-[#0853f5] rounded-[5px] underline "
          >
            View project
          </a>
        </div>
      </div>
      <div className="mt-50px mx-auto">
        <Image src={linebelow} alt="linebelow" />
      </div>
    </div>
  );
};
