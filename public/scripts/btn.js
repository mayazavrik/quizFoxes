const container = document.querySelector('.quest-container');
const ansForm = document.querySelector('.answer-form');

if (container) {
  container.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.classList.contains('btn-next')) {
      const list = e.target.closest('.quest-list');
      console.log(list, container);
      const { itemid } = list.dataset;
      const { id } = container.dataset;
      console.log(itemid, id);
      const res = await fetch(`/themes/${id}/questions/${itemid}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          listId: itemid,
          contId: id,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.message === 'success') {
        list.remove();
        container.insertAdjacentHTML('beforeend', data.html);
      } else {
        window.location.assign('/themes');
      }
    } else {
      if (e.target.classList.contains('input-ans')) {
        console.log('good');
        ansForm.addEventListener('submit', async (event) => {
          e.preventDefault();
          const list = e.target.closest('.quest-list');
          console.log(list, container);
          const { itemid } = list.dataset;
          const { id } = container.dataset;
          const { answerInput } = event.target;
          const res = await fetch(`/themes/${id}/questions/${itemid}`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              listId: itemid,
              contId: id,
              answerInput: answerInput.value,
            }),
          });
          const data = await res.json();
          console.log(answerInput);
        });
      }
    }
  });
}
