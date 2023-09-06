import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export const newEventAction = async ({ request, params }) => {
  const data = await request.formData();

  const sendDataForm = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const res = await fetch(`${process.env.REACT_APP_ROUTER_API}events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendDataForm),
  });

  if (!res.ok)
    throw new Response(
      { message: "Sending Request is failed" },
      { status: 500 }
    );

  return redirect("/events");
};
