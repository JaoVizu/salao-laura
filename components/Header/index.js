import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <React.Fragment>
      <header className="bg-purple-500 py-4">
        <div className="container mx-auto text-center">
          <Link href="/">
          <a><img src="/logo.svg" className="w-1/6 mx-auto" /></a>
          </Link>
          <h4 className="text-white mt-2 font-bold text-lg">
            Laura Cabeleireira
          </h4>
        </div>
      </header>
      <div className="bg-purple-400 py-4 shadow-xl">
        <div className="container mx-auto text-center text-white">
          <ul className="flex justify-center">
            <li className="mr-6">
              <a className="underline">Sobre</a>
            </li>
            <li>
              <Link href="/pesquisa">
                <a className="underline">Pesquisa</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
