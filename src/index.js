import Task from './task';
import DOM from './dom';
import Project from './project';
import './style.css';

let projects = [];
let tasks = [];

const addSidebarListener = () => {
    const buttons = document.querySelectorAll('.sidebar button')
};

const addProjectBtnListener = () => {
    const button = document.querySelector('.add-project');
    button.addEventListener('click', () => {
        button.style.visibility = 'hidden';
        DOM.displayProjectForm();
    });
};

const addNewProjectListener = () => {
    const container = document.querySelector('.projects');
    container.addEventListener('click', (e) => {
        const project = document.querySelector('.project-name');
        const addBtn = document.querySelector('.add-project');
        if(e.target.classList.contains('add-project')){
            const newProject = Project(project.value);
            projects.push(newProject);
            if(document.querySelector('.projects form')) DOM.removeForm();
            DOM.displayNewProject(newProject.getName());
            addBtn.style.visibility = 'visible';
        }
        if(e.target.classList.contains('.cancel-project')){
            if(document.querySelector('.projects form')) DOM.removeForm();
            addBtn.style.visibility = 'visible';
        };
    });
};

DOM.setup();
addProjectBtnListener();
addNewProjectListener();