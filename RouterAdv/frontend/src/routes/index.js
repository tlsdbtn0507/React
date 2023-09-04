import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import EventRoot from "./EventRoot";
import EventForm from "../components/EventForm";
import EventDetailPage from "./EventDetail";
import EventEdit from "./EventEdit";
import HomePage from "./Home";
import EventsPage from "./Events";

import { fetchingEvents } from "./Events";
import ErrorPage from "./Error";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: fetchingEvents,
            // EventsPage가 렌더링 될때만 백엔드에서 데이터를 불러올 함수를 여기서 지정 및 실행 할 수 있음
          },
          {
            path: "new",
            element: <EventForm />,
          },
          {
            path: ":id",
            element: <EventDetailPage />,
          },
          {
            path: ":id/edit",
            element: <EventEdit />,
          },
        ],
      },
    ],
  },
]);

export default route;
