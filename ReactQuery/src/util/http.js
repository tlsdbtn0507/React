const URL = import.meta.env.VITE_URL

const errHandler = async (res) => {
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = res.status;
    error.info = await res.json();
    throw error;
  }
}

export async function fetchEvents({ signal, searchTerm , max }) {

  let url = URL

  if (searchTerm && max) url += `?search=${searchTerm}` + `&max=${max}`;
  if (searchTerm) url += `?search=${searchTerm}`;
  if (max) url += `?max=${max}`;

  const response = await fetch(url,{signal:signal});

  await errHandler(response)

  const { events } = await response.json();
  return events;
}

export async function createNewEvent(eventData) {
  
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {'Content-Type' : "application/json"}
  })
  
  await errHandler(response);

  const { events } = await response.json();
  return events;
}

export async function fetchImages({signal}) {
  const response = await fetch(`${URL}/images`, { signal })

  await errHandler(response)

  const { images } = await response.json();
  return images;
}

export async function getEventDetail({ id, signal }) {
  const res = await fetch(`${URL}/${id}`, { signal });

  await errHandler(res)

  const { event } = await res.json();
  
  return event;
}

export async function deleteEvent({ id }) {
  const res = await fetch(`${URL}/${id}`, {
    method:'DELETE'
  });

  await errHandler(res)

  return res.json()

}

export async function editEvent({id, event}) {
  const res = await fetch(URL+`/${id}`, {
    method: 'PUT',
    body: JSON.stringify({event}),
    headers: { 'Content-Type': "application/json" }
  });

  await errHandler(res);

  const { result } = await res.json();
  return result
}
