import Tilt from "react-parallax-tilt";
import { Parallax } from "react-scroll-parallax";
import { Phone, Github, Linkedin, Mail, MapPin } from "lucide-react";

const AboutMe = ({ isLargeScreen }: { isLargeScreen: boolean }) => {
  return (
    <div className="container mx-auto px-6">
      <div className={`max-w-4xl mx-auto ${isLargeScreen ? "max-w-6xl" : ""}`}>
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Tilt
            tiltEnable={true}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={1000}
            className="-mt-md-20"
          >
            <Parallax speed={10}>
              <div className="flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center p-1">
                  <div className="w-full h-full bg-white dark:bg-gray-700 rounded-full overflow-hidden">
                    <img
                      src="/me1.jpg"
                      alt="Your Name"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Parallax>
          </Tilt>
          <div>
            <p className="text-md text-gray-600 dark:text-gray-300 mb-6">
              I’m a software engineer who runs on clean code, mocha coffee, and
              last-minute EA FC winners (preferably with Viní Jr. on the wing).
              By day, I’m knee-deep in components, APIs, and mysterious bugs
              that vanish the moment someone looks over my shoulder. By night?
              Probably yelling at my controller, convinced that scripting is
              real. I love building things that actually make sense, feel
              smooth, and don’t break just because someone double-clicked too
              fast.
            </p>
            <p className="text-md text-gray-600 dark:text-gray-300 mb-6">
              Big fan of Real Madrid, solid UI, and finding deals that make me
              feel like I’ve hacked the Matrix. I believe good tech doesn’t have
              to be complicated—and that great teamwork can beat great solo
              coding any day (unless it’s a weekend and I’m grinding Squad
              Battles solo). Whether it’s shipping features or chasing clean
              sheets, I bring a mix of curiosity, care, and enough caffeine to
              power a small data center.
            </p>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <MapPin
                  size={20}
                  className="text-gray-500 dark:text-gray-400 mr-2"
                />
                <span className="text-gray-600 dark:text-gray-300">
                  Subang Jaya, Selangor, Malaysia
                </span>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31871.40583573867!2d101.57335999999999!3d3.0737831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b78e588b6cd%3A0xb07b4d6e6e1659e5!2sSubang%20Jaya%2C%20Selangor!5e0!3m2!1sen!2smy!4v1718969420000!5m2!1sen!2smy"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-md"
                title="Location in Selangor, Malaysia"
              ></iframe>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/arash-shafiq-656988167"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/arashmeester"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:arashmeester@gmail.com"
                className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors dark:bg-red-600 dark:hover:bg-red-500"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+60145099221"
                className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors dark:bg-green-600 dark:hover:bg-green-500"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
