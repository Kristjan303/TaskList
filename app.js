const taskInput = document.querySelector(`#task`)
const form = document.querySelector(`form`)
const taskList = document.querySelector(`ul`)
const  removeall = document.querySelector(`remove-all`)
form.addEventListener(`submit`, addTask)
taskList.addEventListener(`click`, deltask)
removeall.addEventListener(`click`, remall)



function  deltask(e){
    if (e.target.textContent === `X`){
        if (confirm(`Are you sure you want to delete this task?`)){
            e.target.parentElement.remove()
        }
    }

}

function  remall(e){
    if (e.target.textContent === `Remove all tasks`){
        if (confirm(`Are you sure?`)){
            while (taskList.firstChild){
                taskList.removeChild(taskList.firstChild)
            }
        }
    }
}




function addTask(e){
    console.log(taskInput.value)
    const li = document.createElement(`li`)
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = "collection-item"
    const a = document.createElement(`a`)
    a.appendChild(document.createTextNode(`X`))
    a.className = `blue-text text-darken-2 secondary-content`
    a.setAttribute(`href`, `#`)
    li.append(`a`)

    const ul = document.querySelector(`ul`)
    ul.appendChild(li)
    taskInput.value = ``
    console.log(li)



    e.preventDefault()
}