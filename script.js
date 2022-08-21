const inputTexto = document.querySelector("#codificar")
const mensagem = document.querySelector("#copiar")

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
   
}
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i =0;i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i =0;i<matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    
    }
    return stringDesencriptada;
}
function copiar() {
    let textoCopiar = document.querySelector('#copiar');
    textoCopiar.select();
    navigator.clipboard.writeText(textoCopiar.value)
    alert("mensagem copiada: " + textoCopiar.value)
}