import { createHeaderDOM, createMainTopDOM, createFooterDOM } from "./page-load";
import { createMenuDOM } from "./menu";
import { createAccessDOM } from "./access";
import './style.css';


const domController = (() => {
  const createInitialDOM = (() => {
    createHeaderDOM();
    createMainTopDOM();
    createFooterDOM();
  })();

  // Adds event listeners to all navigation items
  const initialPageSetup = (() => {
    const linkTop = document.getElementById('top');
    const linkMenu = document.getElementById('menu');
    const linkAccess = document.getElementById('access');

    linkTop.addEventListener('click', () => {
      _navigationItemClickLogic('top')
    });
    linkMenu.addEventListener('click', () => {
      _navigationItemClickLogic('menu')
    });
    linkAccess.addEventListener('click', () => {
      _navigationItemClickLogic('access')
    });
  })();

  // Removes main content of page, 
  // Creates DOM for clicked page content
  // Creates footer
  function _navigationItemClickLogic(target) {
    _removeMain();
    switch (target) {
      case 'top' :
        createMainTopDOM();
        break;
      case 'menu' :
        createMenuDOM();
        break;
      case 'access' :
        createAccessDOM();
        break;
    }
    createFooterDOM();
  }
  
  // Removes content except for header
  function _removeMain() {
    const content = document.getElementById('content');
    const childrenToRemove = [content.childNodes[2], content.childNodes[3]];
    childrenToRemove.forEach(child => {
      content.removeChild(child);
    });
  }

  return {}
})();