import { Link, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation } from '@tanstack/react-query';
import { createNewEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { queryClient } from '../../App.jsx';

export default function NewEvent() {
  const navigate = useNavigate();

  const {mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    //onSuccess: useMutation이 성공했을때 실행할 함수를 설정
    onSuccess: () => {
      //queryClient.invalidateQueries : 쿼리         
      queryClient.invalidateQueries({ queryKey: ['events'] });
      navigate('/events')
    }
  })

  function handleSubmit(formData) {
    mutate({eventData:formData})
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && 'Sending'}
        {!isPending && 
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>}
      </EventForm>
      {isError &&
        <ErrorBlock title="An error occurred" message={error.info?.message || 'failed'} />}
    </Modal>
  );
}
