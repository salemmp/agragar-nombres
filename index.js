document.querySelector(".agregar").addEventListener("click",()=>{
    let app = document.querySelector(".app");
    const data = document.querySelector(".data").value;
    
    if (data == "" ){
        const btn = document.querySelector("#botones");
        const p = document.createElement("P");
        const txt = document.createTextNode("Completa el formulario pls");
        p.appendChild(txt);
        btn.appendChild(p);
        setTimeout(()=>{
            p.remove();
        },1000);

    }else{
        const btn = document.querySelector("#botones");
        const contenido =  document.createTextNode(data);
        const tarjeta = document.createElement("DIV");
        tarjeta.classList.add("card");
        tarjeta.appendChild(contenido);
        app.appendChild(tarjeta);
        btn.reset();
    }
})

document.querySelector(".eliminar").addEventListener("click",()=>{
    let app = document.querySelector(".app");
    let ultimohijo = app.lastElementChild;
    app.removeChild(ultimohijo);
})