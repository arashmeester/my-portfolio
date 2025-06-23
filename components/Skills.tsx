import { skills } from "@/data/skills";
import SkillBar from "@/components/Skillbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Skills = ({ isLargeScreen }: { isLargeScreen: boolean }) => {
  return (
    <div className="container mx-auto px-6">
      <div className={`max-w-4xl mx-auto ${isLargeScreen ? "max-w-6xl" : ""}`}>
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Skills & Technologies
        </h2>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {["frontend", "backend", "tools"].map((category) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 capitalize">
                {category === "frontend"
                  ? "Frontend"
                  : category === "backend"
                  ? "Backend"
                  : "Tools & Others"}
              </h3>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
            </div>
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
            {["frontend", "backend", "tools"].map((category) => {
              const filteredSkills = skills.filter(
                (skill) => skill.category === category
              );
              if (filteredSkills.length === 0) return null;

              return (
                <SwiperSlide key={category}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 capitalize">
                      {category === "frontend"
                        ? "Frontend"
                        : category === "backend"
                        ? "Backend"
                        : "Tools & Others"}
                    </h3>
                    {filteredSkills.map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Skills;
