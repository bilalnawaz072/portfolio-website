import React from 'react';
import Image from 'next/image';
const PortfolioSection = () => {
  return (
    <>

    <section className="bg-primary-500 py-24 text-gray-300">
      <div className="container mx-auto px-4 relative">
        <div className="mb-12">
          <h2 className="font-medium mb-2 text-white">
            Some Of My Recent Projects
          </h2>
          <h3 className="font-bold text-5xl text-white">Works</h3>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-12 px-4 w-full md:w-6/12">
            <a className="block group rounded-lg" href="#">
            <Image
                className="-mt-12 mb-4 rounded-lg"
                src="/imran.jpg" alt="Cody Coolhair" width={200} height={200}
                />
            </a>
          </div>
          <div className="mb-12 px-4 w-full md:-mt-24 md:w-6/12">
            <a className="block group rounded-lg" href="#">
            <Image
                className="-mt-12 mb-4 rounded-lg"
                src="/imran.jpg" alt="Cody Coolhair" width={200} height={200}
                />
            </a>
          </div>
          <div className="mb-12 px-4 w-full md:w-6/12">
            <a className="block group rounded-lg" href="#">
            <Image
                className="-mt-12 mb-4 rounded-lg"
                src="/imran.jpg" alt="Cody Coolhair" width={200} height={200}
                />
            </a>
          </div>
          <div className="mb-12 px-4 w-full md:-mt-24 md:w-6/12">
            <a className="block group rounded-lg" href="#">
            <Image
                className="-mt-12 mb-4 rounded-lg"
                src="/imran.jpg" alt="Cody Coolhair" width={200} height={200}
                />
            </a>
          </div>
        </div>
        <a
          className="bg-white hover:bg-gray-200 inline-block px-6 py-2 rounded text-gray-900"
          href="#">
          <span>View All</span>
        </a>
      </div>
    </section>
    <section className="bg-secondary-500 py-24 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="font-medium mb-1">Few Words From My Clients</h2>
          <h3 className="font-bold text-5xl text-primary-500">Testimonials</h3>
        </div>
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="pb-4 pt-12 px-4 w-full md:w-6/12 lg:w-4/12">
            <div className="border border-primary-500 pb-6 pt-2 px-6 rounded">
              <Image
                className="-mt-12 mb-4 rounded-lg"
                src="/imran.jpg" alt="Cody Coolhair" width={200} height={200}
                />
            </div>
          </div>
          <div className="pb-4 pt-12 px-4 w-full md:w-6/12 lg:w-4/12">
            <div className="border border-primary-500 pb-6 pt-2 px-6 rounded">
            <Image
                className="-mt-12 mb-4 rounded-lg"
                src="/imran.jpg" alt="Cody Coolhair" width={200} height={200}
                />
            </div>
          </div>
          <div className="pb-4 pt-12 px-4 w-full md:w-6/12 lg:w-4/12">
            <div className="border border-primary-500 pb-6 pt-2 px-6 rounded">
            <Image
                className="-mt-12 mb-4 rounded-lg"
                src="/imran.jpg" alt="Cody Coolhair" width={200} height={200}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PortfolioSection;
