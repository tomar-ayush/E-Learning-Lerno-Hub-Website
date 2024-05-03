import React from "react";
import ReviewCard from "../layout/ReviewCard";
import Heading from "../layout/Heading";
import img1 from "../assets/images/pic1.png";
import img2 from "../assets/images/pic2.png";
import img3 from "../assets/images/pic3.png";
import img4 from "../assets/images/pic3.png";
import img5 from "../assets/images/pic3.png";
import img6 from "../assets/images/pic3.png";

const Reviews = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5 h-screen mt-[-6vh]">
      <Heading title1="Our" title2="Reviews" />
      <div className="flex flex-col md:flex-row gap-7 mt-8">
        <ReviewCard img={img1} />
        <ReviewCard img={img2} />
        <ReviewCard img={img3} />
      </div>
      <div className="flex flex-col md:flex-row gap-7 mt-8">
        <ReviewCard img={img4} />
        <ReviewCard img={img5} />
        <ReviewCard img={img6} />
      </div>
    </div>
  );
};

export default Reviews;
