import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export const EVENTS = [
  {
    id: "1",
    image: "1",
    title: "1",
    date: "1",
  },
  {
    id: "2",
    image: "2",
    title: "2",
    date: "2",
  },
];

const EventRoot = () => {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EventRoot;
