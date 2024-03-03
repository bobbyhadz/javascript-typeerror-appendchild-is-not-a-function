console.log('bobbyhadz.com');

const boxes = document.getElementsByClassName('box');
console.log(boxes); // 👉️ [div.box, div.box, div.box]

const child = document.createElement('div');
child.innerHTML = `<h1>Hello world</h1>`;

// ✅ Works
boxes[0].appendChild(child);

// Check if the DOM element exists before calling appendChild()

const box = null;

if (
  typeof box === 'object' &&
  box !== null &&
  'appendChild' in box
) {
  const child = document.createElement('div');
  child.innerHTML = `<h1>Hello world</h1>`;

  box.appendChild(child);
}
