window.addEventListener('load', function () {
    firstAjaxDemo();
});


let firstAjaxDemo = function () {
    const pbc = document.querySelector("#postContainer");
    let xhr = new XMLHttpRequest();
    let url = "https://reqres.in/api/users?page=2";
    xhr.open("GET", url);


    xhr.onload = function () {
        let rt = xhr.responseText;
        let mj = JSON.parse(rt);

        for (let i = 0; i < mj.data.length; i++) {
            const newdiv = pbc.children[0].cloneNode(true);
           
            newdiv.children[0].innerHTML = "Name:-"+mj.data[i].first_name+"<br>"+"Email:-"+mj.data[i].email+ "<img src="+mj.data[i].avatar+">" ;  
            
            newdiv.style.display="block";
             pbc.append(newdiv);
        }


    }
    xhr.send();

}
