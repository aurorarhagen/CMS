export async function contactPage() {}
const url = document.location; 

const search =url.search;

const parameter = new URLSearchParams(search); 

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Message sent!`;
});