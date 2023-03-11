import Image from "next/image";
import Layout from "../components/layout/layout";
import image from "../public/images/environment.jpg";
import image1 from "../public/images/education.jpg";
import image2 from "../public/images/ng.jpg";
import image3 from "../public/images/we.jpg";
import image5 from "../public/images/ng.jpg";
import image6 from "../public/images/we.jpg";
export default function Objective() {
  return (
    <Layout>
      <main className="text-[#30449e] text-4xl ">
        <h1 className="h-20 p-4 text-[#04aa6d] bg-black">
          <a
            href="https://lebanyandepec.org/index.php?r=site%2Fhome"
            className="ml-32"
          >
            <b>Objective Le banyan de pec!</b>
          </a>
        </h1>
        <div className="my-10 ">
          <div>
            <h1 className="text-center  text-[#04aa6d]">Education</h1>
            <div className="flex justify-center items-center flex-col text-2xl">
              <div className="flex">
                <div className="w-1/2 pb-2 pt-8 flex justify-center items-center">
                  <Image src={image1} height="100" width="100" alt="image" />
                </div>
                <div className="w-1/2 pb-2 pt-8">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illum rem inventore cumque modi eos, ducimus vitae et illo,
                    debitis quam odit officia similique adipisci. Ipsam rerum
                    unde odio animi nemo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci rerum iusto consequuntur sed consectetur, ipsam
                    exercitationem! Ipsum quod officia iusto ducimus sed, fugit
                    perferendis velit optio. Amet neque modi velit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center mb-10 text-[#04aa6d]">Environment</h1>
            <div className="flex">
              <div className="w-1/2 flex justify-center items-center text-2xl">
                <p className="pt-15 pb-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum rem inventore cumque modi eos, ducimus vitae et illo,
                  debitis quam odit officia similique adipisci. Ipsum rerum unde
                  odio animi nemo.
                </p>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <Image src={image} height="100" width="100" alt="image" />
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center text-[#04aa6d]">Welfare</h1>
            <div className="flex justify-center items-center flex-col text-2xl">
              <div className="flex">
                <div className="w-1/2 pb-2 pt-8 flex justify-center items-center">
                  <Image src={image5} height="100" width="100" alt="image" />
                </div>
                <div className="w-1/2 pb-2 pt-8">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illum rem inventore cumque modi eos, ducimus vitae et illo,
                    debitis quam odit officia similique adipisci. Ipsam rerum
                    unde odio animi nemo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci rerum iusto consequuntur sed consectetur, ipsam
                    exercitationem! Ipsum quod officia iusto ducimus sed, fugit
                    perferendis velit optio. Amet neque modi velit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center mb-10 text-[#04aa6d]">
              Women Empowerment
            </h1>
            <div className="flex">
              <div className="w-1/2 flex justify-center items-center text-2xl">
                <p className="pt-15 pb-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum rem inventore cumque modi eos, ducimus vitae et illo,
                  debitis quam odit officia similique adipisci. Ipsum rerum unde
                  odio animi nemo.
                </p>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <Image src={image3} height="100" width="100" alt="image" />
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center text-[#04aa6d]">Nature Gardening</h1>
            <div className="flex justify-center items-center flex-col text-2xl">
              <div className="flex">
                <div className="w-1/2 pb-2 pt-8 flex justify-center items-center">
                  <Image src={image2} height="100" width="100" alt="image" />
                </div>
                <div className="w-1/2 pb-2 pt-8">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illum rem inventore cumque modi eos, ducimus vitae et illo,
                    debitis quam odit officia similique adipisci. Ipsam rerum
                    unde odio animi nemo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci rerum iusto consequuntur sed consectetur, ipsam
                    exercitationem! Ipsum quod officia iusto ducimus sed, fugit
                    perferendis velit optio. Amet neque modi velit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center mb-10 text-[#04aa6d]">
              Youth Leadership / Young Women Leadership
            </h1>
            <div className="flex">
              <div className="w-1/2 flex justify-center items-center text-2xl">
                <p className="pt-15 pb-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum rem inventore cumque modi eos, ducimus vitae et illo,
                  debitis quam odit officia similique adipisci. Ipsum rerum unde
                  odio animi nemo.
                </p>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <Image src={image6} height="100" width="100" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
