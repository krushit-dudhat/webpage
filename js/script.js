const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click",() =>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

        const activeSlide = slides.querySelector("[data-active")
        const prevSlide = slides.querySelector("[data-prev]")
        const nextSlide = slides.querySelector("[data-next]")

        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        let prevIndex = [...slides.children].indexOf(prevSlide) + offset
        let nextIndex = [...slides.children].indexOf(nextSlide) + offset

        if(prevIndex < 0 ) prevIndex = slides.children.length -1
        if(prevIndex >= slides.children.lenght) prevIndex = 0

        if(nextIndex < 0 ) nextIndex = slides.children.length -1
        if(nextIndex >= slides.children.lenght) nextIndex = 0



        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
        slides.children[prevIndex].dataset.prev = true
        delete prevSlide.dataset.prev
        slides.children[nextIndex].dataset.next = true
        delete nextSlide.dataset.next
        
    })
})