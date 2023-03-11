import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { RxDotFilled } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="bg-[#232323] w-full h-80">
      <div>
        <div className="flex justify-center items-center text-2xl pt-6">
          <div className="text-white">
            <b>
              <span className="text-[#04aa6d]">Download</span> our Newsletter
            </b>
          </div>
          <div className="bg-[#04aa6d] rounded-xl border-solid text-lg p-2 text-black ml-4">
            <button>Download</button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-12 text-[#04aa6d] gap-12">
          <a href="#facebook" className="text-white">
            <FaFacebook />
          </a>
          <RxDotFilled />
          <a href="#twitter" className="text-white">
            <AiFillTwitterCircle />
          </a>
          <RxDotFilled />
          <a href="#instagram" className="text-white">
            <BsInstagram />
          </a>
          <RxDotFilled />
          <a href="#youtube" className="text-white">
            <ImYoutube />
          </a>
        </div>
        <div className="flex flex-col justify-center gap-10 items-center mt-12 w-full text-[#04aa6d]">
          <div className="flex gap-10 items-center">
            <span className="text-white">Login</span>
            <RxDotFilled />
            <span className="text-white">Dashboard</span>
            <RxDotFilled />
            <span className="text-white">Events</span>
            <RxDotFilled />
            <span className="text-white">Memberships</span>
          </div>
          <hr className="text-white/25 w-1/2 " />
        </div>
      </div>
      <div className="mt-10 text-center ">
        <span className="text-white">
          <b>
            All Rights Reserved ©{" "}
            <span className="text-[#04aa6d]">Le Banyan De PEC</span> 2023
          </b>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
