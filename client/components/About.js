import React from "react";
import Image from "next/image";
import aboutimg from "public/images/image.jpg";
const About = () => {
  return (
    <div>
      <section className="overflow-hidden pt-20 lg:pt-[120px]" id="about">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-6 lg:w-6/12">
              <Image src={aboutimg} alt="hello" className="rounded-xx"></Image>
            </div>
            <div className="w-full px-10 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-indigo-700  mb-2 block text-lg font-display">
                  About Us
                </span>
                <h2 className="text-dark mb-8 text-3xl font-display sm:text-4xl">
                  Create Solutions With this Pollutions.
                </h2>
                <p className="text-body-color mb-8 text-base">
                Ecosnap is a crowdsourcing platform that allows users to contribute to environmental monitoring by capturing and sharing images of visual pollution. 
                </p>
                <p className="text-body-color mb-12 text-base">
                Using advanced AI technology, Ecosnap automatically classifies these images to identify sources of pollution, such as litter, graffiti, or damaged infrastructure. The platform provides real-time monitoring and visual analytics to support environmental management and inform decision-making.
                </p>
                <a
                  href=""
                  className="bg-primary inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
