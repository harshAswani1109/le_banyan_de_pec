import Layout from "../../components/layout/layout";

export default function Login() {
  return (
    <Layout>
      <main className="text-[#30449e] text-4xl">
        <h1>
          <a href="https://lebanyandepec.org/index.php?r=site%2Fhome">
            Login Le banyan de pec!
          </a>
        </h1>
        <div className="flex items-center flex-col">
          <div className="mt-16 p-12 rounded-2xl border-[#e3e3e3] border-2 border-solid">
            <h1 className="mb-10">Log in</h1>
            <form className="w-96">
              <div className="mb-10 h-10">
                <div className="w-full flex items-center justify-between text-lg ">
                  <label htmlFor="email">
                    <b>Email</b>
                  </label>
                  <p>
                    Need an account?
                    <span className="text-[#04aa6d]">Sign Up</span>
                  </p>
                </div>
                <input
                  type="email"
                  className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                />
              </div>
              <div className="mb-10 h-10">
                <div className="w-full flex items-center justify-between text-lg">
                  <label htmlFor="password">
                    <b>Password</b>
                  </label>
                  <p>Show</p>
                </div>
                <input
                  type="password"
                  className="h-10 rounded-md border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                />
              </div>
              <div className="text-lg">
                <button className="text-lg bg-[#04aa6d] mt-7 mb-5 border-white rounded-2xl border-none decoration-white w-full h-10 text-white">
                  Log in
                </button>
                <br />
                <div className="text-center">Forgot password?</div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
