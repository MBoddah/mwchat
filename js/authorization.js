function authorizationСheck(){
    if(localStorage.getItem('user')){
        return 1;
    }
    return 0;
}

function afterRegistration(data) {
    alert(data);
    if (data == 1){
        alert('Логин занят');
    }
    else if(data == 0){
        alert('Произошла неизвестная ошибка, обратитесь к администратору');
    }
    else {
        localStorage.setItem('user', data);
        alert('Вы зарегистрировались как ' + data);
    }
}

function afterAuthorization(data){
    alert(data);
    if(data == 1){
        alert('Данный логин не существует');
    }
    else if(data == 0){
        alert('Неверный пароль');
    }
    else{
        localStorage.setItem('user', data);
        alert('Вы вошли как ' + data);
    }
}