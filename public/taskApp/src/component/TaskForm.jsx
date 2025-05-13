function TaskForm(){
    return (
        <>
        <form>
            <div className="text-white bg-amber-500 w-full">
                <label for="task">
                    Task
                </label>
                <input type="text" id="tesk" />
                <label for="taskdescription">
                    Description
                </label>
                <input type="text" id="taskdescription"/>
            </div>
        </form>
        </>
        
    )
}

export default TaskForm;