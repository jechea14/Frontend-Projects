const app = document.getElementById("app")
const todoList = document.getElementById("todoList")
const btn = document.getElementById("button")
const input = document.getElementById("todoInput")

const addTodo = () => {
    const deletebtn = document.createElement("button")
    const editbtn = document.createElement('button')

    editbtn.innerText = "Edit"
    deletebtn.innerText = "X"
    const todo = input.value
    const newLi = document.createElement("li")
    newLi.innerText = todo
    newLi.append(editbtn)
    newLi.append(deletebtn)
    todoList.append(newLi)

    input.value = ''

    deletebtn.addEventListener('click', () => {
        newLi.parentNode.removeChild(newLi)
    })

    editbtn.addEventListener('click', () => {
        const inputBox = document.createElement("input")
        const savebtn = document.createElement("button")
        savebtn.innerText = "Save"
        inputBox.type = "text"
        inputBox.id = "editInput"
        
        newLi.append(inputBox)
        newLi.append(savebtn)
        editbtn.parentNode.removeChild(editbtn)

        savebtn.addEventListener('click', () => {
            const inputVal = document.getElementById("editInput")
            newLi.innerText = inputVal.value
            newLi.append(editbtn)
            newLi.append(deletebtn)
    
        })
    })
}

//--------------------------------------
const ul = document.getElementById("productDropdown")
const dropdown = () => {
    ul.classList.toggle("show")
}