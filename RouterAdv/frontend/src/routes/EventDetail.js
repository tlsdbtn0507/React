import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;
