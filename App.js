// const root = document.getElementById("root");
// const h1 = document.createElement("h1")
// h1.innerHTML="hello world";
// root.appendChild(h1);

const h1 = React.createElement("h1",{},"hello world")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(h1);
