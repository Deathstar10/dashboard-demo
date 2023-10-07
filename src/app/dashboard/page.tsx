import { Input } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <body className="grid grid-cols-[200px_1fr] h-screen">
      <header className="bg-primary text-white">
        <h1 className="text-xl font-bold">Commercehq</h1>
        <nav>
          <li className="hover:bg-white rounded cursor-pointer list-none hover:text-black mx-2">
            Dashboard
          </li>
          <li className="hover:bg-white rounded cursor-pointer list-none hover:text-black mx-2">
            Users
          </li>
        </nav>
      </header>
      <main className="px-4">
        <Input className="w-1/2" />
        <h2>Growing Superhuman rate</h2>
        {/* <Card /> */}
        <div className="flex justify-evenly gap-2 flex-wrap">
          <div className="grid rounded-xl bg-card-background w-32 h-40 px-4">
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
          <div className="grid rounded-xl bg-card-background w-32 h-40 px-4">
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
          <div className="grid rounded-xl bg-card-background w-32 h-40 px-4">
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
          <div className="grid rounded-xl bg-card-background w-32 h-40 px-4">
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
          <div className="bg-primary">
            <p>
              Get more out of
              <br /> Commercehq
            </p>
            <button className="rounded text-white">Upgrade</button>
          </div>
        </div>
      </main>
    </body>
  );
}
