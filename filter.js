function filterDates(month) {
  // Get all events
  const events = document.querySelectorAll('.openevent');

  events.forEach((event) => {
    // display all events
    event.style.display = 'block';

    // Get date string
    const date = event.querySelector('span b').innerHTML;

    // Parse date strng
    const frags = date.split('/');

    // Hide events outside criteria
    if(frags[1] != month) {
      event.style.display = 'none';
    }
  })
}
