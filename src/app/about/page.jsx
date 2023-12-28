import React from "react";
import SlideShow from "@/components/Home/SlideShow";
import Gallery from "@/components/Home/Gallery";
import Footer from "@/components/Home/Footer";
import Image from "next/image";
import Founder from "@/components/About/Founder";
import Story from "@/components/About/Story";
import Error from "@/components/Error";
import { fetchData } from "@/lib/fetchData";

export const metadata = {
  title: "ABOUT US",
  description:
    "BREEZE & BE IS WHERE THE POETRY OF SCIENCE MEETS THE ART OF BEAUTY",
};

const About = async () => {
  const { data, error } = await fetchData("company_details");
  return (
    <>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <SlideShow slides={data?.slider} />
          <Founder data={data?.meet_the_founder} />
          <Image
            src={
              data?.our_story?.image
                ? `${process.env.NEXT_PUBLIC_IMAGES_URL}/${data?.our_story?.image}`
                : "/aboutPeople.png"
            }
            width={1080}
            height={450}
            alt="people"
            className="w-full h-auto md:h-[450px] object-cover"
          />
          <Story data={data?.our_story} />
          <Gallery
            image1={data?.footer[0]?.image1}
            image2={data?.footer[0]?.image2}
            image3={data?.footer[0]?.image3}
            image4={data?.footer[0]?.image4}
          />
          <Footer contact={data?.contact[0]} />
        </>
      )}
    </>
  );
};

export default About;
