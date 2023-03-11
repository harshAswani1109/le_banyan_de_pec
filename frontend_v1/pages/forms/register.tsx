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
        <div className="flex items-center flex-col">
          <div className="my-10 p-12 rounded-2xl border-[#e3e3e3] border-2 border-solid">
            <h1 className="mb-10">Registration Form</h1>
            <form className="w-96 text-base">
              <div className="flex items-center justify-between">
                <div className="mb-10 h-10">
                  <div className=" ">
                    <label htmlFor="firstName">
                      <b>First Name</b>
                    </label>
                  </div>
                  <input
                    type="name"
                    className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-full mt-1.5"
                  />
                </div>
                <div className="mb-10 h-10">
                  <div className="">
                    <label htmlFor="lastName">
                      <b>Last Name</b>
                    </label>
                  </div>
                  <input
                    type="name"
                    className="h-10 rounded-md border-[#e3e3e3] border-2 border-solidS w-full mt-1.5"
                  />
                </div>
              </div>

              <div className="mb-10 h-10">
                <div className="w-full flex items-center justify-between ">
                  <label htmlFor="email">
                    <b>Email</b>
                  </label>
                </div>
                <input
                  type="email"
                  className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-full mt-1.5"
                />
              </div>

              <div className="mb-10 h-10">
                <div className="w-full flex items-center justify-between  ">
                  <label htmlFor="email">
                    <b>Mobile Number</b>
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="tel"
                    className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-[10%] mt-1.5"
                    placeholder="+91"
                    readOnly
                    disabled
                  />
                  <input
                    type="tel"
                    className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-[90%] mt-1.5"
                  />
                </div>
              </div>
              {/* <div className="mb-10 h-10">
                <div className="w-full flex items-center justify-between ">
                  <label htmlFor="password">
                    <b>Password</b>
                  </label>
                  <p>Show</p>
                </div>
                <input
                  type="password"
                  className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                />
              </div> */}

              <div className="mb-10 h-10">
                <div className=" ">
                  <label htmlFor="firstName">
                    <b>Date of Birth</b>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="date"
                    className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid  w-full mt-1.5"
                  />
                  {/* <input
                    type="name"
                    className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-full mt-1.5"
                  />
                  <input
                    type="name"
                    className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-full mt-1.5"
                  /> */}
                </div>
              </div>

              <div className="mb-10 h-10">
                <div className=" ">
                  <label htmlFor="firstName">
                    <b>Address</b>
                  </label>
                </div>
                <input
                  type="name"
                  className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-full mt-1.5"
                />
              </div>
              <div className="mb-10 h-10">
                <div className="w-full flex items-center justify-between  ">
                  <label htmlFor="gender">
                    <b>Gender</b>
                  </label>
                </div>
                <select
                  className="outline mt-2 h-8 w-full rounded-2xl border-[#e3e3e3]"
                  id="gender"
                >
                  <option selected disabled>
                    select
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Transgender</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
              <div className="">
                <a href="/forms/reg">
                  <button className=" bg-[#04aa6d] mt-7 mb-5 border-white rounded-2xl border-none decoration-white w-full h-10 text-white">
                    Next
                  </button>
                </a>
                <br />
                <p className="text-center">
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
