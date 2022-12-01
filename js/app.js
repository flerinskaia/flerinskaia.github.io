document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', e => {
        document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
        console.clear();
        console.log(`--scrollTop: ${this.scrollY} px;`)
    })

})