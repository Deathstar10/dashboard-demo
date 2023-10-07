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
      </main>
    </body>
  );
}
