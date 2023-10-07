import Link from "next/link";
import { DataTable } from "./users-table";
import { User, columns } from "./columns";

async function fetchUsersdata(): Promise<User[]> {
  const usersdata = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json());

  return usersdata;
}
export default async function Users() {
  const data = await fetchUsersdata();
  return (
    <div className="grid grid-cols-[170px_1fr] h-screen">
      <header className="bg-primary flex flex-col justify-between text-white pt-4">
        <div>
          <h1 className="text-xl font-bold py-2 m-2">Commercehq</h1>
          <nav>
            <li className="hover:bg-white  rounded cursor-pointer list-none hover:text-black mx-2">
              <Link href={"/dashboard"} className="flex gap-2 py-2 px-2 my-2">
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
              </Link>
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
      <main>
        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
}
