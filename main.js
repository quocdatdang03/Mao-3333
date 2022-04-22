const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Xử lý khi ấn vào menu-bar-btn (thay đổi icon và ẩn hiện menu-bar)
const header = $('.header');
const headerMenuBar = $('.header__menu-bar')
const btnBar = $('.header__menu-bar-btn');
const handleShowBarClose = $('.bar__close');

btnBar.onclick = function() {
    this.classList.add('change');
    headerMenuBar.classList.add('open');
    handleShowBarClose.onclick = function() {
        headerMenuBar.classList.remove('open');
        btnBar.classList.remove('change');
        console.log(100);
    }
}


// XỬ lý ẩn hiện message tư vấn
const message = $('.message');
const boxMessage = $('.message__support');
const closeMessage = $('.message__support-close');
message.onclick = function() {
    boxMessage.classList.add('open');
}

closeMessage.onclick = function() {
    boxMessage.classList.remove('open');
}