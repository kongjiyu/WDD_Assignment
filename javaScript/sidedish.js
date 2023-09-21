const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal2 = document.querySelector(button.dataset.modalTarget)
        openModal(modal2)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal2 = button.closest('.modal')
        closeModal(modal2)
    })
})

function openModal(modal2) {
    if (modal2 == null) return
    modal2.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal2) {
    if (modal2 == null) return
    modal2.classList.remove('active')
    overlay.classList.remove('active')
}
