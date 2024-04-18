const itemDragabble = document.querySelectorAll('#itemDragabble');
const zoneDrop = document.getElementById('zone');
const body = document.querySelector('body');

itemDragabble.forEach((element) => {
  element.addEventListener('dragstart', (e) => {
    console.log('Dragstart');
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log(e.dataTransfer.getData('text/plain'));
  });
});

itemDragabble.forEach((element) => {
  element.addEventListener('drag', (e) => {
    console.log('is dragging');
    e.target.style.background = 'black';
  });
});

itemDragabble.forEach((element) => {
  element.addEventListener('dragend', (e) => {
    console.log('Dragend');
    e.target.style.background = 'brown';
  });
});

zoneDrop.addEventListener('dragenter', () => console.log('Dragenter'));

zoneDrop.addEventListener('dragover', (e) => {
  e.preventDefault();
  console.log('Is dragging over the zone');
});

zoneDrop.addEventListener('drop', (e) => {
  console.log('Drop');
  const draggedItemId = e.dataTransfer.getData('text/plain');
  const draggedItem = document.getElementById(draggedItemId);
  zoneDrop.appendChild(draggedItem);
});

zoneDrop.addEventListener('dragleave', (e) => {
  console.log('Dragleave the zone');
});
