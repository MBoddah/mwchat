function getHistory(sender, reciever) {
    let key = 0;
    let chatHistory = [];
    if(localStorage.getItem(sender + reciever + key) != null) {
        while(localStorage.getItem(sender + reciever + key) != null) {
            let historyMessage = {
                sender,
                reciever,
                text: localStorage.getItem(sender + reciever + key)
            };
            chatHistory.push(historyMessage);
            renderMessage(historyMessage);
            key++;
        }
        return chatHistory;
    } else {
        return [];
    }
}


function sendMessage(area, messages, sender, reciever, key) {
    let message = {
        sender,
        reciever,
        text: area.value
    };
    messages.push(message);
    localStorage.setItem(message.sender + message.reciever + key, message.text);
    sendMessageOnServer(message);
    renderMessage(message);
    insertLastMessage(message);
    area.value = '';
    return message;  
}


function renderMessage(messageObject) {
    const messageElement = document.createElement('p');
    const chatElement = document.querySelector('.chat');
    messageElement.classList.add('mymessages');
    messageElement.innerHTML = messageObject.text;
    chatElement.append(messageElement);
}

function insertLastMessage(messageObject) {
    let dialog = document.getElementById('last'+messageObject.reciever);
    dialog.innerHTML = messageObject.sender + ': ' + messageObject.text;
}

function fillLastMessages(contacts, sender) {
    contacts.forEach(function(contact) {
        let key = 0;
        let last_mess;
        if(localStorage.getItem(sender + contact + key) != null) {
            while(localStorage.getItem(sender + contact + key) != null) {
                last_mess = localStorage.getItem(sender + contact + key);
                key++;
            }
            insertLastMessage({
                sender,
                reciever: contact,
                text: last_mess})
        }   
    });
}

function cleanChat(messages) {
    messages.forEach(function() {
        let deletedMessage = document.querySelector('.mymessages')
        if(deletedMessage) {
            deletedMessage.remove();
        }
    })
    messages = []
    return messages;
}

function updMessageStorage(sender, reciever, key) {
    for (let i = 0; i <= key; i++)
    {
        localStorage.removeItem(sender + reciever + i);
    }
}

function sendMessageOnServer(message) {
    $.ajax({
        url: "inc/sendMessage.php",
        type: "POST",
        data: ({
            sender: message.sender,
            reciever: message.reciever,
            text: message.text
        }),
        dataType: "html",
        success: function(data){
            if (data == 2){
                alert('Ошибка полей ввода');
            }
            else if(data == 1){
                alert('Ошибка добавления сообщения на сервер');
            }
        }
    });
}