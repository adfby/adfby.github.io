window.addEventListener('load', function () {
    function xf_ios() {
        let lastTouchEnd = 0;
        document.addEventListener('touchstart', function (e) {
            if (e.touches.length > 1) {
                e.preventDefault()
            }
        })
        document.addEventListener('touchend', function (e) {
            const now = (new Date()).getTime()
            if (now - lastTouchEnd <= 300) {
                e.preventDefault()
            }
            lastTouchEnd = now
        }, false)
        document.addEventListener('gesturestart', function (e) {
            e.preventDefault()
        })
        const content = document.querySelector('.content')
        content?.addEventListener('touchmove', e => {
            e.stopPropagation()
        }, { passive: false, capture: false })
    }
    xf_ios();
    let body = this.document.body
    let xf_nav = body.querySelector('.xf_nav')
    let xf_slither_color = xf_nav.querySelector('.xf_slither_color')
    let xf_site = body.querySelector('.xf_site')
    let xf_about = body.querySelector('.xf_about')
    let xf_wx = body.querySelector('.xf_wx')
    let wxImg = body.querySelector('.wxImg')
    let xf_arr = [xf_site, xf_about, xf_wx]
    for (let i = 0; i < xf_nav.children[0].children.length; i++) {
        let lis = xf_nav.children[0].children[i]
        lis.addEventListener('click', function () {
            if (i == 3) {
                xf_slither_color.style.left = 0
                swal('你确定要加俺QQ嘛~', {
                    buttons: ['取消', '加Ta']
                })
                let links = xf_nav.children[0].children[i].children[0].getAttribute('new-href')
                let swal_butto_confirm = body.querySelector('.swal-button--confirm')
                swal_butto_confirm.addEventListener('click', function () {
                    window.open(links)
                })
            } else {
                xf_slither_color.style.left = i * 25 + '%'
            }
            for (var j = 0; j < xf_arr.length; j++) {
                xf_arr[j].style.display = 'none'
            }
            i == 3 ? xf_arr[0].style.display = 'block' : xf_arr[i].style.display = 'block'
        })
    }
    let wxImg2 = this.document.createElement('img')
    let ImgMaski = this.document.createElement('div')
    body.appendChild(wxImg2)
    body.appendChild(ImgMaski)
    wxImg2.src = wxImg.src
    wxImg2.className = 'xf_bigImg'
    ImgMaski.className = 'ImgMaski'
    wxImg.addEventListener('click', function () {
        wxImg2.style.transform = 'translate(-50%, -50%) scale(1)'
        wxImg2.style.zIndex = 2
        ImgMaski.style.display = 'block'
    })
    ImgMaski.addEventListener('click', function () {
        wxImg2.style.transform = 'translate(-50%, -50%) scale(0)'
        wxImg2.style.zIndex = '-100'
        ImgMaski.style.display = 'none'
    })
    let typed = new Typed(".type_code", {
        strings: xf_text,
        typeSpeed: 120,
        smartBackspace: true,
        cursorChar: '',
        backSpeed: 50,
        backDelay: 500,
        loop: true,
        startDelay: 500,
        fadeOut: true
    })
    let xf_mb = body.querySelector('.xf_mb')
    let xf_look = body.querySelector('.xf_look')
    xf_mb.addEventListener('click', function () {
        xf_look.style.top = '35%'
    })
    xf_mb.addEventListener('mouseout', function (e) {
        xf_look.style.top = '100%'
    })
    this.document.addEventListener('contextmenu', function (e) {
        e.preventDefault()
        swal('为了不影响页面的美观，本站禁止右键！')
    })
    xf_off == true ? document.body.className = 'gradient_move' : document.body.className = ''
});
let li_site = document.querySelector('.li_site')
li_site.children.length % 2 != 0 ? li_site.children[li_site.children.length - 1].className = 'site_odd' : ''
setTimeout(function () {
    let xf_dd = new Date().getTime()
    let days = xf_dd - xf_timer
    let number_of_days = parseInt(days / (1000 * 60 * 60 * 24))
    $("#xf_timer")[0].innerHTML = number_of_days + '天'
}, 1);