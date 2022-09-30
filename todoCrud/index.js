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

const mobileMenu = document.getElementById('mobileMenu')
const openMenu = () => {
    mobileMenu.classList.toggle('show')
}


//--------------------------------------------
const pokemonInput = document.getElementById("pokemonInput")
const pokemonButton = document.getElementById("pokemonButton")
const pokemonResult = document.getElementById("pokemonResult")
const newP = document.createElement("p")
const pokeImage = document.createElement("img")

const getPokemon = async() => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.value}`)
        const data = await res.json()
        console.log(data)
        return [data.name, data.sprites.front_default, data.types]
    } catch(e) {
        const newP = document.createElement("p")
        return ["pokemon not found"]
    }

}

const searchPokemon = async() => {

    const [pokeName, pokeSprite, pokeType] = await getPokemon()

    pokemonResult.innerHTML = ''
    pokeImage.src = pokeSprite
    newP.innerHTML = pokeName
    pokemonResult.append(newP)
    pokemonResult.append(pokeImage)
    const pokeTypeUL = document.createElement("ul")


    for(type of pokeType) {
        console.log(type.type.name)
        const pokeTypeLI = document.createElement("li")
        pokeTypeLI.innerHTML = type.type.name
        pokeTypeUL.append(pokeTypeLI)
    }

    pokemonResult.append(pokeTypeUL)

    // console.log(pokeType)
}
