/* eslint-disable no-lonely-if */
const container = document.querySelector('.quest-container');
const ansForm = document.querySelector('.answer-form');
let counter = 0;
if (container) {
  container.addEventListener('click', async (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('btn-next')) {
      const list = e.target.closest('.quest-list');
      const { itemid } = list.dataset;
      const { id } = container.dataset;
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
      if (data.message === 'success') {
        list.remove();
        container.insertAdjacentHTML('beforeend', data.html);
        document
          .querySelector('.answer-form')
          .addEventListener('submit', otvet);
      } else {
        window.location.assign('/themes');
      }
    }
  });
}
ansForm.addEventListener('submit', otvet);

async function otvet(event) {
  event.preventDefault();
  console.log(event);
  const list = document.querySelector('.quest-list');
  const { itemid } = list.dataset;
  console.log(itemid);
  const { id } = container.dataset;
  const { answerInput } = event.target;
  console.log(123123123);
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
  console.log(data);
  if (data.message === 'success') {
    list.remove();
    container.insertAdjacentHTML('beforeend', data.html);
  }
  document.querySelector('.answer-form').addEventListener('submit', otvet);
}
