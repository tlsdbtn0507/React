import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();
  //index에서 사용한 loader의 함수의 리턴값을 여기로 가져옴
  //추가로 여기가 아닌 EventsPage 컴포넌트에서도 useLoaderData를 쓸수 있음 하지만 loader를 정의한
  //상위 페이지(부모 라우터)에선 사용 할 수 없음

  return (
    //모든 이벤트 리스트를 가져오는데 딜레이가 있을시 가져올 리스트만 비동기화 하고 나머지 페이지는 띄우고
    //싶을때 Suspense컴포넌트로 감싸서 fallback으로 로딩중 띄울 html element를 넣어주고
    //useLoaderData를 통해 받은 events를 Await에 감싼체 resolve로 준다 그리고 Await의 내부에
    //resolve에 온 데이터를 콜백 함수를 넣어서 원하는 컴포넌트에 prop을 준 채 렌더링하면 된다
    <Suspense fallback={<p style={{ textAlign: "center" }}>'Loading..'</p>}>
      <Await resolve={events}>
        {(loaded) => <EventsList events={loaded} />}
      </Await>
    </Suspense>
  );
  // <EventsList events={events} />;
}

export default EventsPage;
