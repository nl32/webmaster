import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex flex-row bg-slate-600 p-1">
      <div className="mx-2">
        <StyledLink href="/" name="Stellar Times" />
      </div>
      <div className="mx-2">
        <StyledLink href="/booking/" name="Book a Trip" />
      </div>
      <div className="ml-auto">
        <StyledLink href="/team/" name="Team" />
      </div>
      <div className="mx-2">
        <StyledLink href="/references/" name="Attributions" />
      </div>
    </div>
  );
};

const StyledLink = ({ href, name }: { href: string; name: string }) => {
  return (
    <div className="border-b border-transparent text-white transition-transform hover:border-white">
      <Link href={href}>{name}</Link>
    </div>
  );
};

export default Nav;
