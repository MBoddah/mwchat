let data_key = 0;
let contact_key = 0;
const userLogin = 'Dima';
let recieverLogin = '';
const chatElement = document.querySelector('.chat');
const messageArea = document.querySelector('.mess_area');
const contactsArea = document.querySelector('.contacts')
const chatBar = document.querySelector('.chatbar')
const searchElement = document.querySelector('.friendSearch')
let chatData = getHistory();
let contactList = getContacts();
fillLastMessages()
