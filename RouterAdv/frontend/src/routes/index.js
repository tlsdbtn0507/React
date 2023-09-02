import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import EventRoot, { EVENTS } from "./EventRoot";
import EventForm from "../components/EventForm";
import EventDetailPage from "./EventDetail";
import EventsList from "../components/EventsList";
import EventEdit from "./EventEdit";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            path: "new",
            element: <EventForm />,
          },
          {
            path: "all",
            element: <EventsList events={EVENTS} />,
          },
          {
            path: ":id",
            element: <EventDetailPage />,
            children: [
              {
                path: "edit",
                element: <EventEdit />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default route;
