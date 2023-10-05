const form = document.querySelector('#regForm');

if (form) {
  form.addEventListener('submit', async (e) => {
    const { name } = e.target;
    const res = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
      }),
    });
    const result = await res.json();
  });
}
