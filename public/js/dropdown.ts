export const Dropdown = () => {
    const dropdowns: NodeListOf<Element> = document.querySelectorAll('.dropdown')

    dropdowns.forEach(dropdown => {
        const button: any = dropdown.querySelector('button')
        const datas: HTMLElement = dropdown.querySelector(button?.attributes.getNamedItem('dropdown-target').value.toString())

        let autoClose: string | boolean = true
        let action: string = 'click'
        let position: string = "left"

        if (getItems(button, 'dropdown-position')) position = getItems(button, 'dropdown-position')?.value.toString().toLowerCase() || "left"
        if (position === "top" || position === "bottom") throw new Error(`The property ${position} is invalid, please use "left" or "right".`)

        if (getItems(button, 'dropdown-action')) action = getItems(button, 'dropdown-action')?.value.toString().toLowerCase() || "click"
        if (getItems(button, 'dropdown-autoclose')) autoClose = getItems(button, 'dropdown-autoclose')?.value.toString().toLowerCase() || true
        if (getItems(button, 'dropdown-arrow')) button.setAttribute('dropdown-arrow', getItems(button, 'dropdown-arrow')?.value.toString().toLowerCase())

        datas.setAttribute('style', `${position}: 0`)

        switch (action) {
            case "hover":
                dropdown.addEventListener('mouseenter', () => datas.classList.toggle('show'))
                dropdown.addEventListener('mouseleave', () => datas.classList.toggle('show'))
                break
            case "click":
                button.addEventListener('click', () => datas.classList.toggle('show'))
                dropdown.addEventListener('mouseleave', () => datas.classList.contains('show') && datas.classList.remove('show'))
                break
            default:
                throw new Error(`The property "${action}" is invalid please use : dropdown-action=<click|hover>.`)
        }

        if (autoClose === "true" || autoClose) {
            datas.querySelectorAll('a.dropdown-item')
                .forEach(item => {
                    item.addEventListener('click', () => datas.classList.toggle('show'))
                })
        }
    })
}

const getItems = (item: HTMLElement, name: string): Attr | null => {
    return item.attributes.getNamedItem(name)
}