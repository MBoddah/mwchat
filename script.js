

let chat = document.querySelector('.chat');
let oldMessageElement;
let key = '0';

function enterside()
{
    const registrationDiv = document.querySelector('.registrationdiv');
    const enterDiv = document.querySelector('.enterdiv');
    const registrationTab = document.querySelector('#regtab');
    const enterTab = document.querySelector('#entertab');

    registrationDiv.style.display = 'none';
    enterDiv.style.display = 'inline';
    registrationTab.style.zIndex = '0';
    enterTab.style.zIndex = '2';
}

function registrationside()
{
    const registrationDiv = document.querySelector('.registrationdiv');
    const enterDiv = document.querySelector('.enterdiv');
    const registrationTab = document.querySelector('#regtab');
    const enterTab = document.querySelector('#entertab');

    registrationDiv.style.display = 'inline';
    enterDiv.style.display = 'none';
    registrationTab.style.zIndex = '2';
    enterTab.style.zIndex = '0';
}

while (localStorage.getItem(key) != null)
{
    oldMessageElement = document.createElement('p');
    oldMessageElement.classList.add('mymessages');
    oldMessageElement.innerHTML = localStorage.getItem(key);
    chat.appendChild(oldMessageElement);
    key = String(Number(key) + 1);
}

function send()
{
    let message = document.querySelector('.mess_area');
    localStorage.setItem(key, message.value);
    let messageElement = document.createElement('p');
    messageElement.classList.add('mymessages');
    messageElement.innerHTML = message.value;
    chat.appendChild(messageElement);
    key = String(Number(key) + 1);
    message.value = '';
}