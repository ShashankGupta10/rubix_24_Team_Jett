import React from "react";
import one from '../assets/1.png'

const Search = () => {
    return (

      <section className="container px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-10 items-start">
        <div className="flex flex-col gap-4 items-start py-2">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">
              Find Your Mentor
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Search and filter from our list of expert mentors.
            </p>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search mentors..."
              type="search"
            />
          </div>
          <div className="w-full" data-orientation="vertical">
            <div
              data-state="closed"
              data-orientation="vertical"
              className="border-b"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:r3i:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:r3h:"
                  className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180 text-base"
                  data-radix-collection-item=""
                >
                  Expertise
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
                    className="h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:r3i:"
                hidden=""
                role="region"
                aria-labelledby="radix-:r3h:"
                data-orientation="vertical"
                className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                style={{
                  "--radix-accordion-content-height":
                    "var(--radix-collapsible-content-height)",
                  "--radix-accordion-content-width":
                    "var(--radix-collapsible-content-width)",
                }}
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              className="border-b"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:r3k:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:r3j:"
                  className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180 text-base"
                  data-radix-collection-item=""
                >
                  Availability
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
                    className="h-4 w-4 shrink-0 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:r3k:"
                hidden=""
                role="region"
                aria-labelledby="radix-:r3j:"
                data-orientation="vertical"
                className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                style={{
                  "--radix-accordion-content-height":
                    "var(--radix-collapsible-content-height)",
                  "--radix-accordion-content-width":
                    "var(--radix-collapsible-content-width)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Mentor List</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Browse through our list of mentors.
              </p>
            </div>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ml-auto shrink-0"
              type="button"
              id="radix-:r3l:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
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
                className="w-4 h-4 mr-2"
              >
                <path d="m21 16-4 4-4-4"></path>
                <path d="M17 20V4"></path>
                <path d="m3 8 4-4 4 4"></path>
                <path d="M7 4v16"></path>
              </svg>
              Sort by
            </button>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="relative group">
              <a className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </a>
              <img
                src={one}
                alt="Cover image"
                width="200"
                height="200"
                className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">John Doe</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Expertise: Tech
                </small>
                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Availability: Weekdays
                </p>
              </div>
            </div>
            <div className="relative group">
              <a className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </a>
              <img
                src="/placeholder.svg"
                alt="Cover image"
                width="200"
                height="200"
                className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Jane Smith</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Expertise: Business
                </small>
                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Availability: Weekends
                </p>
              </div>
            </div>
            <div className="relative group">
              <a className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </a>
              <img
                src="/placeholder.svg"
                alt="Cover image"
                width="200"
                height="200"
                className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Alex Johnson</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Expertise: Education
                </small>
                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Availability: Weekdays
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Search;