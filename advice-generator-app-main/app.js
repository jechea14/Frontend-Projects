const btn = document.querySelector(".btn")
const a = document.querySelector('.advice')
const id = document.querySelector("#id")

const advice = async () => {
    const res = await axios.get('https://api.adviceslip.com/advice')
    return [`"${res.data.slip.advice}"`, res.data.slip.id]
}

const addAdvice = async () => {
    a.innerHTML = ''
    id.innerHTML = ''
    const [adviceText, adviceNum] = await advice()
    a.append(adviceText)
    id.append(adviceNum)
}

btn.addEventListener('click', addAdvice)
