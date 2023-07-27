import React from 'react';

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
              <img
                className="group-hover:opacity-80 mb-6 rounded-xl"
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDUyfHxkZXNpZ25lcnxlbnwwfHx8fDE2MzI4Njk1ODY&ampixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=600&amp;h=650&amp;fit=crop"
              />
            </a>
          </div>
          <div className="mb-12 px-4 w-full md:-mt-24 md:w-6/12">
            <a className="block group rounded-lg" href="#">
              <img
                className="group-hover:opacity-80 mb-6 rounded-xl"
                src="https://images.unsplash.com/photo-1605067063351-f81bc6041251?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDU3fHxkZXNpZ25lcnxlbnwwfHx8fDE2MzI4Njk1ODY&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=600&amp;h=650&amp;fit=crop"
              />
            </a>
          </div>
          <div className="mb-12 px-4 w-full md:w-6/12">
            <a className="block group rounded-lg" href="#">
              <img
                className="group-hover:opacity-80 mb-6 rounded-xl"
                src="https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDY3fHx3ZWJzaXRlfGVufDB8fHx8MTYzMjg3MjE0OQ&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=600&amp;h=650&amp;fit=crop"
              />
            </a>
          </div>
          <div className="mb-12 px-4 w-full md:-mt-24 md:w-6/12">
            <a className="block group rounded-lg" href="#">
              <img
                className="group-hover:opacity-80 mb-6 rounded-xl"
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDUyfHxkZXNpZ25lcnxlbnwwfHx8fDE2MzI4Njk1ODY&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=600&amp;h=650&amp;fit=crop"
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
              <img
                className="-mt-12 mb-4 rounded-lg"
                src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ampixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=400&amp;h=400&amp;fit=crop"
              />
            </div>
          </div>
          <div className="pb-4 pt-12 px-4 w-full md:w-6/12 lg:w-4/12">
            <div className="border border-primary-500 pb-6 pt-2 px-6 rounded">
              <img
                className="-mt-12 mb-4 rounded-lg"
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDd8fGNhdHxlbnwwfHx8&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=400&amp;h=400&amp;fit=crop"
              />
            </div>
          </div>
          <div className="pb-4 pt-12 px-4 w-full md:w-6/12 lg:w-4/12">
            <div className="border border-primary-500 pb-6 pt-2 px-6 rounded">
              <img
                className="-mt-12 mb-4 rounded-lg"
                src="https://images.unsplash.com/photo-1517101724602-c257fe568157?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDZ8fHBhcnJvdHxlbnwwfHx8&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=400&amp;h=400&amp;fit=crop"
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
