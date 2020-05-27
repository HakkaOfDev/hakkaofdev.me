/**
 *
 * @param configuration
 */
export const ResponsiveNavbar = (): void => {
    const configuration = {
        timer: 500,
        initialPosition: -99999,
        finalPosition: 0,
        navbar: document.querySelector('.navbar') as HTMLElement,
        toggler: document.querySelector('.navbar-toggler') as HTMLElement,
        overlay: document.querySelector('.navbar-overlay') as HTMLElement,
        container: document.querySelector('.navbar-container') as HTMLElement
    }

    const {navbar, toggler, overlay, container, timer, initialPosition, finalPosition} = configuration
    toggler.addEventListener('click', () => {
        container.setAttribute('style', `animation: navbar-toggle-on ${timer / 1000}s both`)
        overlay.setAttribute('style', `animation: opacity-on ${timer / 1000}s both; transform:translate(${finalPosition});`)
        overlay.addEventListener('click', () => {
            container.setAttribute('style', `animation: navbar-toggle-off ${timer / 1000}s both`)
            overlay.setAttribute('style', `animation: opacity-off ${timer / 1000}s both; transform:translate(${initialPosition}px);`)
            setTimeout(() => {
                navbar.classList.remove('active')
            }, timer)
        })
        navbar.classList.add('active')
    })
}

export const AnimateNavbar = () => {
    const configuration = {
        navbar: document.querySelector('.navbar.animate-top') as HTMLElement
    }

    const {navbar} = configuration

    window.addEventListener('scroll', () => {
        let elements = navbar.getBoundingClientRect()
        console.log(elements, elements.top, window.scrollY)
        if (elements.top + window.scrollY > 100) {
            navbar.classList.add("scrolled")
        } else {
            navbar.classList.remove("scrolled")
        }
    })
}
