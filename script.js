let email = null
let senha = null
let Csenha = null
let tx1 = document.getElementById("tx1")
let tx2 = document.getElementById("tx2")
let tx3 = document.getElementById("tx3")

let button1 = document.getElementById("button1")
let date = document.getElementById('date1')

function guardar(){

    email = document.getElementById("tx1").value;
    senha = document.getElementById("tx2").value;
    Csenha = document.getElementById("tx3").value;
    date = document.getElementById("date1").value.replaceAll("-", "/");

    if(senha === Csenha) {
        alert(
        "Email: " + email +
        "\nSenha: " + senha +
        "\nConfirmar senha: " + Csenha +
        "\nData de Nascimento: " + date
    )}
    
    else {
        alert("ERRO: as senhas são diferentes")
    }
}

function vizualizar(){

    let senha = document.getElementById("tx2")

    if (senha.type === "password"){
        senha.type = "text"
        button2.style.color = "aqua"
    }

    else {
        senha.type = "password"
        button2.style.color = "white"
    }
}

button2.onclick = vizualizar

function verificar() {


    if (tx1.value === "") {

        alert("preencha os espaços obrigatórios")
        tx1.style.borderColor = "red"

    }

    else if (!tx1.value.includes("@")) {
        alert("Está faltando o @ no email")
        tx1.style.borderColor = "red"
    }


    else if (tx2.value === "") {

        alert("preencha os espaços obrigatórios")
        tx2.style.borderColor = "red"
        

    }

    else if (tx3.value === "") {

        alert("preencha os espaços obrigatórios")
        tx3.style.borderColor = "red"
            

    }

    else if (date1.value === "") {
        alert("preencha os espaços obrigatórios")
        date1.style.borderColor = "red"
    }

    else if (tx2.value.length < 8 || tx3.value.length < 8) {
        alert("Sua senha tem que conter no minimo 8 digitos")
    }


    else if (((tx2.value.match(/[A-Z]/g) || []).length < 2 || tx3.value.match(/[A-Z]/g) || []).length < 2) {
        alert("Sua senha deve conter no minimo dois digitos em maiusculo")
    }

    else {
        guardar()
    }
}

button1.onclick = verificar

tx1.onclick = function() {
    tx1.style.borderColor = "#3498db"
}
tx2.onclick = function() {
    tx2.style.borderColor = "#3498db"
}
tx3.onclick = function() {
    tx3.style.borderColor = "#3498db"
}
date1.onclick = function() {
    date1.style.borderColor = "#3498db"
}

