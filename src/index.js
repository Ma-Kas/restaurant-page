import { createHeader, createMainTop } from "./page-load";

const removeMain = () => {
  const content = document.getElementById('content');
  const childToRemove = content.childNodes[2];
  content.removeChild(childToRemove);
}

createHeader();
createMainTop();