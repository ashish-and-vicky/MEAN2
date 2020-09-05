let register = () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#mobile").value;

    let url = 'http://localhost:3000/adduser?username=${username}&password=${password}';

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload() => {
        const res = chr.responseText;
        console.log(res);
        document.querySelector("#username").value = "";
        document.querySelector("#password").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#mobile").value = "";
    };
    xhr.send();
}
