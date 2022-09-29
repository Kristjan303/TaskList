const taskInput = document.querySelector(`#task`)
const form = document.querySelector(`form`)
form.addEventListener(`submit`, addTask)

function addTask(e){
    console.log(taskInput.value)
    const li = document.createElement(`li`)
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = "collection-item"
    const a = document.createElement(`a`)
    a.appendChild(document.createTextNode(`a`))
    a.className = `blue-text text-darken-2 secondary-content`
    a.setAttribute(`hred`, `a`)
    li.append(`a`)

    const ul = document.querySelector(`ul`)
    ul.appendChild(li)
    taskInput.value = ``
    console.log(li)
    e.preventDefault()
}