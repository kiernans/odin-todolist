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
        const month = document.createElement('button');
        month.classList.add('month');
        month.textContent = 'This month';
        const projects = document.createElement('div');
        projects.classList.add('projects');
        const projectTitle = document.createElement('h1');
        projectTitle.textContent = "Projects";
        const add = document.createElement('button');
        add.classList.add('add-project');
        add.textContent = '+ Add Project';
        sidebar.appendChild(today);
        sidebar.appendChild(week);
        sidebar.appendChild(month);
        projects.appendChild(projectTitle);
        sidebar.appendChild(projects);
        sidebar.appendChild(add);
        main.appendChild(sidebar);
    };

    const setup = () => {
        createContainer();
        createTitle();
        createMain();
        createSidebar();
    }

    return {
        setup,
    };
})();

export default DOM;