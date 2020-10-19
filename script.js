let data_key = 0;
let contact_key = 0;
const userLogin = 'Dima';
let recieverLogin = '';
const chatElement = document.querySelector('.chat');
const messageArea = document.querySelector('.mess_area');
const contactsArea = document.querySelector('.contacts')
let chatData = getHistory();
let contactList = getContacts();
console.log(contactList);   


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

function getHistory() {
    let chatHistory = [];
    if(localStorage.getItem(userLogin + recieverLogin + data_key) != null) {
        while(localStorage.getItem(userLogin + recieverLogin + data_key) != null) {
            let historyMessage = {
                sender: userLogin,
                reciever: recieverLogin,
                text: localStorage.getItem(userLogin + recieverLogin + data_key)
            };
            chatHistory.push(historyMessage);
            renderMessage(historyMessage);
            data_key++;
        }
        return chatHistory;
    } else {
        return [];
    }
};

function getContacts() {
    let contacts = [];
    if(localStorage.getItem(contact_key) != null) {
        while(localStorage.getItem(contact_key) != null) {
            let contact = localStorage.getItem(contact_key);
            contacts.push(contact);
            renderNewContact(contact);
            contact_key++;
        }
        return contacts;
    } else {
        return [];
    }
}

function addContact() {
    const newContact = prompt('Login');
    localStorage.setItem(contact_key, newContact);
    contactList.push(newContact);
    renderNewContact(newContact);
    contact_key++;
    return newContact;
}

function renderNewContact(contactName) {
    const contactElement = document.createElement('li');
    const contactButton = document.createElement('button');
    contactElement.classList.add('contactli');
    contactButton.classList.add('contact');
    contactButton.innerHTML =contactName;
    contactButton.onclick = function() {
        switchChat(contactName);
    };
    contactsArea.append(contactElement);
    contactElement.append(contactButton);

}

function sendMessage() {
    let message = {
        sender: userLogin,
        reciever: recieverLogin,
        text: messageArea.value
    };
    chatData.push(message);
    localStorage.setItem(message.sender + message.reciever + data_key, message.text);
    renderMessage(message);
    data_key++;
    messageArea.value = '';
};

function renderMessage(messageObject) {
    const messageElement = document.createElement('p');
    messageElement.classList.add('mymessages');
    messageElement.innerHTML = messageObject.text;
    chatElement.append(messageElement);
}

function cleanChat() {
    for(let message of chatData) {
        let deletedMessage = document.querySelector('.mymessages')
        deletedMessage.remove();
    }
}

function switchChat(chat) {
    data_key = 0;
    recieverLogin = chat;       
    cleanChat();
    chatData = getHistory();  
}
