isnotfull = true;


function send_msg(){
    const nome = document.getElementById("nome").value;
    const e_mail = document.getElementById("e-mail").value;
    const msg = document.getElementById("mensagem").value;

    let alerta = "";

    if (nome == "" || !/\S/.test(nome)){
        alerta += "Preencha seu nome!\r\n" 
        isnotfull = true;
    }
    if (e_mail == "" || !/\S/.test(e_mail)){
        alerta += "Preencha seu e-mail!\r\n" 
        isnotfull = true;
    }
    if (msg == "" || !/\S/.test(msg)){
        alerta += "Insira sua mensagem!\r\n" 
        isnotfull = true;
    }

    if(alerta == ""){
        console.log("Mensagem enviada!")
    }else{
        alert(alerta)
        console.log(alerta)
    }

}

function to_top(){
    window.scrollTo(0,0)
}