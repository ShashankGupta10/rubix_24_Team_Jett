const Price = () => {
  const plan = {
    name: "Basic plan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 32,
    isMostPop: true,
    features: [
      "Curabitur faucibus",
      "Curabitur faucibus",
      "Curabitur faucibus",
      "Curabitur faucibus",
      "Curabitur faucibus",
      "Curabitur faucibus",
      "Curabitur faucibus",
      "Curabitur faucibus",
    ],
  };

  const features = [
    {
      name: "Scalable",
      desc: "Easily scale your business with our flexible plans. Whether you're a small startup or a large enterprise, our platform adapts to your needs. No limits, just growth!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
      ),
    },
    {
      name: "Flexible",
      desc: "Choose the plan that fits your unique requirements. Our flexible options allow you to customize your subscription, ensuring you get exactly what you need for your business.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
    },
    {
      name: "Smooth",
      desc: "Experience a seamless and user-friendly interface. Our platform is designed for smooth navigation and hassle-free interactions, providing you with an exceptional user experience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      ),
    },
    {
      name: "Secure",
      desc: "Rest easy knowing your data is secure with us. We prioritize the security of your information, employing state-of-the-art encryption and security measures to safeguard your business.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-14">
      <div className="max-w-screen-xl mx-auto text-gray-600 md:px-8 flex gap-10">
        <div>
          <div className="relative max-w-xl mt-10 space-y-3 px-4 md:px-0">
            <h3 className="text-black font-semibold">Pricing</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Pay as you grow
            </p>
            <div className="max-w-xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                efficitur consequat nunc.
              </p>
            </div>
          </div>

          <div className="mt-16 justify-between gap-8 md:flex">
            <ul className="flex-1 max-w-md space-y-10 px-4 md:px-0">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-3">
                  <div className="flex-none w-12 h-12 rounded-full bg-indigo-50 text-black flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-800 font-medium">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 mt-2 md:text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col mt-6 md:max-w-xl md:rounded-xl md:border-x-none md:shadow-lg md:mt-0">
          <div className="p-4 md:p-8">
            <div className="justify-between flex">
              <div className="max-w-xs">
                <span className="text-2xl text-gray-800 font-semibold sm:text-3xl">
                  {plan.name}
                </span>
                <p className="mt-3 sm:text-sm">{plan.desc}</p>
              </div>
              <div className="flex-none text-gray-800 text-2xl font-semibold sm:text-3xl">
                ${plan.price}{" "}
                <span className="text-xl text-gray-600 font-normal">/mo</span>
              </div>
            </div>
            <button className="mt-4 px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-black hover:bg-gray-800 active:bg-gray-700">
              Get Started
            </button>
          </div>
          <ul className="p-4 space-y-3 sm:grid sm:grid-cols-2 md:block md:p-8 lg:grid">
            <div className="pb-2 col-span-2 text-gray-800 font-medium">
              <p>Features</p>
            </div>
            {plan.features.map((featureItem, idx) => (
              <li key={idx} className="flex items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {featureItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Price;
