"use client";
import { Input } from "@/components/ui/input";
import { AxisOptions, Chart } from "react-charts";
import { useMemo } from "react";
import Link from "next/link";
type DailyStars = {
  date: Date;
  stars: number;
};

type Series = {
  label: string;
  data: DailyStars[];
};

const data: Series[] = [
  {
    label: "Total Sales",
    data: [
      {
        date: new Date(2023, 1, 9),
        stars: 180,
      },
      {
        date: new Date(2023, 2, 13),
        stars: 0,
      },
      {
        date: new Date(2023, 3, 13),
        stars: 360,
      },
      {
        date: new Date(2023, 4, 13),
        stars: 250,
      },
      {
        date: new Date(2023, 5, 13),
        stars: 400,
      },
      {
        date: new Date(2023, 6, 13),
        stars: 187,
      },
      {
        date: new Date(2023, 7, 13),
        stars: 500,
      },
      {
        date: new Date(2023, 8, 13),
        stars: 190,
      },
      {
        date: new Date(2023, 9, 13),
        stars: 210,
      },
      {
        date: new Date(2023, 10, 13),
        stars: 199,
      },
      {
        date: new Date(2023, 11, 13),
        stars: 225,
      },
      {
        date: new Date(2023, 12, 13),
        stars: 220,
      },
    ],
  },
];
export default function Dashboard() {
  const primaryAxis = useMemo(
    (): AxisOptions<DailyStars> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<DailyStars>[] => [
      {
        getValue: (datum) => datum.stars,
      },
    ],
    []
  );
  return (
    <div className="grid grid-cols-[170px_3fr_1fr] h-screen">
      <header className="bg-primary flex flex-col justify-between text-white pt-4">
        <div>
          <h1 className="text-xl font-bold py-2 m-2">Commercehq</h1>
          <nav>
            <li className="hover:bg-white flex gap-2 py-2 px-2 my-2 rounded cursor-pointer list-none hover:text-black mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>
              Dashboard
            </li>
            <li className="hover:bg-white  rounded cursor-pointer list-none hover:text-black mx-2">
              <Link href={"/users"} className="flex gap-2  py-2 px-2 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                Users
              </Link>
            </li>
          </nav>
        </div>

        <div className="mb-8">
          <div className="bg-hero-pattern bg-no-repeat w-full h-32 py-2 pt-2 "></div>
          <button className="rounded bg-blue-400 font-bold py-1 px-1 mx-2">
            Upgrade the Plan
          </button>
        </div>
      </header>
      <main className="px-4 mt-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <Input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
        </div>
        <h2 className="my-4 font-bold">Growing At Superhuman rate</h2>
        <div className="flex justify-start gap-8 flex-wrap ">
          <div className="grid rounded-xl flex-grow-[2] bg-card-background w-32 h-40 px-4">
            <div className="flex justify-center items-center mt-2 rounded-xl w-12 h-12 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="w-6 h-6 stroke-primary fill-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>
            </div>

            <div>
              <p className="">Daily Visitors</p>
              <span className="font-bold">31,512</span>
              <sup className="text-green-500 font-bold pl-1">57%</sup>
            </div>
          </div>
          <div className="grid rounded-xl flex-grow-[2] bg-card-background min-w-32 h-40 px-4">
            <div className="flex justify-center items-center mt-2 rounded-xl w-12 h-12 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                className="w-6 h-6 stroke-primary fill-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
            </div>

            <div>
              <p className="">Total Orders</p>
              <span className="font-bold">31,512</span>
              <sup className="text-green-500 font-bold pl-1">57%</sup>
            </div>
          </div>
          <div className="grid rounded-xl flex-grow-[2] bg-card-background min-w-32 h-40 px-4">
            <div className="flex justify-center items-center mt-2 rounded-xl w-12 h-12 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                className="w-6 h-6 stroke-primary fill-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>

            <div>
              <p className="">Conversion Rate</p>
              <span className="font-bold">31,512</span>
              <sup className="text-green-500 font-bold pl-1">57%</sup>
            </div>
          </div>
          <div className="grid rounded-xl flex-grow-[2] bg-card-background min-w-32 h-40 px-4">
            <div className="flex justify-center items-center mt-2 rounded-xl w-12 h-12 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="w-6 h-6 stroke-primary fill-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </div>

            <div>
              <p className="">Average Orders</p>
              <span className="font-bold">31,512</span>
              <sup className="text-green-500 font-bold pl-1">57%</sup>
            </div>
          </div>
        </div>

        <div className="h-48 mb-8 mt-4">
          <p>Total Sales</p>
          <p className="font-bold text-xl">$549,735.00</p>
          <p className="text-green-500">$15,686.65</p>
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
            }}
          />
        </div>

        <h2 className="mt-32 font-bold mb-2">Top Funnels</h2>

        <div className=" bg-card-background rounded-md py-2 px-2">
          <div className="flex justify-between flex-wrap">
            <div>
              <p className="text-primary">iPhone XR 256 GB</p>
              <p>iPhone XR Black 10 orders</p>
            </div>
            <div>
              <p>Inventory</p>
              <p className="font-bold">573</p>
            </div>
            <div>
              <p>Sale</p>
              <p className="font-bold">$ 3,318.90</p>
            </div>
            <div>
              <p>Today</p>
              <p className="font-bold">$ 7,318.90</p>
            </div>
          </div>
        </div>
      </main>
      <aside>
        <div className=" grid grid-cols-[1fr_2fr] w-100 p-4 mt-28 mb-4 mr-4 rounded-2xl bg-primary h-40  bg-no-repeat">
          <div className="flex flex-col justify-between pl-4">
            <p className="text-white">
              Get more out of
              <br /> Commercehq
            </p>
            <button className="rounded text-white border py-1 px-2 border-white">
              Upgrade
            </button>
          </div>
          <div className="bg-hero-pattern bg-no-repeat py-2 pt-2 "></div>
        </div>
        <div className="bg-card-background rounded-lg p-4 my-4 mr-4">
          <div className="w-6 h-6 rounded-full bg-primary text-white">SK</div>
          <p>In the Last 30 days</p>
          <p>45.1% of your abandoned checkout recovery email were successful</p>
          <div className="flex justify-around">
            <select>
              <option value={"Last 30 days"}>Last 30 days</option>
              <option value={"Last 15 days"}>Last 15 days</option>
            </select>
            <button className="rounded text-primary bg-primary-background shadow-md py-2 px-4">
              CHECK DATA
            </button>
          </div>
        </div>
        <div className="mr-4">
          <p>Revenue by channel</p>
          <div className="flex justify-between py-2">
            <p>Direct</p>
            <p>$5,24,685</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-primary h-1.5 rounded-full"
              style={{
                width: "65.6%",
              }}
            ></div>
          </div>
          <div className="flex justify-between py-2">
            <p>Organic Search</p>
            <p>$5,24,685</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-primary h-1.5 rounded-full"
              style={{
                width: "45.2%",
              }}
            ></div>
          </div>
          <div className="flex justify-between py-2">
            <p>Referral</p>
            <p>$5,24,685</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-primary h-1.5 rounded-full"
              style={{
                width: "15.6%",
              }}
            ></div>
          </div>
          <div className="flex justify-between py-2">
            <p>Social</p>
            <p>$5,24,685</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-primary h-1.5 rounded-full"
              style={{
                width: "25.2%",
              }}
            ></div>
          </div>
        </div>
      </aside>
    </div>
  );
}
