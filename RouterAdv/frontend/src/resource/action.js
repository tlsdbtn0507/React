import { redirect } from "react-router-dom";
import { jsonReturn } from "./loader";
import { getAuth } from "./auth";

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
        Authorization: "Bearer " + getAuth(),
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

export const authAction = async ({ request }) => {
  const param = new URL(request.url).searchParams;

  const mode = param.get("mode") || "login";

  if (mode !== "login" && mode !== "signup")
    return jsonReturn("Unsupported Mode", 422);

  const data = await request.formData();

  const authForm = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const res = await fetch(`${process.env.REACT_APP_ROUTER_API}${mode}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authForm),
  });

  if (res.status === 422 || res.status === 401) return res;

  if (!res.ok)
    return jsonReturn("Something got Wrong, Please try another", 500);

  const { token } = await res.json();

  localStorage.setItem("token", token);

  const expir = new Date();
  expir.setHours(expir.getHours() + 1);
  localStorage.setItem("expiration", expir.toISOString());

  return redirect("/");
};

export const deleteEventAction = async ({ request, params }) => {
  const { id } = params;

  const res = await fetch(`${process.env.REACT_APP_ROUTER_API}events/${id}`, {
    method: request.method,
    headers: { Authorization: "Bearer " + getAuth() },
  });

  if (!res.ok) {
    return jsonReturn("Could not Delete Event", 500);
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

export const logoutAction = () => {
  localStorage.removeItem("token");
  return redirect("/");
};
