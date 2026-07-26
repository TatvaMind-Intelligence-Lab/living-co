import { Bell, Search } from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">

      {/* Search */}

      <div className="flex w-96 items-center rounded-xl border border-gray-200 px-4">

        <Search className="mr-3 h-5 w-5 text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          className="h-12 w-full outline-none"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell className="h-6 w-6" />
        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">

            N

          </div>

          <div>

            <p className="font-medium">
              Nikhil
            </p>

            <p className="text-sm text-gray-500">
              Founder
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}