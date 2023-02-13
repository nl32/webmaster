import BookingLayout, { Destination } from "../../../components/BookingLayout";
import { nextPageWithLayout } from "../../_app";
import Destinations from "../../api/destinations.json";
import DestPage from "../../../components/DestPage";
import { useRouter } from "next/router";

const Page: nextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const destination = Destinations[Number.parseInt(id as string)];
  if (destination === undefined) {
    return <></>;
  }
  return (
    <>
      <DestPage destination={destination! as Destination} />
    </>
  );
};

Page.getLayout = BookingLayout;
export default Page;
