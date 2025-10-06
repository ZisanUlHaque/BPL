import "./App.css";
import NavImg from "./assets/logo.png";
import coinImg from "./assets/Currency.png";
import heroImg from "./assets/banner-main.png";

function App() {
  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="lg:flex-1">
          <a className=" text-xl">
            <img className="w-[60px] h-[60px]" src={NavImg} alt="" />
          </a>
        </div>
        <div className="text-[#131313] flex mr-8 gap-8">
          <p>Home</p>
          <p>Fixture</p>
          <p>Teams</p>
          <p>Schedules</p>
        </div>
        <div className="flex items-center">
          <button className="btn rounded-3xl">
            <span className="mr-1">0</span>
            <span className="mr-1 font-bold">Coin</span>
            <img src={coinImg} alt="" />
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto grid gap-y-5 rounded-4xl m-10 p-10 bg-gradient-to-r from-black to-emerald-950">
        <div className="flex justify-center">
          <img src={heroImg} alt="" />
        </div>
        <div className="text-center grid gap-y-5">
          <h1 className="text-4xl text-white font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-white">Beyond Boundaries Beyond Limits</p>
          <div>
            <button class="btn bg-[#E7FE29] rounded-3xl">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>

      <div className=" max-w-[1200px] mx-auto bg-gradient-to-r from-blue-100 via-white to-amber-100 rounded-3xl relative p-10 -mb-35">
        <div className="text-center grid gap-y-4">
          <h3 className="text-3xl font-bold">Subscribe to our Newsletter</h3>
          <p>Get the latest updates and news right in your inbox!</p>
          <div className="join justify-center">
            <div>
              <label className="input validator join-item rounded-xl">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  placeholder="mail@site.com"
                  required
                  className="placeholder-black text-black"
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button className="btn bg-[#031568] text-white rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#01092c] pt-40 mt-10">
        <div className="flex justify-center pb-10">
          <img src={NavImg} alt="" />
        </div>
        <div className="flex justify-between mx-10 pb-10">
          <div className="text-white max-w-[400px] grid gap-y-3">
            <h3 className="text-xl font-bold">About us</h3>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="text-white grid gap-y-4">
            <h3 className="text-xl font-bold">Links</h3>
            <ul className="list-disc">
              <li>Home</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-white grid gap-y-1">
            <h3 className="text-xl font-bold">Subscribe</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="join">
              <div>
                <label className="input validator join-item rounded-xl">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    placeholder="mail@site.com"
                    required
                    className="placeholder-black text-black"
                  />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              <button className="btn bg-[#031568] text-white rounded-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer sm:footer-horizontal footer-center bg-[#01092c] text-base-content p-4 border-3">
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by
            ZeroThree
          </p>
        </aside>
      </footer>
    </>
  );
}

export default App;
