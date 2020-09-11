const root = document.documentElement

const toggle_btn = document.getElementById('toggle_btn')

let isModeDark = false

toggleDarkMode = e => {
    if(!isModeDark) {
        root.style.setProperty('--text-color', '#eee')
        root.style.setProperty('--btn-color', '#333')
        root.style.setProperty('--background-color', '#000')
        root.style.setProperty('--btn-background-color', '#eee')
        isModeDark = true
    }
    else
    {
        root.style.setProperty('--text-color', '#333')
        root.style.setProperty('--btn-color', '#eee')
        root.style.setProperty('--background-color', '#fff')
        root.style.setProperty('--btn-background-color', '#333')
        isModeDark = false
    }
}

toggle_btn.addEventListener('click', toggleDarkMode)