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
    const contactElement = document.createElement('li');
    const contactButton = document.createElement('button');
    contactElement.classList.add('contactli');
    contactElement.id = contactName;
    contactButton.classList.add('contact');
    contactButton.innerHTML = contactName;
    contactButton.onclick = function() {
        switchChat(contactName);
    };
    contactsArea.append(contactElement);
    contactElement.append(contactButton);
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