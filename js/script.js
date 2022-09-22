const td = document.querySelector("td");

let storage = localStorage.getItem("count");

storage === null ? storage = 0 : storage++;

localStorage.setItem("count", storage );

