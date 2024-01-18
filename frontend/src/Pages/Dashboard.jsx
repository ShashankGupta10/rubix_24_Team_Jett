/* eslint-disable react/no-unknown-property */
// import React from "react";
import one from "./../assets/1.png";
const Dashboard = () => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <a className="flex items-center gap-2 font-semibold" href="#">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                <path d="M12 3v6"></path>
              </svg> */}
              <span className="">MentorHub</span>
            </a>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:textAccent-foreground ml-auto h-8 w-8">
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
                className="h-4 w-4"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
              <span className="sr-only">Toggle notifications</span>
            </button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <a
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                href="#"
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
                  className="h-4 w-4"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </a>

              <a
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 "
                href="#"
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
                  className="h-4 w-4"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Customers
              </a>

              <a
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 "
                href="#"
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
                  className="h-4 w-4"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
                Analytics
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 ">
          <a className="lg:hidden" href="#">
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
              className="h-6 w-6"
            >
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
              <path d="M12 3v6"></path>
            </svg>
            <span className="sr-only">Home</span>
          </a>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
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
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 "
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:textAccent-foreground rounded-full border border-gray-200 w-8 h-8 "
            type="button"
            id="radix-:r2n:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <img
              src={one}
              width="32"
              height="32"
              className="rounded-full"
              alt="Avatar"
              style={{ aspectRatio: "32 / 32", objectFit: "cover" }}
            />
            <span className="sr-only">Toggle user menu</span>
          </button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:textAccent-foreground h-10 w-10">
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
                className="h-4 w-4"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              <span className="sr-only">Back</span>
            </button>
            <h1 className="font-semibold text-lg md:text-xl">
              Mentor Dashboard
            </h1>
            <div className="ml-auto flex items-center gap-2">
              <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:textAccent-foreground h-10 px-4 py-2 hidden sm:flex">
                Today
              </button>
              <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:textAccent-foreground h-10 px-4 py-2 hidden md:flex">
                This Month
              </button>
              <button
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:textAccent-foreground h-10 px-4 py-2 w-[280px] justify-start text-left font-normal"
                id="date"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r2p:"
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
                  className="mr-2 h-4 w-4"
                >
                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                  <path d="M16 2v4"></path>
                  <path d="M8 2v4"></path>
                  <path d="M3 10h5"></path>
                  <path d="M17.5 17.5 16 16.25V14"></path>
                  <path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"></path>
                </svg>
                June 01, 2023 - June 30, 2023
              </button>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <p className="text-sm text-muted-foreground">Total Mentees</p>
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    120
                  </h3>
                </div>
                <div className="p-6">
                  <div className="aspect-[4/3]">
                    <div style={{ width: "100%", height: "100%" }}>
                      <div style={{ position: "relative" }}>
                        <img src={one} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <p className="text-sm text-muted-foreground">Sessions</p>
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    345
                  </h3>
                </div>
                <div className="p-6">
                  <div className="aspect-[4/3]">
                    <div style={{ width: "100%", height: "100%" }}>
                      <div style={{ position: "relative" }}>
                        <img src={one} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <p className="text-sm text-muted-foreground">
                    Returning Mentees
                  </p>
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    33.5%
                  </h3>
                </div>
                <div className="p-6">
                  <div className="aspect-[4/3]">
                    <div style={{ width: "100%", height: "100%" }}>
                      <div style={{ position: "relative" }}>
                        <img src={one} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <p className="text-sm text-muted-foreground">
                    Mentee Details
                  </p>
                </div>
                <div className="p-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                          Photo
                        </th>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                          Name
                        </th>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                          Email
                        </th>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                          Sessions Attended
                        </th>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                          Last Session
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-4 px-6 border-b border-grey-light">
                          <img
                            src={one}
                            width="50"
                            height="50"
                            className="rounded-full"
                            alt="John Doe"
                            style={{
                              aspectRatio: "50 / 50",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          John Doe
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          john@example.com
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          10
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          June 30, 2023
                        </td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-4 px-6 border-b border-grey-light">
                          <img
                            src={one}
                            width="50"
                            height="50"
                            className="rounded-full"
                            alt="Jane Doe"
                            style={{
                              aspectRatio: "50 / 50",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          Jane Doe
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          jane@example.com
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          8
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          June 28, 2023
                        </td>
                      </tr>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-4 px-6 border-b border-grey-light">
                          <img
                            src={one}
                            width="50"
                            height="50"
                            className="rounded-full"
                            alt="Steve Smith"
                            style={{
                              aspectRatio: "50 / 50",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          Steve Smith
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          steve@example.com
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          12
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          June 30, 2023
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
