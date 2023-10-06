const container = document.querySelector('.quest-container');

if (container) {
  container.addEventListener('click', async (e) => {
    e.preventDefault();

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
    }
  });
}
