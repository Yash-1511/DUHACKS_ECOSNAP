import React from "react";

const Features = () => {
  return (
    <div>
      <section className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32" id="features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              EcoSnap Features you Love.
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Because you’d probably be a little confused if we suggested you
              complicate your everyday business tasks instead.
            </p>
          </div>
          <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
            <div>
              <div className="mx-auto max-w-2xl">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <defs>
                      <linearGradient
                        id=":rs:"
                        x1="11.5"
                        y1="18"
                        x2="36"
                        y2="15.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".194" stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#6692F1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                      stroke="url(#:rs:)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-blue-600">
                  Classification
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                  Automated Visual Pollution Classification
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Our advanced AI technology, powered by deep learning with
                  TensorFlow, can automatically classify images of pollutants,
                  making it easy for users to identify and report visual
                  pollution.
                </p>
              </div>
            </div>
            <div>
              <div className="mx-auto max-w-2xl">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <path
                      opacity=".5"
                      d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                      fill="#fff"
                    ></path>
                    <path
                      opacity=".3"
                      d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-blue-600">
                  Platform
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                  Crowdsourcing Platform
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Join events in your city, attend clean-up activities, and
                  upload images of visual pollution to earn rewards. Our
                  crowdsourcing platform makes it easy for users to contribute
                  to a cleaner environment.
                </p>
              </div>
            </div>
            <div>
              <div className="mx-auto max-w-2xl">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <path
                      opacity=".5"
                      d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-blue-600">
                  Location
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                 
Location-Based Validation
                </p>
                <p className="mt-4 text-sm text-slate-600">
                Our platform uses advanced location-based validation to ensure that users can only upload images from the event they attended. This helps to prevent fake or misleading reports.
                </p>
              </div>
            </div>
            <div>
              <div className="mx-auto max-w-2xl">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <path
                      opacity=".5"
                      d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-blue-600">
                  Visualization
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                 
                Map-Based Visualization
                </p>
                <p className="mt-4 text-sm text-slate-600">
                Coming soon! Our map-based visualization feature will allow users to view and track visual pollution hotspots in real-time, making it easier to take action and promote change.
                </p>
              </div>
            </div>
            <div>
              <div className="mx-auto max-w-2xl">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <path
                      opacity=".5"
                      d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-blue-600">
                  Reward
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                 
                Real-Time Reward System
                </p>
                <p className="mt-4 text-sm text-slate-600">
                Our platform features a real-time reward system that automatically credits user accounts with rewards for contributing to our community. Rewards can be redeemed for a variety of goods and services.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:mt-20 lg:block">
            <div
              className="grid grid-cols-3 gap-x-8"
              role="tablist"
              aria-orientation="horizontal"
            >
              <div className="relative">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <defs>
                      <linearGradient
                        id=":rt:"
                        x1="11.5"
                        y1="18"
                        x2="36"
                        y2="15.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".194" stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#6692F1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                      stroke="url(#:rt:)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-indigo-700">
                  Classification
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                  Automated Visual Pollution Classification
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Our advanced AI technology, powered by deep learning with
                  TensorFlow, can automatically classify images of pollutants,
                  making it easy for users to identify and report visual
                  pollution.
                </p>
              </div>
              <div className="relative">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <path
                      opacity=".5"
                      d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                      fill="#fff"
                    ></path>
                    <path
                      opacity=".3"
                      d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-indigo-700">
                 CrowdSourcing
                
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                 CrowdSourcing Platform
                </p>
                <p className="mt-4 text-sm text-slate-600">
                Join events in your city, attend clean-up activities, and
                  upload images of visual pollution to earn rewards. Our
                  crowdsourcing platform makes it easy for users to contribute
                  to a cleaner environment.
                </p>
              </div>
              <div className="relative">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <path
                      opacity=".5"
                      d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-indigo-700">
                 Location
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                  Location-based Validation
                </p>
                <p className="mt-4 text-sm text-slate-600">
                Our platform uses advanced location-based validation to ensure that users can only upload images from the event they attended. This helps to prevent fake or misleading reports.
                </p>
              </div>
              <div className="relative mt-4">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <defs>
                      <linearGradient
                        id=":rt:"
                        x1="11.5"
                        y1="18"
                        x2="36"
                        y2="15.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".194" stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#6692F1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                      stroke="url(#:rt:)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-indigo-700">
                  Visualization
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                Map-Based Visualization
                </p>
                <p className="mt-4 text-sm text-slate-600">
                Coming soon! Our map-based visualization feature will allow users to view and track visual pollution hotspots in real-time, making it easier to take action and promote change.
                </p>
              </div>
              <div className="relative mt-4">
                <div className="w-9 rounded-lg bg-blue-600">
                  <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <defs>
                      <linearGradient
                        id=":rt:"
                        x1="11.5"
                        y1="18"
                        x2="36"
                        y2="15.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".194" stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#6692F1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                      stroke="url(#:rt:)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-sm font-medium text-indigo-700">
                  Reward
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                Real-Time Reward System
                </p>
                <p className="mt-4 text-sm text-slate-600">
                Our platform features a real-time reward system that automatically credits user accounts with rewards for contributing to our community. Rewards can be redeemed for a variety of goods and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
