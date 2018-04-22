data = {
    login: null,
    password: null
};

let open = document.getElementById('open');

open.onclick = openNext;
function openNext() {
var login = document.getElementById("ins").value;
var password = document.getElementById("pas").value;
data.login = login;
data.password = password;
   
    if(data) {
        popUP()
    }
    return false;
}

function checkUser(data) {

    fetch('http://localhost:3000/login', {
        headers: {
            'Assept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then((res) => {
       return res.json();
    })
    .then((user) => {
        if (user.login) {
            let content = document.getElementById('content');
            content.innerHTML = user.data;
            var nameElem = document.createElement('div');
            nameElem.innerHTML = user.login;
            content.appendChild(nameElem);
            window.history.pushState('title', 'Title', 'hello.html');            
        } else {
            alert('Такой пользователь не найден!')
        }
    })
    .catch((error) => {
        console.log('request failed', error)
     })
}


function popUP() {

    let div = document.createElement('div');
    div.className = "background";
    let popUp = document.createElement('div');
    popUp.className = "loading";
    let popUpText = document.createElement('span');
    popUpText.innerHTML = "Ждем ответа от сервера";
    popUp.appendChild(popUpText);
    div.appendChild(popUp);
    document.body.appendChild(div);

    setTimeout(() => {
       div.parentNode.removeChild(div);

       checkUser(data);

    }, 5000);
}