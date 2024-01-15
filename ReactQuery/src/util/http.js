const URL = import.meta.env.VITE_URL

export async function fetchEvents({ signal, searchTerm }) {

  let url = URL

  if (searchTerm) url += `?search=${searchTerm}`;

  const response = await fetch(url,{signal:signal});
  
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const { events } = await response.json();
  return events;
}

export async function createNewEvent({eventData,id}) {
  
  // const response = await fetch(URL+ id ? `/${id}` :''  , {
  const response = await fetch(`${URL}${id === undefined ? '' :`/${id}`}`, {
    method: id !== undefined ? 'PUT' :'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type' : "application/json"
    }
  })
  
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const { events } = await response.json();
  return events;
}

export async function fetchImages({signal}) {
  const response = await fetch(`${URL}/images`, { signal })
  
    if (!response.ok) {
    const error = new Error('An error occurred while fetching the images');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const { images } = await response.json();
  return images;
}

export async function getEventDetail({ id, signal }) {
  const res = await fetch(`${URL}/${id}`, { signal });

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the details of event');
    error.code = res.status;
    error.info = await res.json();
    throw error;
  }
  const { event } = await res.json();
  
  return event;
}

export async function deleteEvent({ id }) {
  const res = await fetch(`${URL}/${id}`, {
    method:'DELETE'
  });

  if (!res.ok) {
    const error = new Error('An error occurred while deleting the event');
    error.code = res.status;
    error.info = await res.json();
    throw error;
  }

  return res.json()

}
