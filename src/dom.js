const DOM = (() => {
    const createContainer = () => {
        const container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);
    };

    const createTitle = () => {
        const container = document.querySelector('.container');
        const header = document.createElement('div');
        header.classList.add('header');
        const title = document.createElement('h1');
        title.textContent = 'To Do List';
        header.appendChild(title);
        container.appendChild(header);
    };

    const createMain = () => {
        const container = document.querySelector('.container');
        const main = document.createElement('div');
        main.classList.add('main');
        container.appendChild(main);
    };

    const createSidebar = () => {
        const main = document.querySelector('.main');
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');
        const today = document.createElement('button');
        today.classList.add('today');
        today.textContent = 'Today';
        const week = document.createElement('button');
        week.classList.add('week');
        week.textContent = 'This week';
        const projects = document.createElement('div');
        projects.classList.add('projects');
        const projectTitle = document.createElement('h1');
        projectTitle.textContent = "Projects";
        const add = document.createElement('button');
        add.classList.add('add-project');
        add.textContent = '+ Add Project';
        sidebar.appendChild(today);
        sidebar.appendChild(week);
        projects.appendChild(projectTitle);
        sidebar.appendChild(projects);
        sidebar.appendChild(add);
        main.appendChild(sidebar);
    };

    const createContent = () => {
        const main = document.querySelector('.main');
        const content = document.createElement('div');
        content.classList.add('content');
        main.appendChild(content);
    };

    const displayContent = (title) => {
        const container = document.querySelector('.content');
        const content = document.createElement('h1');
        content.textContent = title;
        container.appendChild(content);

    };

    const displayProjectForm = () => {
        const projects = document.querySelector('.projects');
        const form = document.createElement('form');
        const name = document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');
        name.type = 'text';
        name.classList.add('project-name');
        name.placeholder = 'Project Name';
        add.classList.add('add-project');
        add.textContent = 'Add';
        add.style.margin = '10px';
        cancel.classList.add('cancel-project');
        cancel.textContent = 'Cancel';
        cancel.style.margin = '10px';
        form.appendChild(name);
        form.appendChild(add);
        form.appendChild(cancel);
        projects.appendChild(form);
    }; 

    const setup = () => {
        createContainer();
        createTitle();
        createMain();
        createSidebar();
        createContent();
    }

    return {
        setup,
        displayContent,
        displayProjectForm,
    };
})();

export default DOM;