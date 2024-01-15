import { Link, Outlet, useNavigate, useNavigation, useParams } from 'react-router-dom';

import { useMutation, useQuery } from '@tanstack/react-query' 

import Header from '../Header.jsx';
import { deleteEvent, getEventDetail } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EventDetails() {
  const navigate =  useNavigate()
  const URL = 'http://localhost:3000'
  
  const {id} = useParams()

  const { data ,isError, isPending , error } = useQuery({
    queryKey: ['event' , id],
    queryFn : ({signal}) =>  getEventDetail({id,signal}) 
  })

  const { mutate, isError:isMuErr, isPending:isMuPend, error:mutaErr } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      alert(`The ${id} event is deleted Succesfully!`)
      navigate('/events')
    }
  })

  const removeEventHandler = () => {
    const check = confirm('Are you sure want to delte?');
    if (check) mutate({id});
  }


  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>

      {isPending &&
        <div id='event-details-content' className='center'>
          <LoadingIndicator />
        </div>
      }
      
      {isError &&
        <div id='event-details-content' className='center'>
          <ErrorBlock
            title={`getting detail of ${id} event is faileds`}
            message={error?.message || `getting detail of ${id} event is failed`}/>
        </div>
      }

      {data && 
        <article id="event-details">
          <header>
            <h1>{ data.title }</h1>
            <nav>
              <button onClick={removeEventHandler}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`${URL}/${data.image}`} alt={data.title} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{ data.location }</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{data.date} @ { data.time}</time>
              </div>
              <p id="event-details-description">{ data.description }</p>
            </div>
          </div>
        </article>
      }
    </>
  );
}
