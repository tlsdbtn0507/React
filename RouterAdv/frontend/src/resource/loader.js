import { json, defer, redirect } from "react-router-dom";
import { getAuth } from "./auth";

export async function eventItemLoader({ request, params }) {
  const { id } = params;
  const res = await fetch(`${process.env.REACT_APP_ROUTER_API}events/${id}`);

  if (!res.ok) {
    return jsonReturn("Could not Fetch Event Detail", 500);
  } else {
    return res;
  }
}

const loader = async () => {
  const response = await fetch(`${process.env.REACT_APP_ROUTER_API}events`);

  if (!response.ok) {
    return jsonReturn("Could not Fetch Events", 500);
  } else {
    const { events } = await response.json();
    return events;
    // loader로만 쓰면 response만 반환하면 되지만 defer를 쓰기 때문에 파싱한번 해줌
  }
};
//react는 라우터 변경을 감지한 후 이 loader함수가 데이터를 가져올때까지 기다렸다가 데이터가 오면
//해당 라우터의 페이지를 렌더링함

//loader 안에서 쿠키 및 로컬스토리지 접근 등 다양한 js기능을 쓸 수 있지만 리엑트 훅은 사용 할 수 없음

export const jsonReturn = (msg, code) =>
  json(
    {
      message: msg,
    },
    { status: code }
  );

export const fetchingEvents = () =>
  defer({
    events: loader(),
  });

export const authCheck = () => {
  const token = getAuth();

  if (!token) return redirect("/auth");

  return null;
};
