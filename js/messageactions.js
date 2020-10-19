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
}

function renderMessage(messageObject) {
    const messageElement = document.createElement('p');
    messageElement.classList.add('mymessages');
    messageElement.innerHTML = messageObject.text;
    chatElement.append(messageElement);
}


function cleanChat() {
    chatData.forEach(function(message, key) {
        let deletedMessage = document.querySelector('.mymessages')
        deletedMessage.remove();
    })
}

function switchChat(chat) {
    data_key = 0;
    recieverLogin = chat;       
    cleanChat();
    chatData = getHistory();  
}