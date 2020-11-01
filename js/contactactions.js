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
    if ((newContact !== null) && (contacts.indexOf(newContact) === -1)) {
    localStorage.setItem(key, newContact);
    contacts.push(newContact);
    renderNewContact(newContact, messages);
    key++;
    searchElement.value = '';
    }  else { 
        if (contacts.indexOf(newContact) !== -1)  {
            alert('Contact already exists!');
        }
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
    const optionClean = document.createElement('button');
    const optionDelete = document.createElement('button');
    

    dialogElement.classList.add('contactli', 'contactelem');
    dialogButton.classList.add('contact', 'contactelem');
    dialogLogo.classList.add('contactlogo')
    textElement.classList.add('dialoginfo')
    nickElement.classList.add('nick');
    lastMessElement.classList.add('lastmessage');

    optionsBut.classList.add('contactmenu');
    optionDots.classList.add('dots')
    optionsList.classList.add('contactoption');
    optionInfo.classList.add('infoBut');
    optionClean.classList.add('cleanBut');
    optionDelete.classList.add('deleteBut');

    optionDots.src = "img/dots.png"

    dialogElement.id = contactName;
    dialogButton.id = 'but' + contactName;
    nickElement.id = 'nick' + contactName;
    lastMessElement.id = 'last' + contactName;
    optionsBut.id = 'menu' + contactName;
    optionsList.id = 'opt' + contactName; 
    optionInfo.id = 'info' + contactName;
    optionClean.id = 'clean' + contactName;
    optionDelete.id = 'del' + contactName;

    nickElement.innerHTML = contactName;
    lastMessElement.innerHTML = 'Say Hello!';
    optionInfo.innerHTML = 'Info';
    optionClean.innerHTML = 'Clean History'
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
    optionsList.append(optionClean);
    optionsList.append(optionDelete);
}

function highlightContact (contact, contacts) {
    contacts.forEach(function(elem) {
        if (document.getElementById(elem).classList.contains('contactliLighted')) {
            document.getElementById(elem).classList.toggle('contactliLighted')
            document.getElementById('but' + elem).style.color = 'black';
            document.getElementById('last' + elem).style.color = 'grey';
        }
    })
    
    document.getElementById(contact).classList.toggle('contactliLighted')
    document.getElementById('but' + contact).style.color = 'white';
    document.getElementById('last' + contact).style.color = 'white';
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

function slideWindow() {
    const dialogs = document.querySelector('.dialogdiv');
    const chat = document.querySelector('.chatwindow');

    dialogs.classList.toggle('slideWindow')
    chat.classList.toggle('slideWindow')
}