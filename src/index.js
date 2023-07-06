import { createHeader, createMainTop } from "./page-load";
import { createMenu } from "./menu";

const removeMain = () => {
  const content = document.getElementById('content');
  const childToRemove = content.childNodes[2];
  content.removeChild(childToRemove);
}

createHeader();
// createMainTop();
createMenu();