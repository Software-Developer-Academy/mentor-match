import Navbar from "@/components/Navbar/";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import Image1 from "@/svgs/image1";
import RatingStars from "@/components/RatingStars";

import { BenefitsData, TestimonialsData, MentorsData } from "@/data/homepage";
import { getIcon } from "@/data/static";
const benefits = BenefitsData;
const testimonials = TestimonialsData;
const mentors = MentorsData;

const Benefits = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
      {benefits.map((benefit) => (
        <div key={benefit.title} className="flex flex-col py-3 text-left">
          <div className="md:pr-5">
            <span className="material-symbols-outlined text-primary text-[2rem]">
              {benefit.icon}
            </span>
          </div>
          <div className="">
            <div className="w-full flex justify-between">
              <h3 className="text-[1rem] leading-normal p-0 m-0 text-primary font-poppins font-medium">
                {benefit.title}
              </h3>
            </div>
            <div className="w-full flex justify-between">
              <p className="text-sm">{benefit.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.name}
          className="flex flex-col items-center justify-start text-center md:last:col-span-2 lg:last:col-span-1"
        >
          <div className="rounded-full overflow-hidden m-5">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={100}
              height={100}
              className="object-cover rounded-full border-4 border-secondary"
            />
          </div>
          <div className="w-full mb-2">
            <RatingStars id="testimonials" rating={testimonial.rating} />
          </div>
          <q className="text-sm">{testimonial.quote}</q>
          <h4 className="text-sm font-bold mt-2">- {testimonial.name} -</h4>
        </div>
      ))}
    </div>
  );
};

const Mentors = () => {
  return (
    <>
      {mentors.map((mentor) => (
        <CarouselItem
          key={mentor.name}
          className="md:basis-1/3 flex flex-col items-center justify-start md:justify-center text-center"
        >
          <div className="w-full flex md:flex-col lg:flex-row justify-between items-center bg-slate-100 rounded-sm p-5">
            <div className="w-1/2 flex flex-col items-center justify-center">
              <Image
                src={mentor.image}
                alt={mentor.name}
                width={100}
                height={100}
                className="object-cover rounded-full border-4 border-secondary"
              />
              <div className="w-full mt-2">
                <RatingStars
                  id="mentors"
                  rating={mentor.rating}
                  color="secondary"
                />
              </div>
              <div className="flex w-full mt-2 justify-center">
                {mentor.languages.map((language) => (
                  <span
                    key={language}
                    className="text-xs text-white rounded-full m-1"
                    title={language}
                  >
                    <Image
                      src={`/icons/${getIcon(language)}.svg`}
                      alt={`${language} Icon`}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </span>
                ))}
              </div>
            </div>
            <div className="w-1/2 md:w-full lg:w-1/2 flex flex-col items-center justify-center md:mt-5 lg:mt-0">
              <h3 className="text-lg font-bold">{mentor.name}</h3>
              <p className="text-sm">{mentor.title}</p>
              <p className="text-sm">{mentor.location}</p>
              {mentor.availability ? (
                <Button asChild className="mt-2 max-w-min py-2 px-4">
                  <Link href={`/profile/${mentor.id}`}>View Profile</Link>
                </Button>
              ) : (
                <p className="text-sm">Currently unavailable</p>
              )}
            </div>
          </div>
        </CarouselItem>
      ))}
    </>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-col items-center justify-between">
        <section className="container w-full md:min-h-[75dvh] lg:min-h-[100dvh] h-min flex flex-col lg:flex-row bg-cover items-center justify-center py-32 lg:py-20 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="flex lg:w-1/2 w-full flex-col text-center lg:text-left px-10">
              <h1 className="text-4xl md:text-5xl font-bold">
                Find the <span className="text-primary">right mentor</span> and
                carve your <span className="text-primary">path to success</span>
              </h1>
              <p className="text-lg mt-7">
                Our platform helps you find the perfect mentor to guide you
                through your personal and professional development journey.
              </p>
              <Button
                asChild
                className="mt-10 max-w-min py-4 px-8 mx-auto lg:mx-0"
              >
                <Link href="/signup">Join Mentor Match today</Link>
              </Button>
            </div>
            <div className="flex w-1/2 h-full flex-col items-center justify-center mt-20 lg:m-0">
              TODO: Hero animation
            </div>
          </div>
        </section>

        <section className="container flex flex-col-reverse lg:min-h-[100dvh] lg:flex-row gap-10 items-center justify-center py-10">
          <div className="flex w-1/2 flex-col items-center justify-center object-contain">
            <div className="relative w-full h-full lg:max-w-sm">
              <Image1 />
            </div>
          </div>
          <div className="flex w-full md:w-2/3 lg:w-1/2 text-center md:text-left flex-col">
            <h2 className="text-3xl md:text-4xl font-bold">
              Do you feel like you&apos;re lacking direction and motivation?
            </h2>
            <p className="text-lg my-3">
              Finding a mentor can offer numerous benefits, including:
            </p>
            <div>
              <Benefits />
            </div>
          </div>
        </section>

        <section className="container flex flex-col lg:min-h-[100dvh] items-center justify-center py-10 md:py-24 lg:py-20">
          <div className="flex w-full md:w-1/2 text-center md:text-left flex-col px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Meet some of our mentors
            </h2>
          </div>
          <div className="flex px-10 my-10 w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full flex flex-col items-center justify-start text-center"
            >
              <div className="overflow-mask w-screen md:w-full">
                <CarouselContent>
                  <Mentors />
                </CarouselContent>
              </div>
              <CarouselPrevious className="absolute top-auto -bottom-20 left-1/3 md:ml-12 lg:ml-24" />
              <CarouselNext className="absolute top-auto -bottom-20 right-1/3 md:mr-12 lg:mr-24" />
            </Carousel>
          </div>
        </section>

        <section className="container flex flex-col lg:min-h-[100dvh] items-center justify-center py-10 md:py-24 lg:py-20">
          <div className="flex w-full md:w-2/3 lg:1/2 text-center md:text-left flex-col px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              See what our users have to say
            </h2>
          </div>
          <div className="flex px-10">
            <Testimonials />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
