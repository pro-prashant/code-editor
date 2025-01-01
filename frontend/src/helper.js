
const backend = import.meta.env.VITE_URL;

export const toggleClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.toggle(className);
};

export const removeClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.remove(className);
};
       
export const api_base_url = backend;
