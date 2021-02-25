let container = document.querySelector('.rizeMenu'),
    nav = container.querySelector('ul'),
    item = nav.querySelectorAll('ul>li'),
    menu =
        '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-ellipsis-h fa-w-16"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>',
    wMenuBtn = 50,
    rize = true,
    flagDropMenu = false

resize_info()

window.onresize = function () {
    resize_info()
}

function resize_info() {
    let w = container.offsetWidth,
        count = 0

    if (rize == false) {
        let togles = document.querySelectorAll('.togle')

        togles.forEach((list) => {
            list.classList.remove('togle')
            nav.appendChild(list)
        })

        let togleItem = nav.querySelector('.togleItem')

        if (togleItem) {
            togleItem.remove()
        }
    }

    item.forEach((li) => {
        count += li.offsetWidth

        if (count > w - wMenuBtn) {
            li.previousElementSibling.classList.add('togle')
            li.classList.add('togle')
        }
    })

    let togles = document.querySelectorAll('.togle')

    if (togles.length > 0) {
        let togleLink = document.createElement('a')
        togleLink.className = 'togleLink'
        togleLink.setAttribute('href', '#')
        togleLink.innerHTML = menu

        let togleWrap = document.createElement('ul')
        togleWrap.className = 'togleWrap'

        let togleItem = document.createElement('li')
        togleItem.className = 'togleItem'

        togles.forEach((item) => {
            togleWrap.appendChild(item)
        })

        togleItem.appendChild(togleLink)
        togleItem.appendChild(togleWrap)
        nav.appendChild(togleItem)

        rize = false
        flagDropMenu = false
    }
}

document.addEventListener('click', function (e) {
    e.preventDefault()

    const togleLink = document.querySelector('.togleLink')

    if (!togleLink) return

    const togleLinkSvg = togleLink.firstElementChild,
        togleWrap = document.querySelector('.togleItem .togleWrap'),
        target = e.target.parentElement,
        its_menu = target == togleWrap || togleWrap.contains(target),
        its_btnMenu = target == togleLink,
        its_btnMenuSvg = target == togleLinkSvg

    if (target == togleLink || target == togleLinkSvg) {
        if (flagDropMenu == false) {
            document.querySelector('.togleWrap').style.display = 'block'
            flagDropMenu = true
        } else {
            closeDropMenu()
        }
    }

    if (!its_menu && !its_btnMenu && !its_btnMenuSvg && flagDropMenu == true) {
        closeDropMenu()
    }
})

function closeDropMenu() {
    document.querySelector('.togleWrap').style.display = 'none'
    flagDropMenu = false
}

// nav.insertAdjacentHTML('beforeend', arr1.innerHTML)
// child = li.previousElementSibling
// li.previousElementSibling.classList.add('togle')
// li.previousElementSibling.insertAdjacentHTML('beforebegin', menu)
// li.classList.add('togle')
// li.remove()
