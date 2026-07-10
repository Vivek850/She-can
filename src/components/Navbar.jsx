import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 50px threshold for scrolling
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed navbar  w-full  ${scrolled ? "backdrop-blur bg-black/30 shadow-md" : "bg-transparent"} z-10`}
      >
        <div className="navbar-start flex items-center justify-between  w-full  mt-2 mb-2">
          <div className="navbar-start  w-[20%]">
            <img
              class="block-header-logo__image w-[40%] justify-self-end"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg"
              alt="She Can Foundation | GOVT. REG. NGO logo"
              data-v-2fe39434=""
              data-qa="builder-siteheader-img-logo"
            ></img>
          </div>
          <div className="dropdown text-[20px] ">
            <ul className="flex gap-10 mr-20 text-white">
              <li>
                <a href="/" className="hover:text-red-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/Ourjourney" className="hover:text-red-400">
                  Our Journey
                </a>
              </li>
              <li>
                <a href="/OurRecognition" className="hover:text-red-400">
                  Our Recognition
                </a>
              </li>
              <li>
                <a href="/SupportUs" className="hover:text-red-400">
                  Support Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
