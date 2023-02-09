import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex flex-row bg-slate-100 p-1">
      <div className="mx-2">
        <Link href={"/"}>Home</Link>
      </div>
      <div>
        <Link href={"/rocket"}>Our Engines</Link>
      </div>
      <div className="ml-auto">
        <Link href={"/booking/"}>Book a trip</Link>
      </div>
      <div>Login</div>
    </div>
  );
};
export default Nav;
