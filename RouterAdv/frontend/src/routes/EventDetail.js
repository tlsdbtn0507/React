import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export async function eventItemLoader({ request, params }) {
  const { id } = params;
  const res = await fetch(`${process.env.REACT_APP_ROUTER_API}events/${id}`);

  if (!res.ok) {
    return json(
      { message: "Could not Fetch Event Detail" },
      {
        status: 500,
      }
    );
  } else {
    return res;
  }
}

export const deleteEventAction = async ({ request, params }) => {
  const { id } = params;

  const res = await fetch(`${process.env.REACT_APP_ROUTER_API}events/${id}`, {
    method: request.method,
  });

  console.log(res);

  if (!res.ok) {
    return json(
      { message: "Could not Delete Event" },
      {
        status: 500,
      }
    );
  }

  return redirect("/events");
};

export default EventDetailPage;
