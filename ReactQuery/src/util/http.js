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

export async function createNewEvent(eventData) {
  
  const response = await fetch(URL, {
    method: 'POST',
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