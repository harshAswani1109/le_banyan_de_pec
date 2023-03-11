import Layout from "../../components/layout/layout";

export default function Register() {
  return (
    <Layout>
      <main className="text-[#30449e] text-4xl">
        <h1 className="h-20 p-4 text-[#04aa6d] bg-black">
          <a
            href="https://lebanyandepec.org/index.php?r=site%2Fhome"
            className="ml-32"
          >
            <b>Register us Le banyan de pec!</b>
          </a>
        </h1>
        <div className="m">
          <div className="mx-48 my-10 rounded-2xl border-[#e3e3e3] border-4 border-solid">
            <h1 className="mb-10 text-center">Registration Form</h1>
            <form className="w-full text-lg">
              <div className="flex justify-between w-full">
                <div className="mx-12">
                  <div className="mb-10 h-10">
                    <div className=" ">
                      <label htmlFor="occupation">
                        <b>Occupation</b>
                      </label>
                    </div>
                    <input
                      type="text"
                      className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                    />
                  </div>

                  <div className="mb-10 h-10">
                    <div className="w-full flex items-center justify-between  ">
                      <label htmlFor="email">
                        <b>Branch</b>
                      </label>
                    </div>
                    <input
                      type="text"
                      className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                    />
                  </div>
                  <div className="mb-10 h-10">
                    <div className=" ">
                      <label htmlFor="firstName">
                        <b>Year of Passing</b>
                      </label>
                    </div>
                    <input
                      type="name"
                      className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-full mt-1.5"
                    />
                  </div>
                </div>
                <div className="mx-12">
                  <div className="mb-10 h-10">
                    <div className=" ">
                      <label htmlFor="communication">
                        <b>Communication Type</b>
                      </label>
                    </div>
                    {/* <input
                      type="text"
                      className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                    /> */}
                    <select
                      className="outline mt-2 h-8 w-2/5 rounded-2xl border-[#e3e3e3]"
                      id="communication"
                    >
                      <option selected disabled>
                        select
                      </option>
                      <option>Via Mobile</option>
                      <option>Via Mail</option>
                    </select>
                  </div>

                  <div className="mb-10 h-10 mt-12">
                    <div className="w-full flex items-center justify-between  ">
                      <label htmlFor="membership">
                        <b>Membership Type</b>
                      </label>
                    </div>
                    <div>
                      <input type="radio" className="lifeTime" />
                      <label htmlFor="lifeTime">Life time (Rs 7500.00)</label>
                    </div>
                    <div>
                      <input type="radio" className="annual" />
                      <label htmlFor="annual ">Annual (Rs 1500.00)</label>
                    </div>
                  </div>

                  <div className="mb-10 h-10 mt-14">
                    <div className="w-full flex items-center justify-between  ">
                      <label htmlFor="interest">
                        <b>Interest Towards</b>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" className="education" />
                      <label htmlFor="education">Education</label>
                    </div>
                    <div>
                      <input type="checkbox" className="we" />
                      <label htmlFor="we">Women Empowerment</label>
                    </div>
                    <div>
                      <input type="checkbox" className="wf" />
                      <label htmlFor="wf">Welfare</label>
                    </div>
                    <div>
                      <input type="checkbox" className="environment" />
                      <label htmlFor="environment">Environment</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className=" bg-[#04aa6d] mt-7 mb-5 border-white rounded-2xl border-none decoration-white w-60 h-10 text-white">
                  Sign up
                </button>
                <br />
                <p>
                  Already have an account?
                  <span className="text-[#04aa6d] "> Log in</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
