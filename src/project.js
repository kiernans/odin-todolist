const Project = (initName) => {
    let name = initName;

    const getName = () => name;
    const setName = (newName) => name = newName;

    return {
        getName,
        setName,
    };
};

export default Project;