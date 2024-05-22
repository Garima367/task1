export const getTaskList=()=>{
    if(!localStorage["@task"]){
        localStorage["@task"]=JSON.stringify([]);
    }
    let task=JSON.parse(localStorage["@task"]);
    return task;
}

export const addTask=(task)=>{
   const tasks=getTaskList();
   tasks.push(task);
   localStorage["@task"]=JSON.stringify(tasks);
}