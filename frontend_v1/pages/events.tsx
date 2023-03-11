import Layout from "../components/layout/layout";
import Image from "next/image";
import e01 from "../public/images/e01.jpg";
import e02 from "../public/images/e02.jpg";
import e03 from "../public/images/e03.jpg";
import e04 from "../public/images/e04.jpg";
import e05 from "../public/images/e05.jpg";
import e06 from "../public/images/e06.jpg";
import e07 from "../public/images/e07.jpg";
import e08 from "../public/images/e08.jpg";
import e09 from "../public/images/e09.jpg";
import e10 from "../public/images/e10.jpg";

export default function Events() {
  return (
    <Layout>
      <main className="text-[#30449e] text-4xl">
        <h1 className="h-20 p-4 text-[#04aa6d] bg-black">
          <a
            href="https://lebanyandepec.org/index.php?r=site%2Fhome"
            className="ml-32"
          >
            Events Le banyan de pec!
          </a>
        </h1>
        <div className="w-full h-full flex justify-content items-center">
          <div className="w-2/3 h-full  ">
            <div className="flex justify-content items-center h-full gap-20 mx-20 my-10">
              <div className="border-solid border-2 border-black h-96">
                <Image src={e10} className="h-4/5" alt={"image"}></Image>
                <hr></hr>
                <div className="h-1/5 text-center text-lg mt-2">
                  <span>
                    <b>CAREER AWARENESS PROGRAMME</b>
                  </span>
                  <p>22nd April 2017</p>
                </div>
              </div>
              <div className="border-solid border-2 border-black h-96">
                <Image src={e09} className="h-4/5" alt={"image"}></Image>
                <hr></hr>
                <div className="h-1/5 text-center text-lg mt-2">
                  <span>
                    <b>WOMEN SAFETY AND PRECAUTIONS</b>
                  </span>
                  <p>14th March 2017 </p>
                </div>
              </div>
            </div>
            <div className="flex justify-content items-center h-full gap-20 mx-20 my-10">
              <div className="border-solid border-2 border-black h-96">
                <Image src={e08} className="h-4/5" alt={"image"}></Image>
                <hr></hr>
                <div className="h-1/5 text-center text-lg mt-2">
                  <span>
                    <b>BIRTHDAY CELEBRATION</b>
                  </span>
                  <p>11th March 2017</p>
                </div>
              </div>
              <div className="border-solid border-2 border-black h-96">
                <Image src={e07} className="h-4/5" alt={"image"}></Image>
                <hr></hr>
                <div className="h-1/5 text-center text-lg mt-2">
                  <span>
                    <b>WOMEN'S DAY CELEBRATION</b>
                  </span>
                  <p>10th March 2017</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/3 h-full  ">
            <div className="border-solid border-2 border-black w-4/5 h-screen ml-12 mb-24 ">
              <p className="text-center">Objective List</p>

              <div className="text-xl p-4">
                <li className="my-2">WOMEN SAFETY AND PRECAUTIONS</li>
                <li className="my-2">BIRTHDAY CELEBRATION</li>
                <li className="my-2">WOMEN'S DAY CELEBRATION</li>
                <li className="my-2">HEALTH & HYGIENE CLUB</li>
                <li className="my-2">CAP PROGRAMME(3)</li>
                <li className="my-2">CAP PROGRAMME (2)</li>
                <li className="my-2">CAP PROGRAMME (1)</li>
                <li className="my-2">CLEAN AND GREEN PEC</li>
                <li className="my-2">BIRTHDAY CELEBRATION</li>
                <li className="my-2">CAREER AWARENESS PROGRAMME</li>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-content items-center h-full gap-20 mx-20 my-10">
          <div className="border-solid border-2 border-black h-96">
            <Image src={e06} className="h-4/5" alt={"image"}></Image>
            <hr></hr>
            <div className="h-1/5 text-center text-lg mt-2">
              <span>
                <b>HEALTH & HYGIENE CLUB</b>
              </span>
              <p>16th February 2017 </p>
            </div>
          </div>
          <div className="border-solid border-2 border-black h-96">
            <Image src={e05} className="h-4/5" alt={"image"}></Image>
            <hr></hr>
            <div className="h-1/5 text-center text-lg mt-2">
              <span>
                <b>CAP PROGRAMME (3)</b>
              </span>
              <p>16th February 2017</p>
            </div>
          </div>
          <div className="border-solid border-2 border-black h-96">
            <Image src={e04} className="h-4/5" alt={"image"}></Image>
            <hr></hr>
            <div className="h-1/5 text-center text-lg mt-2">
              <span>
                <b>CAP PROGRAMME (2)</b>
              </span>
              <p>2nd February 2017 </p>
            </div>
          </div>
        </div>
        <div className="flex justify-content items-center h-full gap-20 mx-20 my-10">
          <div className="border-solid border-2 border-black h-96">
            <Image src={e03} className="h-4/5" alt={"image"}></Image>
            <hr></hr>
            <div className="h-1/5 text-center text-lg mt-2">
              <span>
                <b>CAP PROGRAMME (1)</b>
              </span>
              <p>1st February 2017</p>
            </div>
          </div>
          <div className="border-solid border-2 border-black h-96">
            <Image src={e02} className="h-4/5" alt={"image"}></Image>
            <hr></hr>
            <div className="h-1/5 text-center text-lg mt-2">
              <span>
                <b>CLEAN AND GREEN PEC</b>
              </span>
              <p>26th January 2017</p>
            </div>
          </div>
          <div className="border-solid border-2 border-black h-96">
            <Image src={e01} className="h-4/5" alt={"image"}></Image>
            <hr></hr>
            <div className="h-1/5 text-center text-lg mt-2">
              <span>
                <b>BIRTHDAY CELEBRATION</b>
              </span>
              <p>7th January 2017</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
