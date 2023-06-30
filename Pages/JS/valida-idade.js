function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuario não é maior de idade');
    }
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}

export default ehMaiorDeIdade