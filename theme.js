const chk = document.querySelector('#theme')

function btnThene() {
    document.body.classList.toggle("dark")
}

chk.addEventListener('click', () => {
    btnThene()

    localStorage.removeItem("dark")
    
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1)
    }
})

function storage() {
    let darkTheme = localStorage.getItem("dark")

    if (darkTheme) {
        btnThene()
    }
}

storage()