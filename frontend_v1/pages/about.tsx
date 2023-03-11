import Layout from "../components/layout/layout";
import Image from "next/image";
import image from "../public/images/environment.jpg";

export default function About() {
  return (
    <Layout>
      <main className="text-[#30449e] text-4xl">
        <h1 className="h-20 p-4 text-[#04aa6d] bg-black">
          <a
            href="https://lebanyandepec.org/index.php?r=site%2Fhome"
            className="ml-32"
          >
            About Le banyan de pec!
          </a>
        </h1>
        <div className="flex justify-center items-center flex-col text-2xl">
          <div className="flex">
            <div className="w-1/3 my-6 h-max p-4 ml-10 text-center border-4 border-solid">
              <div className="mb-6">
                <b>Image :-</b>
              </div>
              <Image src={image} height="100" width="120" alt="image" />
            </div>
            <div className="w-2/3 my-6 mx-10 p-4  border-4 border-black border-solid">
              <p>
                <div className="mb-6">
                  <b>Content :-</b>
                </div>
                elit. Illum rem inventore cumque modi eos, ducimus vitae et
                illo, debitis quam odit officia similique adipisci. Ipsam rerum
                unde odio animi nemo. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Adipisci rerum iusto consequuntur sed
                consectetur, ipsam exercitationem! Ipsum quod officia iusto
                ducimus sed, fugit perferendis velit optio. Amet neque modi
                velit. elit. Illum rem inventore cumque modi eos, ducimus vitae
                et illo, debitis quam odit officia similique adipisci. Ipsam
                rerum unde odio animi nemo. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Adipisci rerum iusto consequuntur
                sed consectetur, ipsam exercitationem! Ipsum quod officia iusto
                ducimus sed, fugit perferendis velit optio. Amet neque modi
                velit. elit. Illum rem inventore cumque modi eos, ducimus vitae
                et illo, debitis quam odit officia similique adipisci. Ipsam
                rerum unde odio animi nemo. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Adipisci rerum iusto consequuntur
                sed consectetur, ipsam exercitationem! Ipsum quod officia iusto
                ducimus sed, fugit perferendis velit optio. Amet neque modi
                velit.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
