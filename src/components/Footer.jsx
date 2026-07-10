import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className=" flex">
        <div className=" p-10 flex flex-col justify-center w-[50%] items-center">
          <h1 className="text-6xl font-bold mb-4">Get in touch</h1>
          <div className="pt-5">
            <span className="flex items-center gap-2">
              <MdEmail />
              <a href="mailto:president@shecanfoundation.org" className="">
                president@shecanfoundation.org
              </a>
            </span>

            <span className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:+918283841830" className="">
                +91 8283841830
              </a>
            </span>

            <span className="flex items-center gap-2">
              <FaInstagram />
              <a
                href="https://instagram.com/_shecanfoundation_"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                @shecanfoundation
              </a>
            </span>

            <span className="flex items-center gap-2">
              <FaLinkedin />
              <a
                href="https://linkedin.com/company/shecanfoundation/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                linkedin_shecanfoundation
              </a>
            </span>
          </div>
        </div>

        <div className="w-[50%] flex justify-center items-center">
          <img
            className="w-[20em] h-[20em] object-cover p-4"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/Aq2NJ23MzBH2rx2j/copy-of-brown-simple-happy-birthday-poster-Yg27zMJrD9tBN5zQ.png
"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
