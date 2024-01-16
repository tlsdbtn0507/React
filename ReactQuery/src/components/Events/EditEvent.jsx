import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { editEvent , getEventDetail } from '../../util/http.js';

export default function EditEvent() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ['events', id],
    queryFn:({signal}) => getEventDetail({signal,id}),
  })

  const { mutate } = useMutation({
    mutationFn: editEvent,
    
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
