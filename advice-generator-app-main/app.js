const btn = document.querySelector(".btn")
const a = document.querySelector('.advice')
const id = document.querySelector("#id")

const advice = async () => {
    const res = await axios.get('https://api.adviceslip.com/advice')
    return (res.data.slip.advice)
}

const adviceNumber = async() => {
    const res = await axios.get('https://api.adviceslip.com/advice')
    return (res.data.slip.id)
}

const addAdvice = async () => {
    a.innerHTML = ''
    id.innerHTML = ''
    const adviceText = await advice()
    const adviceNum = await adviceNumber()
    a.append(adviceText)
    id.append(adviceNum)
}

btn.addEventListener('click', addAdvice)
