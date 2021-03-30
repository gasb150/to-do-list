function header() {
  const header = document.createElement('header');
  header.classList.add('header');

  const name = document.createElement('h1');
  name.classList.add('name');
  name.innerHTML = '<b>To Do List</b>';

  header.appendChild(name);
  header.appendChild(navBar());

  return header;
}

function navBar() {
  const nav = document.createElement('nav');
  return nav;
}

function main() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function loadPage() {
  const content = document.getElementById('content');

  content.appendChild(header());
  content.appendChild(main());
  loadHome();
}

export default loadPage;