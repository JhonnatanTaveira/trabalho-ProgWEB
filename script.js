function trocaDisplayCorpo(){
    var divLogin = document.getElementById("corpoLogin");
    var divEsqueciSenha = document.getElementById("corpoEsqueciSenha");
    if(divLogin.style.display != "none"){
        divLogin.style.display = "none";
        divEsqueciSenha.style.display = "flex";
    }
    else {
        divLogin.style.display = "flex";
        divEsqueciSenha.style.display = "none";
    }
}