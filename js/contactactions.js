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

function addContact(newContact) {
    if(newContact !== null) {
    localStorage.setItem(contact_key, newContact);
    contactList.push(newContact);
    renderNewContact(newContact);
    contact_key++;
    searchElement.value = '';
    return newContact;
    } 
}

function deleteContact() {
    let deletedContact = prompt('','');

    contactList.forEach(function(contact, key) {
        if (contact === deletedContact) {
            contactList.splice(key, 1);
        }
    });
    removeContact(deletedContact);
    updContactStorage();
}

function renderNewContact(contactName) {
    const dialogElement = document.createElement('li');
    const dialogButton = document.createElement('button');
    const dialogLogo = document.createElement('div');
    const textElement = document.createElement('div');
    const nickElement = document.createElement('p');
    const lastMessElement = document.createElement('p')

    dialogElement.classList.add('contactli');
    dialogButton.classList.add('contact');
    dialogLogo.classList.add('contactlogo')
    textElement.classList.add('dialoginfo')
    nickElement.classList.add('nick');
    lastMessElement.classList.add('lastmessage');
    dialogElement.id = contactName;
    nickElement.id = 'nick'+contactName;
    lastMessElement.id = 'last'+contactName;

    nickElement.innerHTML = contactName;
    lastMessElement.innerHTML = 'Hello!';
    dialogButton.onclick = function() {
        switchChat(contactName);
    };
    contactsArea.append(dialogElement);
    dialogElement.append(dialogButton);
    dialogButton.append(dialogLogo);
    dialogButton.append(textElement);
    textElement.append(nickElement);
    textElement.append(lastMessElement);
}

function removeContact(contactID) {
    let removedContact = document.getElementById(contactID);
    removedContact.remove();
}

function updContactStorage() {
    for (let i = 0; i <= contact_key-1; i++) {
        localStorage.removeItem(i);
       // localStorage.setItem(i, contactList[i]);
    }
    contact_key = 0;
    contactList.forEach(function(contact, key) {
        localStorage.setItem(key, contact);
        contact_key++;
    });
}