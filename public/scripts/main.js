import Modal from './modal.js';

const modal = Modal()

// seleciona os elementos html 

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// pegar todos os botoes marcados com a class 'check'
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {

    // quando acontecer o evento do botão ser clicado entao é executada a função
    button.addEventListener("click", handleClick)
})
 
// Quando o botão excluir for apertado abrirá a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {

    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault() // faz com que os links não se comportem como links (não levam a lugar nenhum)

    const text = check ? "Marcar como lida" : "Excluir "
    const slug = check ? "check" : "delete"

    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`

    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.open()
}