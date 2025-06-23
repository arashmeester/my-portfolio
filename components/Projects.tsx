import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Projects = ({ isLargeScreen }: { isLargeScreen: boolean }) => {
  return (
    <div className="container mx-auto px-6">
      <div className={`max-w-6xl mx-auto ${isLargeScreen ? "max-w-7xl" : ""}`}>
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Featured Projects
        </h2>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile View - Swiper Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="pb-10 px-2">
                  {" "}
                  {/* Add padding to prevent shadow clipping */}
                  <ProjectCard project={project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects
