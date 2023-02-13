import Nav from "../../components/nav";

const Page = () => {
  return (
    <div className="h-screen w-screen">
      <Nav />
      <div
        className="flex h-full w-full animate-bgshift flex-col justify-center align-middle motion-reduce:animate-none"
        style={{
          backgroundImage: `url("/galaxy.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-center text-4xl text-transparent sm:m-10">
          Thank you for choosing Stellar Times for you space travel needs.
          We&apos;ll contact you soon to work out payment and logistics.
        </h1>
      </div>
    </div>
  );
};

export default Page;
