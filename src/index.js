import Task from './task';
import DOM from './dom';
import './style.css';


const addProjectListener = () => {
    const button = document.querySelector('.add-project');
    button.addEventListener('click', () => {
        button.style.visibility = 'hidden';
        
    });
};

DOM.setup();
addProjectListener();