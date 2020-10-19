function enterside() {
    const registrationDiv = document.querySelector('.registrationdiv');
    const enterDiv = document.querySelector('.enterdiv');
    const registrationTab = document.querySelector('#regtab');
    const enterTab = document.querySelector('#entertab');

    registrationDiv.style.display = 'none';
    enterDiv.style.display = 'inline';
    registrationTab.style.zIndex = '0';
    enterTab.style.zIndex = '2';
}

function registrationside() {
    const registrationDiv = document.querySelector('.registrationdiv');
    const enterDiv = document.querySelector('.enterdiv');
    const registrationTab = document.querySelector('#regtab');
    const enterTab = document.querySelector('#entertab');

    registrationDiv.style.display = 'inline';
    enterDiv.style.display = 'none';
    registrationTab.style.zIndex = '2';
    enterTab.style.zIndex = '0';
}