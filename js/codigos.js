function altera() {
    let alterar = document.getElementById('alterar').value;
    console.log(alterar);
    document.getElementById('titulo').innerHTML = alterar;
}

function buscar() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    alert("nome: "+nome+" email: "+email);
}