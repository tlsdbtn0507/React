import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import EventRoot from "./EventRoot";
import EventDetailPage from "./EventDetail";
import EventEdit from "./EventEdit";
import HomePage from "./Home";
import EventsPage from "./Events";
import ErrorPage from "./Error";
import NewEventPage from "./NewEvent";
import NewsletterPage from "./Newsletter";

import {
  manipulEventAction,
  mailAction,
  deleteEventAction,
  authAction,
  logoutAction,
} from "../resource/action";
import { authCheck, eventItemLoader, fetchingEvents } from "../resource/loader";
import AuthenticationPage from "./Authentication";
import { getAuth } from "../resource/auth";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: getAuth,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: mailAction,
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
                action: manipulEventAction,
                loader: authCheck,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulEventAction,
            loader: authCheck,
          },
        ],
      },
    ],
  },
]);

export default route;
