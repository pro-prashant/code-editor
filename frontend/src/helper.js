


export const toggleClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.toggle(className);
};

export const removeClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.remove(className);
};
const URL =  process.env.api_base_url;
export const api_base_url = "http://localhost:3000" ;
