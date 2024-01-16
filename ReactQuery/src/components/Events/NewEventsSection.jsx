import { useQuery } from '@tanstack/react-query'
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js';

export default function NewEventsSection() {

  const { data, isError , isPending , error /* = errorMsg */ } = useQuery({
    queryKey:['events',{max:3}], //queryKey는 겟요청으로 얻은 데이터에 고유 키값을 줘서 일시적으로 캐싱함 
    queryFn: ({signal,queryKey}) => fetchEvents({signal,...queryKey[1]}),
    staleTime: 10000,
    //얼마 후에 'events'의 데이터를 stale상태로 두게 할지 설정
    //stale상태 이후 새로운 쿼리가 마운트 되거나 브라우저 화면이 포커싱되거나 등의 상황이
    //되면 useQuery로 데이터 fetch 재실행
  })

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || 'failed'} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
