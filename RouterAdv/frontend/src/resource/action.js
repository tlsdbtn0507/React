import { redirect } from "react-router-dom";

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
