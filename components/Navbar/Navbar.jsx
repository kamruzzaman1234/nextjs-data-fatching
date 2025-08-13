"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const router = useRouter();
  const session = useSession();
  console.log(session)

  const Links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Service", path: "/service" },
    { title: "Meals", path: "/meals" },
  ];

  const handler = () => {
    router.push("/api/auth/signin");
  };

  return (
    <div className="py-4 bg-black">
      <div className="max-w-6xl w-full mx-auto">
        <div className=" flex justify-between items-center">
            <h3>Logo</h3>
               <ul className="flex justify-center items-center gap-8">
          {Links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              title={link.title}
              className="text-white"
            >
              {link.title}
            </Link>
          ))}
        </ul>

        {session.status === "authenticated" ? (
          <button onClick={handler} className="text-white border-2 border-cyan-400 px-6 py-2 rounded-lg">Login</button>
        ) : (
          <button onClick={handler} className="text-white border-2 border-cyan-400 px-6 py-2 rounded-lg">Logout</button>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
