import Image from "next/image";
import React from "react";

const Gallery = ({ image1, image2, image3, image4 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${image1}`}
        alt={"galleryImage"}
        width={500}
        height={500}
      />
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${image2}`}
        alt={"galleryImage"}
        width={500}
        height={500}
      />
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${image3}`}
        alt={"galleryImage"}
        width={500}
        height={500}
        className="hidden md:block"
      />
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${image4}`}
        alt={"galleryImage"}
        width={500}
        height={500}
        className="hidden md:block"
      />
    </div>
  );
};

export default Gallery;
