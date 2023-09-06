import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EventEdit = () => {
  const { event } = useRouteLoaderData("detail");

  return <EventForm event={event} />;
};

export default EventEdit;
