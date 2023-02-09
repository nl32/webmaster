import { ReactElement } from "react";
import BookingLayout from "../../components/BookingLayout";
import { nextPageWithLayout } from "../_app";

const Page: nextPageWithLayout = () => {
  return (
    <div
      className="h-full w-full"
      style={{ backgroundImage: `url(galaxy.jpg)` }}
    ></div>
  );
};

Page.getLayout = BookingLayout;
export default Page;
