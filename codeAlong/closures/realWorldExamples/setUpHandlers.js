var buttons = document.getElementsByTagName('button');

function createHandler(name) {
  return function () {
    console.log(name);
  }
}

//let variable example
for (var i = 0; i < buttons.length; i += 1) {
  var button = buttons[i];
  let buttonName = button.innerHTML;
  button.addEventListener('click', () => {
    console.log(buttonName);
  });
}

// for (var i = 0; i < buttons.length; i += 1) {
//   var button = buttons[i];
//   var buttonName = button.innerHTML;
//   button.addEventListener('click', createHandler(buttonName));
// }
