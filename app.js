const taskInput = document.querySelector(`#task`)
const form = document.querySelector(`form`)
const taskList = document.querySelector(`ul`)
form.addEventListener(`submit`, addTask)
taskList.addEventListener(`click`, deltask)

function  deltask(e){
    if (e.target.textContent === `X`){
        if (confirm(`Are you sure you want to delete this task?`)){
            e.target.parentElement.remove()
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