"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Tournament.module.css";

export default function TournamentPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <section
        className={`${styles.hero} relative flex h-[20vh] items-center sm:h-[30vh] lg:h-[55vh]`}
      >
        <div className="bg-white/1 absolute inset-0 backdrop-blur-[.0938rem]"></div>
        <div className="relative z-10 mr-2 flex w-full flex-col items-end">
          <div className="text-left sm:mr-5 lg:mr-[9.375rem]">
            <h1
              className={`${styles.hero_title} font-title text-base sm:pb-2 sm:text-2xl lg:pb-4 lg:text-5xl`}
            >
              WHCFC Invitational
              <br />
              Tournament
            </h1>
            <h2
              className={`font-title ${styles.hero_sub} text-[.625rem] text-white sm:text-base lg:text-2xl`}
            >
              June 28-29 (Sat - Sun)
            </h2>
            <h2 className="font-title hero_sub text-[.625rem] text-white sm:text-base lg:text-2xl">
              &#64; UTSC “THE VALLEY"
            </h2>
          </div>
        </div>
      </section>
      <div className="font-title bg-[#333333] p-3 text-center text-xs text-white sm:text-lg lg:text-3xl">
        Don’t miss chance in this
        <span className="text-[#FBEA08]">thrilling event!</span>
      </div>
      <section>
        <h1 className="font-title bg-secondary py-2 text-center text-sm text-white sm:text-xl md:py-5 md:text-3xl lg:text-4xl">
          PROGRAM INFO
        </h1>
        <div className="my-6 text-center sm:text-lg md:text-xl lg:my-10 lg:text-2xl">
          <h2 className="my-3 font-bold">Early Bird Pricing</h2>
          <p className="my-2 lg:my-4">$500 (Team Registration)</p>
          <p className="my-2 lg:my-4">$40 (Individual Registration)</p>
          <h2 className="my-3 font-bold lg:my-5">Date</h2>
          <p className="mb-5">June 28-29, 2025 (Saturday - Sunday)</p>
          <div className="mx-auto w-[90%] border-[.0063rem] border-gray-50 border-opacity-70 md:my-8"></div>
          <p className="my-5 px-2 text-sm font-bold sm:text-lg md:text-xl lg:text-2xl">
            For more details or to register your team today
          </p>
          <a
            href="mailto:fcwhitehaven@gmail.com"
            className="transition; text-secondary border-secondary hover:bg-secondary inline-block rounded-[.9375rem] border-2 px-3 py-2 text-center text-sm font-bold hover:text-white sm:text-lg lg:my-8 lg:text-2xl"
          >
            Contact us
          </a>
        </div>
      </section>
      <section>
        <h1 className="font-title bg-secondary py-2 text-center text-sm text-white sm:text-xl md:py-5 md:text-3xl lg:text-4xl">
          ABOUT PROGRAM
        </h1>
        <div
          className={`${styles.info} relative flex flex-col items-center py-10 sm:flex-row sm:justify-center lg:justify-center`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="relative z-10 flex flex-col items-center py-4 text-white sm:pr-8 lg:pr-16">
            <img
              className="h-auto w-[9.375rem] object-cover sm:h-[12.5rem] sm:w-[12.5rem]"
              src="/images/tournament1.png"
              alt="team playing game"
            />
            <div className="flex h-[4rem] flex-col justify-center pt-4 text-center lg:text-xl">
              <p>Minimum of 4 games for every team</p>
              <p>(Maximum team is 8)</p>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center py-4 text-white">
            <img
              className="h-auto w-[9.375rem] object-cover sm:h-[12.5rem] sm:w-[12.5rem]"
              src="/images/tournament2.png"
              alt="team getting a trophy"
            />
            <div className="flex h-[4rem] flex-col justify-center pt-4 text-center lg:pt-0 lg:text-xl">
              <p>Medals and a trophy for the winning team</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="font-title bg-secondary py-2 text-center text-sm text-white sm:text-xl md:py-5 md:text-3xl lg:text-4xl">
          FURTHER DETAILS
        </h1>
        <div className="bg-gray mx-auto my-6 w-[90%] p-6 sm:text-base md:w-[80%] md:text-lg lg:w-[60%] lg:p-10 lg:text-xl">
          <h3 className="py-3 font-bold">
            Day 1: Group Stages & Quarterfinals
          </h3>
          <p className="py-2 font-bold">📅 Saturday</p>
          <p className="py-2">
            ⏳ 40-minute group stage games (20 min halves, 5 min halftime)
          </p>
          <p className="py-2">
            ⏳ 60-minute quarterfinals (30 min halves, 5 min halftime)
          </p>
          <h3 className="py-3 font-bold">Day 2: Semifinals & Finals</h3>
          <p className="py-2 font-bold">📅 Sunday (Starts at 4:00 PM)</p>
          <p className="py-2">⏳ 60-minute semifinals</p>
          <p className="py-2">⏳ 70-minute 3rd place & final matches</p>
          <div className="my-4 flex flex-col items-center md:hidden">
            <a
              href="/images/Tournament_imge(1day).png"
              target="_blank"
              type="button"
              className="text-secondary border-secondary hover:bg-secondary mb-2 me-2 mt-4 rounded-lg border px-5 py-2.5 text-center text-sm font-medium hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 sm:w-full sm:max-w-[60%] md:max-w-[40%]"
            >
              Click to check Day1 Schedule
            </a>
            <a
              href="/images/Tournament_imge(2day).png"
              target="_blank"
              type="button"
              className="text-secondary border-secondary hover:bg-secondary mb-2 me-2 mt-4 rounded-lg border px-5 py-2.5 text-center text-sm font-medium hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 sm:w-full sm:max-w-[60%] md:max-w-[40%]"
            >
              Click to check Day2 Schedule
            </a>
          </div>
          <div className="relative mx-auto hidden justify-center md:my-6 md:flex md:w-[90%]">
            <div
              ref={carouselRef}
              className="flex max-w-xl touch-pan-x snap-x snap-mandatory overflow-x-auto scroll-smooth"
            >
              {/* Carousel items */}
              <div className="w-full flex-none content-start">
                <img
                  src="/images/Tournament_imge(1day).png"
                  alt="Tournament day1"
                  className="h-300 w-full object-cover"
                />
              </div>
              <div className="w-full flex-none content-start">
                <img
                  src="/images/Tournament_imge(2day).png"
                  alt="Tournament day2"
                  className="h-300 w-full object-cover"
                />
              </div>
            </div>
            {/* Carousel controls */}
            <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-4">
              <button
                onClick={scrollLeft}
                className="carousel-control-prev bg-secondary rounded-full bg-gray-800 p-2 hover:bg-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-4">
              <button
                onClick={scrollRight}
                className="carousel-control-next bg-secondary rounded-full bg-gray-800 p-2 hover:bg-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="font-title bg-secondary py-2 text-center text-sm text-white sm:text-xl md:py-5 md:text-3xl lg:text-4xl">
          LOCATION
        </h1>
        <div className="h-[18.75rem] w-auto sm:h-[6.25rem] md:h-[12.5rem] lg:h-[18.75rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.747861823323!2d-79.1830232!3d43.7780925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4da66a74e04e3%3A0xe35c7f4a0b5263d3!2sUTSC%20Valley!5e0!3m2!1sen!2sus!4v1743638394393!5m2!1sen!2sus"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </section>
  );
}
