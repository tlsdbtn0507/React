import { json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();
  //index에서 사용한 loader의 함수의 리턴값을 여기로 가져옴
  //추가로 여기가 아닌 EventsPage 컴포넌트에서도 useLoaderData를 쓸수 있음 하지만 loader를 정의한
  //상위 페이지(부모 라우터)에선 사용 할 수 없음

  return <EventsList events={events} />;
}

export default EventsPage;

export async function fetchingEvents() {
  const response = await fetch(`${process.env.REACT_APP_ROUTER_API}events`);

  console.log(`${process.env.REACT_APP_ROUTER_API}events`);

  if (!response.ok) {
    return json(
      { message: "Could not Fetch Events" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
//react는 라우터 변경을 감지한 후 이 loader함수가 데이터를 가져올때까지 기다렸다가 데이터가 오면
//해당 라우터의 페이지를 렌더링함

//loader 안에서 쿠키 및 로컬스토리지 접근 등 다양한 js기능을 쓸 수 있지만 리엑트 훅은 사용 할 수 없음
