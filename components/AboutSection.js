import React from 'react';


const AboutSection = ({pageName ,description ,project1,projectDetail }) => {

  return (
    <>
    
    <section className="py-16">
      <div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col gap-7 py-6 pt-0">
          <h1 className=" font-bold text-3xl tracking-tight text-slate-900 dark:text-slate-100 text-center sm:text-4xl">
            {pageName} 
          </h1>
          <p className="text-lg text-center lg:text-base 2xl:text-xl">
            {description}
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-y-5 my-7 md:flex-row md:gap-x-6">
            <div className="flex flex-col rounded-global p-3 gap-y-2 border dark:border-slate-700 md:w-1/2 lg:w-1/3">
              <span className="text-primary-500 text-4xl">
                <div className="p-0.5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"></path>
                  </svg>
                </div>
              </span>
              <p className="font-extrabold text-slate-900 dark:text-slate-200">
               {project1}
              </p>
              <p className="font-thin leading-snug dark:text-gray-300">
                {projectDetail}
                </p>
            </div>
            <div className="flex flex-col gap-y-2 rounded-global p-3 border dark:border-slate-700 md:w-1/2 lg:w-1/3">
              <span className="text-4xl text-primary-500">
                <div className="p-0.5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"></path>
                  </svg>
                </div>
              </span>
              <p className="font-extrabold text-slate-900 dark:text-slate-200">
                No-Code
              </p>
              <p className="font-thin leading-snug dark:text-gray-300">
                Chai editor offers a complete No-Code experience. 
              </p>
            </div>
            <div className="flex flex-col gap-y-2 rounded-global p-3 border dark:border-slate-700 md:w-1/2 lg:w-1/3">
              <span className="text-4xl text-primary-500">
                <div className="p-0.5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 6 5 12.5-5 17.4L23 259.3s102.6 89.9 105.2 92.4c5.1 5 10 7.5 5.1 22.5-5.1 15-10.1 35.1-10.1 35.1s95.2-20.1 105.3-22.6c8.7-.9 18.3 2.5 18.3 12.5S241 512 241 512h30s-5.8-102.7-5.8-112.8 9.5-13.4 18.4-12.5c10 2.5 105.2 22.6 105.2 22.6s-5-20.1-10-35.1 0-17.5 5-22.5z"></path>
                  </svg>
                </div>
              </span>
              <p className="font-extrabold text-slate-900 dark:text-slate-200">
                Fully Customizable
              </p>
              <p className="font-thin leading-snug dark:text-gray-300">
                Get granular control over every block on your page. Style it,
                edit content to your expectation.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 my-4 md:flex-row md:gap-x-6 md:my-7">
            <div className="flex flex-col gap-y-2 rounded-global p-3 border dark:border-slate-700 md:w-1/2 lg:w-1/3">
              <span className="text-4xl text-primary-500">
                <div className="p-0.5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M318.4 16l-161 480h77.5l25.4-81.4h119.5L405 496h77.5L318.4 16zm-40.3 341.9l41.2-130.4h1.5l40.9 130.4h-83.6zM640 405l-10-31.4L462.1 358l19.4 56.5L640 405zm-462.1-47L10 373.7 0 405l158.5 9.4 19.4-56.4z"></path>
                  </svg>
                </div>
              </span>
              <p className="font-extrabold text-slate-900 dark:text-slate-200">
                Dark Mode Support
              </p>
              <p className="font-thin leading-snug dark:text-gray-300">
                All blocks have dark mode support by default. Page builder has a
                special toggle dark mode switch.
              </p>
            </div>
            <div className="flex flex-col gap-y-2 rounded-global p-3 border dark:border-slate-700 md:w-1/2 lg:w-1/3">
              <span className="text-4xl text-primary-500">
                <div className="p-0.5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
                  </svg>
                </div>
              </span>
              <p className="font-extrabold text-slate-900 dark:text-slate-200">
                Device Preview
              </p>
              <p className="font-thin leading-snug dark:text-gray-300">
                Verify the page design on multiple screen sizes right inside the
                page builder. Support screen sizes from mobile to wide screens
              </p>
            </div>
            <div className="flex flex-col gap-y-2 rounded-global p-3 border dark:border-slate-700 md:w-1/2 lg:w-1/3">
              <span className="text-4xl text-primary-500">
                <div className="p-0.5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 472 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M422.5 202.9c30.7 0 33.5 53.1-.3 53.1h-10.8v44.3h-26.6v-97.4h37.7zM472 352.6C429.9 444.5 350.4 504 248 504 111 504 0 393 0 256S111 8 248 8c97.4 0 172.8 53.7 218.2 138.4l-186 108.8L472 352.6zm-38.5 12.5l-60.3-30.7c-27.1 44.3-70.4 71.4-122.4 71.4-82.5 0-149.2-66.7-149.2-148.9 0-82.5 66.7-149.2 149.2-149.2 48.4 0 88.9 23.5 116.9 63.4l59.5-34.6c-40.7-62.6-104.7-100-179.2-100-121.2 0-219.5 98.3-219.5 219.5S126.8 475.5 248 475.5c78.6 0 146.5-42.1 185.5-110.4z"></path>
                  </svg>
                </div>
              </span>
              <p className="font-extrabold text-slate-900 dark:text-slate-200">
                Fonts & Colors
              </p>
              <p className="font-thin leading-snug dark:text-gray-300">
                Set the fonts for heading and body, and three different colour.
                Choose from hundreds of fonts and color of your choice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    <div className="container mx-auto px-4 relative">
    <div className="flex flex-wrap -mx-4 items-center">
      <div className="p-4 w-full lg:w-8/12">
        <h2 className="font-medium mb-2">A Little</h2>
        <h3 className="font-bold mb-2 text-5xl text-primary-500">About Me</h3>
        <p className="mb-6">
          Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Curabitur
          ac sagittis neque, vel egestas est.
        </p>
        <div className="-mx-2 flex flex-wrap mb-6">
          <div className="p-2 w-full sm:w-4/12">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-black font-bold mb-1 text-5xl text-primary-500 xl:text-6xl">
                10+
              </h2>
              <h3 className="text-black font-bold text-secondary-500">Years of Experience</h3>
            </div>
          </div>
          <div className="p-2 w-full sm:w-4/12">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-black font-bold mb-1 text-5xl text-primary-500 xl:text-6xl">
                200+
              </h2>
              <h3 className="text-black text-black font-bold text-secondary-500">Projects Complteted</h3>
            </div>
          </div>
          <div className="p-2 w-full sm:w-4/12">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-black font-bold mb-1 text-5xl text-primary-500 xl:text-6xl">
                12
              </h2>
              <h3 className=" text-black font-bold text-secondary-500">Industry Awards</h3>
            </div>
          </div>
        </div>
        <a
          className="text-black bg-primary-500 hover:bg-primary-400 inline-block px-6 py-2 rounded text-white"
          href="#">
          <span>Full Story</span>
        </a>
      </div>
      <div className=" p-4 w-full lg:w-4/12">
        <img
          className="rounded-xl w-full"
          src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDV8fGRlc2lnbmVyfGVufDB8fHx8MTYzMjg2OTMwMA&ampixlib=rb-1.2.1q=85&ampfm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=800&amp;h=1000&amp;fit=crop"
        />
      </div>
    </div>
  </div>
    </>
  );
};

export default AboutSection;
