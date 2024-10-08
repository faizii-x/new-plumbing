// import Contimg from "../../public/png/contimg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ContactHome() {
  useEffect(() => {
    const initializeAos = () => {
      if (window.innerWidth > 768) {
        // Adjust the breakpoint as needed
        Aos.init({ duration: 2000, disable: false });
      } else {
        Aos.init({ disable: true });
      }
    };

    initializeAos();

    const handleResize = () => {
      if (window.innerWidth > 768) {
        Aos.refreshHard();
      } else {
        Aos.init({ disable: true });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section
        className=" w-full h-auto bg-cover bg-center p-8"
        style={{ backgroundImage: `url(${"/png/pipe.png"})` }}
      >
        <p className="text-[42px] font-Roboto font-bold text-white text-center">
          CONTACT US!
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 container mx-auto">
          <div className="" data-aos="zoom-in">
            <div className="flex justify-between mt-6 ">
              <div className="input-div w-[49%] h-[55px]">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="pl-2 bg-transparent border text-white placeholder-white h-[100%] w-full"
                />
              </div>
              <div className="input-div w-[49%] h-[55px]">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="pl-2 bg-transparent border text-white placeholder-white h-[100%] w-full"
                />
              </div>
            </div>
            <div className="input-div w-[100%] h-[55px] mb-4">
              <input
                type="text"
                placeholder="Your Email"
                className="pl-2 bg-transparent border text-white placeholder-white mt-4 w-full h-[100%]"
              />
            </div>
            <div className="input-div w-[100%]">
              <textarea
                className="textarea mb-3 placeholder-white text-white !rounded-none w-full "
                id="comments"
                placeholder="Your Message..."
                rows="6"
                cols="63"
              ></textarea>
            </div>
            <Link to="/">
              <button className=" w-[132px] h-[50px] border border-customBlue-light bg-white hover:bg-customBlue-light text-customBlue-light hover:text-white ">
                Sumit
              </button>
            </Link>
          </div>

          <div className="mx-auto" data-aos="zoom-in">
            <iframe
              className="mt-6 w-[100%] md:w-[500px] h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.78010378312!2d74.46691217469433!3d31.47523464937236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909eccd4c0165%3A0xe6a8099ad0ebc618!2sFairways%20Commercial%20-%20Defence%20Raya%20Golf%20and%20Country%20Club!5e0!3m2!1sen!2s!4v1726056439110!5m2!1sen!2s"
              allowFullScreen="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactHome;
