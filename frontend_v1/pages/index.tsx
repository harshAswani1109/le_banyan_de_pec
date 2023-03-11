import Layout from "../components/layout/layout";
// import Footer from "./footer";
// import Navbar from "./navbar";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function Home() {
  return (
    <Layout>
      <main className="text-[#30449e] text-4xl">
        <div>
          <div className="flex justify-between align-items h-full w-full p-6 gap-8">
            <div className="w-9/12 h-96 border-4 flex justify-between text-3xl">
              <button className="ml-4">
                <BsFillArrowLeftCircleFill />
              </button>
              <button className="mr-4">
                <BsFillArrowRightCircleFill />
              </button>
            </div>
            <div className="w-3/12 h-96 border-black border-4 ">
              <h1 className="text-center text-[#30449e] text-xl">
                <b>Latest Events</b>
              </h1>
              <hr></hr>
              <div className="flex justify-between h-80 text-3xl">
                <button className="ml-2 ">
                  <BsFillArrowLeftCircleFill />
                </button>
                <button className="mr-2">
                  <BsFillArrowRightCircleFill />
                </button>
              </div>
            </div>
          </div>
          <div className="border-black border-4 mx-12">
            <h1 className="text-center text-[#30449e] mt-4 text-2xl">
              <b>Past Events</b>
            </h1>

            <div className="flex justify-between align-items h-full gap-6 mt-6 mx-4 mb-10">
              <button className="text-3xl ">
                <BsFillArrowLeftCircleFill />
              </button>
              <div className="w-4/12 h-60  border-4 "></div>
              <div className="w-4/12 h-60 border-black border-4 "></div>
              <div className="w-4/12 h-60  border-4 "></div>
              <button className="text-3xl">
                <BsFillArrowRightCircleFill />
              </button>
            </div>
          </div>
          <div className="text-center ">
            <button className="my-10 text-lg w-60 h-12 rounded-lg bg-red-600 text-white font-bold hover:bg-red-500">
              Newsletter Download
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
