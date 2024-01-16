import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { editEvent , getEventDetail } from '../../util/http.js';
import { queryClient } from '../../App.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const Query = ['events', id];

  const { data } = useQuery({
    queryKey: Query,
    queryFn:({signal}) => getEventDetail({signal,id}),
  })

  const { mutate } = useMutation({
    mutationFn: editEvent,
    //onMutate : 서버의 응답을 받기 전에 미리 데이터(쿼리)를 변경할 수 있음
    onMutate: async (data) => {

      await queryClient.cancelQueries({ queryKey: Query });
      //=> queryToCancel를 가진 쿼리를 삭제
      queryClient.setQueryData(Query, data.event);
      //=> 위에서 삭제한 쿼리(Query)에 새로운 데이터(event)를 넣어줌

      const prevEvent = queryClient.getQueryData(Query)
      //=> onMutate가 서버와의 통신 성공여부 관계 없이 쿼리를 고치기 때문에 에러가 발생했을때를 대비해서
      //이전 쿼리 데이터를 넣고 반환해야함
      return { prevEvent }
    },

    onError: (context) => {
      //에러 발생시 위에 onMutate에서 반환한 쿼리 데이터를 바탕으로 쿼리 재 입력
      queryClient.setQueryData(Query,context.prevEvent)
    },

    onSettled: () => {
      //onSettled는 Query의 데이터를 최신화 하기 위해 강제로(onMutate가 되든 onError가 되던)
      //쿼리를 재 실행해서 서버와 프런트간의 데이터를 맞춤
      queryClient.invalidateQueries(Query)
    }
  })
  

  function handleSubmit(formData) {
    mutate({id : id, event: formData})
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }


  // let content = data &

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}
