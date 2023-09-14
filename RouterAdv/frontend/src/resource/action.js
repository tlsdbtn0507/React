import { redirect, json } from "react-router-dom";

export const manipulEventAction = async ({ request, params }) => {
  const data = await request.formData();

  const sendDataForm = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const paramId = params.id ? `/${params.id}` : "";

  const res = await fetch(
    `${process.env.REACT_APP_ROUTER_API}events${paramId}`,
    {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendDataForm),
    }
  );

  if (!res.ok)
    throw new Response(
      { message: "Sending Request is failed" },
      { status: 500 }
    );

  return redirect("/events");
};

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

export const mailAction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
};
