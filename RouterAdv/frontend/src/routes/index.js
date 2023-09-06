import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import EventRoot from "./EventRoot";
import EventDetailPage, {
  deleteEventAction,
  eventItemLoader,
} from "./EventDetail";
import EventEdit from "./EventEdit";
import HomePage from "./Home";
import EventsPage from "./Events";

import { fetchingEvents } from "./Events";
import ErrorPage from "./Error";
import NewEventPage, { newEventAction } from "./NewEvent";

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
            path: ":id",
            id: "detail",
            loader: eventItemLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EventEdit />,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: newEventAction,
          },
        ],
      },
    ],
  },
]);

export default route;
