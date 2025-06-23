import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Experience = ({ isLargeScreen }: { isLargeScreen: boolean }) => {
  return (
    <div className="container mx-auto px-6">
      <div className={`max-w-4xl mx-auto ${isLargeScreen ? "max-w-6xl" : ""}`}>
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Experience
        </h2>

        {/* Desktop View - List Layout */}
        <div className="hidden md:block space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>

        {/* Mobile View - Swiper Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {experiences.map((exp, index) => (
              <SwiperSlide key={index}>
                <div className="pb-10 px-2">
                  {" "}
                  {/* Add padding to prevent shadow clipping */}
                  <ExperienceCard exp={exp} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Experience
