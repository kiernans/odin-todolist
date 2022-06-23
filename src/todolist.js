const ToDoList = (initTitle, initDescription, initDueDate, initPriority) => {
    let title = initTitle;
    let description = initDescription;
    let dueDate = initDueDate;
    let priority = initPriority;
    let note = '';

    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (newDescription) => description = newDescription;
    const setDueDate = (newDueDate) => dueDate = newDueDate;
    const setPriority = (newPriority) => priority = newPriority;
    const setNote = (newNote) => note = newNote;

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getNote = () => note;


    return {
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        getNote,
        setNote,
    };
};

export default ToDoList;