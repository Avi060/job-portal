import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faq from "../data/faq.json";

import Autoplay from "embla-carousel-autoplay";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient gradient-title font-extrabold font-sans text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Level Up Your Career
          <span className="flex items-center gap-2 sm:gap-6">
            with
            <img
              src="/logo.png"
              alt="hirely logo"
              className="h-14 sm:h-24 lg:h-32"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
          <Button
            size="xl"
            className=" bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm rounded-md"
          >
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button
            size="xl"
            className=" bg-gray-700 hover:bg-gray-900 text-white px-6 py-3 text-sm"
          >
            Post a Jobs
          </Button>
        </Link>
      </div>
      <div>
        <Carousel
          opts={{
            loop: true, // <-- Enables seamless looping
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({ name, id, path }) => (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <section className="lg:justify-between flex flex-col md:flex-row gap-4">
        <Card className="w-full ">
          <CardHeader>
            <CardTitle className="font-bold text-xl">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs, track applications, and more.</p>
          </CardContent>
        </Card>
        <Card className="w-full ">
          <CardHeader>
            <CardTitle className="font-bold text-xl">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post jobs, manage applications, and find the best candidates.</p>
          </CardContent>
        </Card>
      </section>
      <Accordion type="multiple" className="w-full" >
        {faq.map(({ question, answer }, index) => (
          <AccordionItem value={`item-${index+1}`} key={index}>
            <AccordionTrigger>{question}?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
