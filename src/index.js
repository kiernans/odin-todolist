import Task from './task';
import DOM from './dom';
import './style.css';

const addSidebarListener = () => {
    const buttons = document.querySelectorAll('.sidebar button')
};

const addProjectListener = () => {
    const button = document.querySelector('.add-project');
    button.addEventListener('click', () => {
        button.style.visibility = 'hidden';
        DOM.displayProjectForm();
        
    });
};

DOM.setup();
addProjectListener();