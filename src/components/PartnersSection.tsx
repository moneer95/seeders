"use client";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";

// logos imports
import circooles from "../../assets/circooles.png";
import command from "../../assets/command.png";
import layers from "../../assets/layers.png";
import catalog from "../../assets/catalog.png";
import hourglass from "../../assets/hourglass.png";
import another from "../../assets/another.png";

export default function PartnerSection() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <section className=" md:px-16 lg:px-24  my-12 w-full md:max-w-[1440px] mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h4 className="text-light font-semibold text-lg">Our Partners</h4>
        <h2 className="text-2xl md:text-4xl lg:text-[28px] xl:text-[42px] lg:leading-normal font-bold text-gray-900 leading-tight">
          Partner Institutions
        </h2>
      </div>

      {/* Carousel with Partner Logos */}
      <Carousel
        plugins={[autoplay.current]}
        height={100}
        slideSize={{ base: "50%", sm: "50%", md: "20%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        withControls={false}
        // align="center"
        slidesToScroll={1}
      >
        <Carousel.Slide>
          <div className="flex gap-2 items-center justify-center">
            <Image
              src={circooles}
              alt="Circooles Logo"
              height={30}
              width={30}
              className="mb-2"
            />
            <p className="text-gray-900 font-semibold text-sm md:text-base">
              Circooles
            </p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="flex gap-2 items-center justify-center">
            <Image
              src={command}
              alt="Command+R Logo"
              height={30}
              width={30}
              className="mb-2"
            />
            <p className="text-gray-900 font-semibold text-sm md:text-base">
              Command+R
            </p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="flex gap-2 items-center justify-center">
            <Image
              src={layers}
              alt="Layers Logo"
              height={30}
              width={30}
              className="mb-2"
            />
            <p className="text-gray-900 font-semibold text-sm md:text-base">
              Layers
            </p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="flex gap-2 items-center justify-center">
            <Image
              src={catalog}
              alt="Catalog Logo"
              height={30}
              width={30}
              className="mb-2"
            />
            <p className="text-gray-900 font-semibold text-sm md:text-base">
              Catalog
            </p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="flex gap-2 items-center justify-center">
            <Image
              src={hourglass}
              alt="Hourglass Logo"
              height={30}
              width={30}
              className="mb-2"
            />
            <p className="text-gray-900 font-semibold text-sm md:text-base">
              Hourglass
            </p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="flex gap-2 items-center justify-center">
            <Image
              src={another}
              alt="Another Logo"
              height={30}
              width={30}
              className="mb-2"
            />
            <p className="text-gray-900 font-semibold text-sm md:text-base">
              Another
            </p>
          </div>
        </Carousel.Slide>

        {/* Add more Carousel.Slide components for additional logos */}
      </Carousel>
    </section>
  );
}
