import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EventEdit = () => {
  //EventForm을 new와 같이 쓰기 때문에 Edit을 할때엔 useRouteLoaderData로
  //eventItemLoader(id가'detail'인 라우터들에게 해당 페이지의 정보를 가져온 로더)를 통해 받은 데이터를
  //EventForm에 넣어줌

  const { event } = useRouteLoaderData("detail");

  return <EventForm event={event} method={"PATCH"} />;
};

export default EventEdit;
