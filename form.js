const formName = document.querySelector('#form-name')
const logged = document.querySelector('.user-logged')
const logout = document.querySelector('#logout')

formName.addEventListener('submit', (page) => {
    page.preventDefault()

    const nameInserted = document.querySelector('#username')

    localStorage.setItem("name", nameInserted.value)

    nameInserted.value = "";

    content()

})

function content() {
    let nameStorage = localStorage.getItem("name")
    let usuario = document.querySelector('.usuario')

    if (nameStorage) {
        formName.style.display = "none" 
        logged.style.display = "block"
        logout.style.display = "block"
        
        usuario.textContent = nameStorage
    } else {
      formName.style.display = "block";
      logged.style.display = "none";
      logout.style.display = "none";
    }
}

content()

logout.addEventListener('click', () => {
    localStorage.removeItem("name")

    content()
})