const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removerActiveClasses()
        panel.classList.add('active')
    })

})
function removerActiveClasses() {
    panels.forEach(panel => { 
        panel.classList.remove('active')
    })
}