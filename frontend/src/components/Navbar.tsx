import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-screen mt-3 px-17">
      <Link href="/">
        <Image
          src="/practo.png"
          width={100}
          height={100}
          className="rounded-full -my-5"
          alt="logo"
        />
      </Link>
      <div>
        <input
          className="bg-white rounded-l-xl text-black px-3 w-200 h-10"
          type="text"
          placeholder="search"
        />
        <button className="bg-blue-700 text-white rounded-r-xl px-3 h-10">
          🔎
        </button>
      </div>
      <div className="flex gap-3">
        <Link href="/login">
          <button className="bg-green-500 text-white rounded-xl px-3 h-10 hover:outline-white hover:border-2 cursor-pointer">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-blue-700 text-white rounded-xl px-3 h-10 hover:outline-white hover:border-2 cursor-pointer">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
