import Layout from "../../components/layout/layout";
import { MdAttachEmail } from "react-icons/md";
import { FcPhone } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";

export default function ContactUs() {
  return (
    <Layout>
      <main className="text-[#30449e] text-4xl">
        <h1 className="h-20 p-4 text-[#04aa6d] bg-black">
          <a
            href="https://lebanyandepec.org/index.php?r=site%2Fhome"
            className="ml-32"
          >
            contact us Le banyan de pec!
          </a>
        </h1>
        <div className="flex justify-center items-center flex-col text-2xl">
          <div className="flex w-full">
            <div className="w-3/5 my-10 mx-10 p-4  border-4 border-black border-solid">
              <div className="mb-6">
                <b>Contact Us Form :-</b>
                <div>
                  <hr className="w-full mt-2" />
                </div>
              </div>

              <div>
                <form className="ml-4">
                  <div className="mb-10 h-10">
                    <div className="w-full flex items-center justify-between text-lg">
                      <label htmlFor="name">
                        <b>Full Name</b>
                      </label>
                    </div>
                    <input
                      type="text"
                      className="h-10 border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                    />
                  </div>
                  <div className="mb-10 h-10">
                    <div className="w-full flex items-center justify-between text-lg ">
                      <label htmlFor="email">
                        <b>Email</b>
                      </label>
                    </div>
                    <input
                      type="email"
                      className="h-10 border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                    />
                  </div>
                  <div className="mb-10 h-10">
                    <div className="w-full flex items-center justify-between text-lg">
                      <label htmlFor="subject">
                        <b>Subject</b>
                      </label>
                    </div>
                    <input
                      type="text"
                      className="h-10 border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                    />
                  </div>
                  <div className="mb-10 h-24">
                    <div className="w-full flex items-center justify-between text-lg">
                      <label htmlFor="body">
                        <b>Body</b>
                      </label>
                    </div>
                    <input
                      type="text"
                      className="h-24 border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                    />
                  </div>
                  <div className="text-lg text-center">
                    <button className="bg-[#04aa6d] mt-5 mb-2 border-white rounded-lg border-none decoration-white w-1/5 h-10 text-white">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-2/5 my-10 p-4  mx-10 border-4 border-solid">
              <div className="mb-6">
                <b>Get in Touch :-</b>
                <div>
                  <hr className="w-full mt-2" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center gap-6 px-4">
                  <div className="text-[#04aa6d]">
                    <MdAttachEmail />
                  </div>
                  <div className="text-sm">
                    <div className="text-[#04aa6d]">
                      <b>Le Banyan de PEC</b>
                    </div>
                    <p>
                      21, Kannayar St, Kuvayarpalayam , Pondicherry -605013 ,
                      INDIA.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mr-44 px-4 my-10  ">
                  <div className="text-[#04aa6d]">
                    <FcPhone />
                  </div>
                  <div className="text-sm">
                    <div className="text-[#04aa6d]">
                      <b>Le Banyan de PEC</b>
                    </div>
                    <p>+91 9443051212, +91 9176816440</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mr-16 gap-2 px-4">
                  <div className="text-[#04aa6d]">
                    <ImLocation2 />
                  </div>
                  <div className="text-sm">
                    <div className="text-[#04aa6d]">
                      <b>Le Banyan de PEC</b>
                    </div>
                    <p>lebanyandepec@pec.edu,lebanyandepec@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
