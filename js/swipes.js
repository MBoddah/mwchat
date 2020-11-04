const dialogs = document.querySelector('.dialogdiv');
const chat = document.querySelector('.chatwindow');
let startingX;

dialogs.addEventListener('touchstart', dialogTouchStart);
dialogs.addEventListener('touchmove', dialogTouchMove);
dialogs.addEventListener('touchend', dialogTouchEnd);

chat.addEventListener('touchstart', chatTouchStart);
chat.addEventListener('touchmove', chatTouchMove);
chat.addEventListener('touchend', chatTouchEnd);


function slideChatIn() {
    dialogs.style.left = '-100%';
    chat.style.left = '0';
    chat.style.display = 'block'
}

function slideChatOut() {
    dialogs.style.display = 'block'
    dialogs.style.left = '0';
    chat.style.left = '100%';
    chat.style.display = 'none';
}

function dialogTouchStart(evt) {
    startingX = evt.touches[0].clientX;

}

function dialogTouchMove(evt) {
    let touch = evt.touches[0];
    let change = startingX - touch.clientX;

    if ((change < 0)||(screen.width > 850)) {
        return;
    }
    dialogs.style.left = '-' + change + 'px';
    chat.style.display = 'block';
    chat.style.left = (screen.width - change) + 'px';
    evt.preventDefault();
    
}

function dialogTouchEnd(evt) {
    let change = startingX - evt.changedTouches[0].clientX;
    let part = screen.width / 3;

    if ((change == 0)||(screen.width > 850)) {
        return
    }
    
    if(change < part) {
        slideChatOut()
    } else {
        slideChatIn()
    }
}

function chatTouchStart(evt) {
    startingX = evt.touches[0].clientX;

}

function chatTouchMove(evt) {
    let touch = evt.touches[0];
    let change = touch.clientX - startingX;

    if ((change < 0)||(screen.width > 850)) {
        return;
    }

    dialogs.style.display = 'block';
    dialogs.style.left = (change - screen.width) + 'px';
    chat.style.left = change + 'px';
    evt.preventDefault();
    
}

function chatTouchEnd(evt) {
    let change = evt.changedTouches[0].clientX - startingX;
    let part = screen.width / 4;
    
    if ((change == 0)||(screen.width > 850)) {
        return
    }

    if(change < part) {
        slideChatIn()
    } else {
        slideChatOut()
    }
}