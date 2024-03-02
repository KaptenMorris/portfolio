import React from "react";
import "./testimonails.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Swow",
    review:
      "Marius' portfolio is truly impressive! The attention to detail in design and the seamless user experience showcase his skill as a developer. I enjoyed exploring his projects, and the live demos added a dynamic touch. Excellent work!",
  },

  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Marius has an exceptional portfolio that caught my eye. His projects reflect creativity and innovation. The clean code and well-organized layout demonstrate his proficiency in web development. I highly recommend checking out his work!",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Impressive portfolio! Marius showcases a diverse set of projects, demonstrating versatility in both design and functionality. The attention to responsive design is commendable. It's clear that Marius is passionate about creating engaging web experiences.",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrowm",
    review:
      "Marius' portfolio is a testament to his commitment to excellence. The projects displayed reflect a deep understanding of modern web development technologies. The interactive elements and user-friendly interface make it an enjoyable exploration. Great job!",
  },
];

function Testimonails() {
  return (
    <section id="testimonails">
      <h5>Review from clients</h5>
      <h2>Testimonails</h2>

      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="container testimonails__container mySwiper"
        spaceBetween={40}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonails;
