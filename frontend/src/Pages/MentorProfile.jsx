import one from "./../assets/1.png";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const MentorProfile = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic plan",
      price: 12,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    {
      name: "Startup",
      price: 35,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    // {
    //     name: "Enterprise",
    //     price: 60,
    //     features: [
    //         "Curabitur faucibus",
    //         "massa ut pretium maximus",
    //         "Sed posuere nisi",
    //         "Pellentesque eu nibh et neque",
    //         "Suspendisse a leo",
    //         "Praesent quis venenatis ipsum",
    //         "Duis non diam vel tortor",
    //     ],
    // },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div
        className="mb-4"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <IoMdArrowBack className="w-6 h-6" />
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-1">
          <div className="flex items-center justify-center lg:block h-48 w-full overflow-hidden rounded-lg shadow-md bg-white ">
            <img
              src={one}
              alt="Mentor's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#facc15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#facc15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#facc15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#facc15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-yellow-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <div className="mt-4 flex items-center justify-center text-sm text-gray-500 ">
            4 average rating
          </div>
          <div className="mt-6">
            <h2 className="text-center text-2xl font-bold">John Doe</h2>
            <p className="mt-2 text-center text-sm text-gray-500 ">
              Senior Software Engineer at Acme Inc.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 mt-4 text-white bg-black rounded-lg duration-150 hover:bg-gray-800 "
              onClick={() => navigate("/freeTrial")}
            >
              Free trial
            </button>
          </div>
          <div>
            <button
              className="px-4 py-2 mt-4 bg-white text-black rounded-lg duration-150 hover:bg-gray-400 "
              onClick={() => navigate("/freeTrial")}
            >
              Audio Call
            </button>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium">Contact Information</h3>
            <dl className="mt-2 space-y-2">
              <div>
                <dt className="sr-only">Email</dt>
                <dd className="flex text-sm text-gray-500 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-gray-400 "
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  john.doe@example.com
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd className="flex text-sm text-gray-500 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-gray-400 "
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +1 (555) 123-4567
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium">Areas of Expertise</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-gray-500 ">JavaScript</li>
              <li className="text-sm text-gray-500 ">React</li>
              <li className="text-sm text-gray-500 ">Node.js</li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium">Current Mentees</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-gray-500 ">Jane Smith</li>
              <li className="text-sm text-gray-500 ">Bob Johnson</li>
              <li className="text-sm text-gray-500 ">Alice Williams</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:col-span-2">
          {/* <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                                <div>
                                    <span className='text-gray-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                    </div>
                                </div>
                                <ul className='py-8 space-y-3'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-gray-600'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="flex-1 flex items-end">
                                    <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-gray-600 hover:bg-gray-500 active:bg-gray-700'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div> */}

          <div className="px-4 py-5 bg-white shadow rounded-lg ">
            <h2 className="text-xl font-bold">Bio</h2>
            <p className="mt-2 text-sm text-gray-500 ">
              🚀 About Me:
              <br /> I am a seasoned web development professional with a passion
              for helping aspiring developers navigate the exciting and
              ever-evolving world of web technologies. With over 10 years of
              hands-on experience in the field, I have had the privilege of
              working on diverse projects, ranging from dynamic web applications
              to e-commerce platforms.
              <br />
              <br /> 🌐 Expertise:
              <br /> My expertise lies in front-end and back-end development,
              where I have mastered technologies such as HTML, CSS, JavaScript,
              React.js, Node.js, and more. I am well-versed in creating
              responsive and user-friendly interfaces, as well as building
              robust server-side applications.
              <br />
              <br /> 🧑‍🏫 Mentoring Philosophy:
              <br /> I believe in fostering a supportive learning environment
              that empowers mentees to explore, experiment, and excel. My
              mentoring philosophy revolves around a hands-on approach, where we
              tackle real-world challenges together. I emphasize practical
              skills, industry best practices, and staying abreast of the latest
              trends to ensure mentees are well-prepared for the dynamic field
              of web development.
              <br />
              <br /> 🎓 Education:
              <br /> I hold a [Degree/Certification] in [Field of Study],
              complemented by continuous learning and professional development.
              I am committed to staying at the forefront of web development
              trends and sharing this knowledge with those eager to embark on or
              advance their journey in the tech industry.
            </p>
          </div>
          <div className="mt-6 px-4 py-5 bg-white shadow rounded-lg ">
            <h2 className="text-xl font-bold">Ratings &amp; Reviews</h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#facc15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#facc15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#facc15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <div className="ml-2 text-sm text-gray-500 ">Jane Smith</div>
              </div>
              <p className="mt-2 text-sm text-gray-500 ">
                John has been an amazing mentor. He's knowledgeable, patient,
                and really takes the time to explain concepts. I've learned so
                much from him!
              </p>
              <div className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#facc15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#facc15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#facc15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#facc15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#facc15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <div className="ml-2 text-sm text-gray-500 ">Bob Johnson</div>
              </div>
              <p className="mt-2 text-sm text-gray-500 ">
                John is a fantastic mentor. He's always available to answer
                questions and provide guidance. I highly recommend him!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
