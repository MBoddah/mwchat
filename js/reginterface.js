function createModal(modalType) {
    const modal = document.createElement('section');
    modal.classList.add('modal');
    if (modalType == 'authorization') {
        modal.insertAdjacentHTML('beforeend', `
        <div class="modal-overlay">
            <div class="modal-window">
                <img class="modalLogo" src="img/mwblue.png"> 
                <h1>Sign In</h1>
                <input type="text" placeholder="Login" class="modalInput" id="nickname-enter">
                <input type="password" placeholder="Password" class="modalInput" id="password-enter">
                <button class="modalOk" id="ok-enter-button">Sign In</button>
                <button class="modalCancel" id="cancel-enter-button">Cancel</button>
            </div>
        </div>
        `)
    }
    else if (modalType == 'registration') {
        modal.insertAdjacentHTML('beforeend', `
        <div class="modal-overlay">
            <div class="modal-window">
                <img class="modalLogo" src="img/mwblue.png"> 
                <h1>Sign Up</h1>
                <input type="text" placeholder="Login" class="modalInput" id="nickname-reg">
                <input type="password" placeholder="Password" class="modalInput" id="password-reg">
                <button class="modalOk" id="ok-reg-button">Sign Up</button>
                <button class="modalCancel" id="cancel-reg-button">Cancel</button>
            </div>
        </div>
        `)
    }
    document.body.appendChild(modal);
    return modal;
}

function deleteModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('open');
    modal.classList.add('hide');
    setTimeout(() => modal.remove(), 1000);
}

modalFunction = function(modalType) {
    const ANIMATION_SPEED = 200;
    const modal = createModal(modalType);
    const cancelButton = (modalType == 'authorization') ? document.querySelector('#cancel-enter-button') : document.querySelector('#cancel-reg-button');
    const okButton = (modalType == 'authorization') ? document.querySelector('#ok-enter-button') : document.querySelector('#ok-reg-button');

    setTimeout(() => modal.classList.add('open'), 1);
    
    if (modalType == 'registration') {
        okButton.addEventListener('click', event => {
            registration();
        })
    }
    else if (modalType == 'authorization') {
        okButton.addEventListener('click', event => {
            authorization();
        })
    }
    cancelButton.addEventListener('click', event => {
        deleteModal();
    })
}