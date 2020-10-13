let data_key = 0;
const userLogin = 'Dima';
const recieverLogin = 'Anton';
const chatElement = document.querySelector('.chat');
const messageArea = document.querySelector('.mess_area');
const chatData = getHistory();

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
    chatElement.appendChild(messageElement);
}
