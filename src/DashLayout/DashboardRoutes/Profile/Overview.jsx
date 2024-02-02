import Profile from "./Profile";


const Overview = () => {
    return (
        <div>
            <Profile></Profile>
            <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus est vitae tortor ullamcorper, ut vestibulum velit
                convallis. Aenean posuere risus non velit egestas suscipit.
                Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia Curae;
                Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                luctus risus rhoncus id.
              </p>

              <h3 className="font-semibold text-center mt-3 -mb-2">Find me on</h3>
              <div className="flex justify-center items-center gap-6 my-6">
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit LinkedIn"
                  href=""
                  target="_blank"
                >
                  {/* LinkedIn SVG */}
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit YouTube"
                  href=""
                  target="_blank"
                >
                  {/* YouTube SVG */}
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit Facebook"
                  href=""
                  target="_blank"
                >
                  {/* Facebook SVG */}
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit Instagram"
                  href=""
                  target="_blank"
                >
                  {/* Instagram SVG */}
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit Twitter"
                  href=""
                  target="_blank"
                >
                  {/* Twitter SVG */}
                </a>
              </div>

              <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Web Developer</span>
                  <p>
                    <span className="text-gray-700 mr-2">at ABC Company</span>
                    <span className="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
              {/* Additional experience sections go here */}
            </div>
          </div>
        </div>
    );
};

export default Overview;