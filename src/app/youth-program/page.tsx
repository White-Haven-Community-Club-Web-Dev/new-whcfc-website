"use client";
import { useEffect, useState } from "react";
import styles from "./YouthProgram.module.css";

export default function YouthProgramPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    let dest = new Date("March 19, 2025 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = dest - now;

      // if no time, set 00:00:00:00
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : `${days}`,
        hours: hours < 10 ? `0${hours}` : `${hours}`,
        minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
        seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
      });
    }, 1000);

    // Clear intervals or timeouts when users leaves the page
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <section
        className={`${styles.hero} flex h-[30vh] items-center md:h-[55vh] lg:h-[55vh]`}
      >
        <div className="sm:w-[80%] sm:pl-[3.5rem] md:w-[70%] md:pl-[3rem] lg:w-[55%] lg:pl-[8rem]">
          <h1 className={styles.title_primary}>
            WHCFC INDOOR
            <br />
            FOOTBALL PROGRAM
          </h1>
        </div>
      </section>
      <section className={`${styles.countdown} relative py-12`}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
          <div className="sm:w-[70%] md:w-[60%] md:pt-4 lg:w-[45%] lg:pt-4">
            <h2 className="font-roboto text-2xl leading-relaxed">
              Looking to stay fit, have fun, and sharpen your football skills
              this winter? The Subsidized Winter Futsal Program is perfect for
              players of all levels!
            </h2>
          </div>

          <h2 className="mt-6 text-xl">
            Join our program by
            <span className="font-bold">March 18th, 2025</span>
          </h2>

          {/* <!-- Countdown Timer --> */}
          <div className="mt-6 flex w-full items-center justify-center gap-1.5">
            <div className="timer">
              <div className="bg-customGreen flex aspect-square min-w-[96px] flex-col items-center justify-center gap-1 rounded-xl px-3 py-3">
                <h3 className="countdown-element days font-manrope text-center text-2xl font-semibold text-white">
                  {timeLeft.days}
                </h3>
                <p className="font-manrope mt-1 w-full text-center text-lg font-normal text-white">
                  Days
                </p>
              </div>
            </div>

            <h3 className="font-manrope text-2xl font-semibold text-white">
              :
            </h3>

            <div className="timer">
              <div className="bg-customGreen flex aspect-square min-w-[96px] flex-col items-center justify-center gap-1 rounded-xl px-3 py-3">
                <h3 className="countdown-element hours font-manrope text-center text-2xl font-semibold text-white">
                  {timeLeft.hours}
                </h3>
                <p className="font-manrope mt-1 w-full text-center text-lg font-normal text-white">
                  Hours
                </p>
              </div>
            </div>

            <h3 className="font-manrope text-2xl font-semibold text-white">
              :
            </h3>

            <div className="timer">
              <div className="bg-customGreen flex aspect-square min-w-[96px] flex-col items-center justify-center gap-1 rounded-xl px-3 py-3">
                <h3 className="countdown-element minutes font-manrope text-center text-2xl font-semibold text-white">
                  {timeLeft.minutes}
                </h3>
                <p className="font-manrope mt-1 w-full text-center text-lg font-normal text-white">
                  Minutes
                </p>
              </div>
            </div>

            <h3 className="font-manrope text-2xl font-semibold text-white">
              :
            </h3>

            <div className="timer">
              <div className="bg-customGreen flex aspect-square min-w-[96px] flex-col items-center justify-center gap-1 rounded-xl px-3 py-3">
                <h3 className="countdown-element seconds font-manrope text-center text-2xl font-semibold text-white">
                  {timeLeft.seconds}
                </h3>
                <p className="font-manrope mt-1 w-full text-center text-lg font-normal text-white">
                  Seconds
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="flex items-center justify-center pt-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfab8Y8zkB_wqjU-Af4aO6ZdY3M7wWWnpjbl8ItX4tK2nlLzw/viewform"
              className={`${styles.button} border-customGreen hover:bg-customGreen bg-white text-black`}
              target="_blank"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </section>

      <section>
        <h1 className={`${styles.title_sub} bg-secondary py-5 text-center`}>
          PROGRAM
        </h1>
        <div className="py-12 md:flex md:items-center md:justify-center lg:flex lg:items-center lg:justify-center">
          <div className="relative md:right-9 lg:right-5">
            <div
              className={`${styles.pg_boy} flex h-[250px] w-[250px] items-center justify-center md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]`}
            >
              <img
                src="/images//test (2).png"
                alt="young boy playing soccer"
                className="h-[85%] w-[85%] object-contain"
              />
            </div>
          </div>
          <div className="bg-gray py-6 text-center text-black sm:mt-8 md:mr-10 md:px-5 lg:px-10">
            <h3 className="pb-4 text-xl font-bold">Youth Session (Under 18)</h3>
            <ul className="lg:mb-6">
              <li>
                <span className="font-bold">
                  Dates: March 18 - April 29, 2025 (7 weeks)
                </span>
              </li>
              <li>
                <span className="font-bold">
                  Youth Full season (7 weeks) pricing
                </span>
                : $10
              </li>
              <li>
                <span className="font-bold">Per session pricing</span>: $2
              </li>
              <li>
                <span className="font-bold">Location</span>: Joseph Brant Public
                School,
                <br />
                270 Manse Rd, Scarborough, ON M1E 3V4
              </li>
            </ul>
            <div className="flex justify-center pt-4 md:pt-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfab8Y8zkB_wqjU-Af4aO6ZdY3M7wWWnpjbl8ItX4tK2nlLzw/viewform"
                className={`${styles.button} border-secondary hover:bg-secondary text-sm`}
                target="_blank"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className={`${styles.title_sub} bg-secondary py-5 text-center`}>
          GALLERY
        </h1>
        <div className="flex justify-center px-12 py-12">
          <div className="grid w-full grid-cols-2 gap-4 sm:w-[80%] md:grid-cols-3">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/pic1.jpg"
                alt="soccer practice pic1"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/pic2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/pic3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/pic4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/pic5.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/images/pic6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
