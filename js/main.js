function main() {

    let data_key = 0;
    let contact_key = 0;
    const userLogin = 'Dima';
    let recieverLogin = 'Max';

    const butSend = document.getElementById('buttonSend');
    const chatBar = document.querySelector('.chatbar')  
    const messageArea = document.querySelector('.mess_area');
    const inputContact = document.getElementById('inputContact');
    const authorizationButton = document.querySelector('.logBut');
    const registrationButton = document.querySelector('.regBut');

    messageArea.disabled = true;
    let chatData = getHistory(userLogin, recieverLogin);
    data_key = chatData.length;     
    let contactList = getContacts(contact_key);
    let contactButtons = getContactButtons(contactList);

    contact_key = contactList.length;   
    fillLastMessages(contactList, userLogin);

    authorizationButton.onclick = () => modalFunction('authorization');
    registrationButton.onclick = () => modalFunction('registration');

    contactButtons.forEach(function(but, i) {
        activateContactButton(but, contactList[i]);
    })

    butSend.onclick = function() {
        if (messageArea.value) {
            sendMessage(messageArea, chatData, userLogin, recieverLogin, data_key);
            data_key++;
        }
    };

    inputContact.onchange = function() {
        recieverLogin = inputContact.value;
        addContact(contactList, chatData, recieverLogin, contact_key); 
        let newContactButton = document.getElementById('but'+recieverLogin)
        activateContactButton(newContactButton, contactList[contact_key]);
        contact_key++;
    }

    function activateContactButton(button, contact) {
        button.onclick = function() {
            messageArea.disabled = false;
            cleanChat(chatData);
            recieverLogin =  contact;
            chatData = getHistory(userLogin,  contact)
            data_key = chatData.length;
            chatBar.innerHTML =  contact;

            highlightContact(recieverLogin, contactList);
        }

        const menuButton = document.getElementById('menu' +  contact);
        menuButton.onclick = function() {
            const options = document.getElementById('opt' +  contact);
            if (options.style.maxHeight) {
                options.style.maxHeight = null;
                options.style.border = 'none';
            } else {
                options.style.maxHeight = 100 + 'px';
                options.style.border = 'solid 1px #ddd';
            }
        }   
        
        const infoButton = document.getElementById('info' +  contact);
        infoButton.onclick = function() {
            const options = document.getElementById('opt' +  contact);
            alert('There`s no info yet, bro');
            options.style.maxHeight = null;
            options.style.border = 'none';
        }

        const cleanButton = document.getElementById('clean' +  contact);
        cleanButton.onclick = function() {
            const options = document.getElementById('opt' +  contact);
            const lastMess = document.getElementById('last' + contact);
            chatData = cleanChat(chatData);
            updMessageStorage(userLogin,  contact, data_key);
            data_key = chatData.length
            lastMess.innerHTML = 'Say Hello!';
            options.style.maxHeight = null;
            options.style.border = 'none';
        }

        const deleteButton = document.getElementById('del' + contact);
        deleteButton.onclick = function() {
            const options = document.getElementById('opt' +  contact);
            options.style.maxHeight = null;
            options.style.border = 'none';
            contactList = deleteContact(contact, contactList);
            updMessageStorage(userLogin,  contact, data_key);
            removeContact( contact);
            contact_key = updContactStorage(contactList, contact_key);
            messageArea.disabled = true;
        }
    }  
}      