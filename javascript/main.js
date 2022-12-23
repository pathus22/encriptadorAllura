function encriptar()
{
    textbox = document.getElementById("texto_a_ingresar");
    lblresultado = document.getElementById("texto_a_ingresarB");
    
    var input = textbox.value;
    if(input == "")
        return;


    if(inputEsValido(input))
    {
        var textoCodificado = "";

        for (let i = 0; i < input.length; i++) 
        {
            const letra = input[i];

            textoCodificado += letraACodigo(letra);
        }

        lblresultado.textContent = textoCodificado;
    }
    else{
        window.alert("El texto no es valido. Recuerde que solo puede usar minusculas y letras sin acentos.")
    }
        
    
}

function desencriptar()
{
    texto = document.getElementById("texto_a_ingresar").value;

    if(texto == "")
        return;
    
    if(inputEsValido(texto))
    {
        textoA = texto.replace(/ai/g,"a");
        textoB = textoA.replace(/enter/g,"e");
        textoC = textoB.replace(/imes/g,"i");
        textoD = textoC.replace(/ober/g,"o");
        textoE = textoD.replace(/ufat/g,"u");

        lblresultado = document.getElementById("texto_a_ingresarB");
        lblresultado.textContent = textoE;
    }
    else
    {
        window.alert("El texto no es valido. Recuerde que solo puede usar minusculas y letras sin acentos.")
    }
}

function copiar()
{  
    var aux = document.createElement("textarea");
    aux.innerHTML = document.getElementById("texto_a_ingresarB").innerHTML;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

function clickEnTextBox()
{
    mensajeinicial = "Ingrese su mensaje y pulse el boton para encriptar o desencriptar..."
    textbox = document.getElementById("texto_a_ingresar");
    if(textbox.value == mensajeinicial)
    {
        textbox.value = "";
        focus(textbox);
    }
}

function inputEsValido(input)
{
    var format = /[{}"\\|<>áéíóúùìòàèÀÈÌÒÙÁÉÍÓÚ`]+/;
    if(input == input.toLowerCase())
        return !format.test(input);

    return false;
}

function letraACodigo(letra)
{
    switch (letra) {
        case 'e':
            return "enter";
        case 'i':
            return "imes";
        case 'a':
            return "ai";
        case 'o':
            return "ober";
        case "u":
            return "ufat";
        default:
            return letra;
    }
}