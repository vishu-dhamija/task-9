function addtask(){
    const task1=document.createElement('li')
    const tasklist=document.getElementById('list')
    tasklist.appendChild(task1)

    task1.textContent= document.getElementById('input').value
    document.getElementById('input').value=""
    deletetask(task1)
}

function deletetask(task1){
    const dbtn=document.createElement('button')
    dbtn.textContent="Delete"
    task1.appendChild(dbtn)

    dbtn.onclick=function(){
        task1.remove()
    }
}