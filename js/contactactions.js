function getContacts(key) {
    let contacts = [];
    if(localStorage.getItem(key) != null) {
        while(localStorage.getItem(key) != null) {
            let contact = localStorage.getItem(key);
            contacts.push(contact);
            renderNewContact(contact);
            key++;
        }
        return contacts;
    } else {
        return [];
    }
}

function getContactButtons(contacts) {
    let buttons = [];
    contacts.forEach(function(contact) {
        buttons.push(document.getElementById('but'+contact))
    })
    return buttons;
}

function addContact(contacts, messages, newContact, key) {
    const searchElement = document.querySelector('.friendSearch')
    if(newContact !== null) {
    localStorage.setItem(key, newContact);
    contacts.push(newContact);
    renderNewContact(newContact, messages);
    key++;
    searchElement.value = '';
    } 
}

function renderNewContact(contactName) {
    const contactsArea = document.querySelector('.contacts')
    const dialogElement = document.createElement('li');
    const dialogButton = document.createElement('button');
    const dialogLogo = document.createElement('div');
    const textElement = document.createElement('div');
    const nickElement = document.createElement('p');
    const lastMessElement = document.createElement('p')

    const optionsBut = document.createElement('but');
    const optionDots = document.createElement('img');
    const optionsList = document.createElement('div');
    const optionInfo = document.createElement('button');
    const optionDelete = document.createElement('button');
    

    dialogElement.classList.add('contactli');
    dialogButton.classList.add('contact');
    dialogLogo.classList.add('contactlogo')
    textElement.classList.add('dialoginfo')
    nickElement.classList.add('nick');
    lastMessElement.classList.add('lastmessage');

    optionsBut.classList.add('contactmenu');
    optionDots.classList.add('dots')
    optionsList.classList.add('contactoption');
    optionInfo.classList.add('infoBut');
    optionDelete.classList.add('deleteBut');

    optionDots.src = "img/dots.png"

    dialogElement.id = contactName;
    dialogButton.id = 'but' + contactName;
    nickElement.id = 'nick' + contactName;
    lastMessElement.id = 'last' + contactName;
    optionsBut.id = 'menu' + contactName;
    optionsList.id = 'opt' + contactName; 
    optionInfo.id = 'info' + contactName;
    optionDelete.id = 'del' + contactName;

    nickElement.innerHTML = contactName;
    lastMessElement.innerHTML = 'Hello!';
    optionInfo.innerHTML = 'Info';
    optionDelete.innerHTML = 'Delete'

    contactsArea.append(dialogElement);
    dialogElement.append(dialogButton);
    dialogButton.append(dialogLogo);
    dialogButton.append(textElement);
    textElement.append(nickElement);
    textElement.append(lastMessElement);
    
    dialogElement.append(optionsBut);
    optionsBut.append(optionDots);
    dialogElement.append(optionsList);
    optionsList.append(optionInfo);
    optionsList.append(optionDelete);
}

function deleteContact(deletedContact, contacts) {
    contacts.forEach(function(contact, key) {
        if (contact === deletedContact) {
            contacts.splice(key, 1);
        }
    });
    return contacts;
}

function removeContact(contact) {
    let removedContact = document.getElementById(contact);
    removedContact.remove();
}

function updContactStorage(contacts, key) {
    for (let i = 0; i <= key-1; i++) {
        localStorage.removeItem(i);
    }
    key = 0;
    contacts.forEach(function(contact, i) {
        localStorage.setItem(i, contact);
        key++;
    });
    return key;
}

function updMessageStorage(sender, reciever, key) {
    console.log(key);
    for (let i = 0; i <= key; i++)
    {
        localStorage.removeItem(sender + reciever + i);
    }
}