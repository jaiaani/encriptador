const selectOp = document.getElementById('optionsBox');
const incrementador = document.querySelector('.incrementador')
const codificarOp = document.getElementById('codifica')
const decodificarOp = document.getElementById('decodifica')
const valorIncrementador = document.querySelector('#cifra')
const btn = document.querySelector('.button')

var alfabeto = 'abcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõçabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõç'

 
selectOp.addEventListener('change', displayIncremento)
codificarOp.addEventListener('change', codificarBtn)
decodificarOp.addEventListener('change', decodificarBtn)
btn.addEventListener('click', mensagemCriptografada)

function displayIncremento() {
    if (selectOp.value == 'cifraCesar') {
      incrementador.style.display = 'block'
    } else {
      incrementador.style.display = 'none'
    }
  }

 
function codificarBtn() {
    if (codificarOp.checked) {
      btn.value = 'Codificar'
    }
  } 

function decodificarBtn() {
    if (decodificarOp.checked) {
      btn.value = 'Decodificar'
    }
  }
  //base64

  function codificarBase64(elemento){
      var mensagem = document.querySelector('#msg').value
      var codificado64 = btoa(mensagem)
      document.querySelector('.text').innerHTML = codificado64

  }
  function decodificarBase64(elemento){
    var mensagem = document.querySelector('#msg').value
    var decodificado64 = atob(mensagem)
    document.querySelector('.text').innerHTML=decodificado64
   }

   //Cifra de Cesar

   function codificarCifraCesar(){
       var mensagem = document.querySelector('#msg').value
       var igualador = mensagem.toLowerCase()
       var codificadoCesar = ''

       for(var i = 0; i < igualador.length; i++){
           for (var j = 0; j < alfabeto.length; j++ ){
               if(igualador[i] == alfabeto[j]){
                   codificadoCesar += alfabeto[j + parseInt(valorIncrementador.value)]
                   break
               } else if(igualador[i] == ' ') {
                   codificadoCesar += ' '
                   break
               }
               
           }
       }
       document.querySelector('.text').innerHTML=codificadoCesar
    }

function decodificarCifraCesar() {
    var mensagem = document.querySelector('#msg').value
    var igualador = mensagem.toLowerCase()
    var decodificadoCesar = ''
  
    for (var i = 0; i < igualador.length; i++) {
      for (var j = alfabeto.length; j >= 0; j--) {
        if (igualador[i] == alfabeto[j]) {
          decodificadoCesar += alfabeto[j - parseInt(valorIncrementador.value)]
          break
        } else if (igualador[i] == ' ') {
          decodificadoCesar += ' '
          break
        }
      }
    }
    document.querySelector('.text').innerHTML=decodificadoCesar
  }

   function mensagemCriptografada(e){
    e.preventDefault()
       if(selectOp.value==='base64' && codificarOp.checked){
           codificarBase64()
       }
       else if(selectOp.value==='base64' && decodificarOp.checked){
           decodificarBase64()
       }
       else if(selectOp.value==='cifraCesar' && codificarOp.checked){
           codificarCifraCesar()
       }
       else if(selectOp.value==='cifraCesar' && decodificarOp.checked){
           decodificarCifraCesar()
       }
   }

