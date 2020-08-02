export const createComp = (type, className, parent, text) => {
  const comp = document.createElement(type);
  comp.className = className;
  comp.textContent = text;
  parent.appendChild(comp);
};
