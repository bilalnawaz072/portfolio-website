import Image from "next/image";

export const HeroSection = ({ title ,description,descriptionDetail,buttonName }) => {

  return (
    <>
    <div className="bg-slate-900">
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="flex justify-center">
            <a
              className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md"
              href="#">
            <p className="mr-2 inline-block text-white text-sm">
              {title}
            </p>
            
              <p className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                <p className="w-fit">
                  <svg
                    className="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none">
                    
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"></path>
                  </svg>
                </p>
              </p>
            </a>
          </div>
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
             {description}
            </h1>
          </div>
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-400">
             {descriptionDetail}
            </p>
          </div>
          <div className="text-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              href="#">
              <p>{buttonName}</p>
              <p className="w-fit">
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none">
                  
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"></path>
                </svg>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          <div className="px-4 py-12 w-full xl:order-last xl:w-6/12">
            <nav className="py-2 sticky top-0 z-50">
              <div className="container mb-12 mx-auto relative">
                <nav className="flex flex-wrap items-center">
                  <a
                    className="font-bold font-serif hover:text-opacity-75 inline-flex items-center leading-none mr-4 space-x-1 text-white text-xl uppercase"
                    href="#">
                    <p>Cody Coolhair</p>
                  </a>
                  <button className="hover:bg-secondary-500 hover:text-white lg:hidden ml-auto px-3 py-2 rounded text-white">
                    <div className="block border-b-2 border-current my-1 w-6"></div>
                    <div className="block border-b-2 border-current my-1 w-6"></div>
                    <div className="block border-b-2 border-current my-1 w-6"></div>
                  </button>
                  <div className="flex-1 hidden space-y-2 w-full lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto">
                    <div className="flex flex-col ml-auto lg:flex-row">
                      <a
                        className="hover:text-gray-300 py-2 text-gray-400 lg:p-4"
                        href="#">
                        <p>About</p>
                      </a>
                      <a
                        className="hover:text-gray-300 py-2 text-gray-400 lg:p-4"
                        href="#">
                        <p>Services</p>
                      </a>
                      <a
                        className="hover:text-gray-300 py-2 text-gray-400 lg:p-4"
                        href="#">
                        <p>Projects</p>
                      </a>
                      <a
                        className="hover:text-gray-300 py-2 text-gray-400 lg:p-4"
                        href="#">
                        <p>Contact</p>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </nav>
            <h1 className="font-bold mb-2 text-4xl text-white md:leading-tight lg:text-5xl">
              Cody Coolhair, a self taught web developer well versed in Visual
              Design.
            </h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet.
              Curabitur ac sagittis neque, vel egestas est.
            </p>
            <a
              className="bg-primary-500 hover:bg-primary-400 inline-block px-6 py-2 rounded text-white"
              href="#">
              <p>Lets Talk</p>
            </a>
          </div>
          <div className="px-4 w-full xl:px-12 xl:w-6/12">
            <Image src="/imran.jpg" alt="Cody Coolhair" width={600} height={600} className="rounded-lg" />
          </div>
        </div>
      </div>
    </>
  )
}
export default HeroSection;