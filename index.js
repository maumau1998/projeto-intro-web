/*///////////////////////////////////////    SEMANA 01   //////////////////////////////////////////*/ 

const musica_item =[
    // Titulo,
    // Letra,
    // Melodia,
    // Harmonia,
    // Ritmo,
    // Tempo 
    ]
   /*(1 e 2 e 5)*/ const nome = "Jorge e Mateus".toUpperCase(); //tem que ser letra maiúsculas
    const idadeJorge = 39;
    const idadeMateus = 36;
    const maisDeCemMuscas = true;
    const arrayString= ["Dupla sertaneja","primeiro DVD/CD (2007)","brasileiros"]
    
    const nome2 = "Luan Santana".toUpperCase();
    const idadeLuan = 31;
    const maisDeCemMuscas2 = true;
    const arrayString2 = ["Sertanejo universitário","primeiro DVD (2009)", "brasileiro"]
    
    const nome3 = "Zé Neto e Cristiano".toUpperCase();
    const idadeZe = 32;
    const idadeCris= null;
    const maisDeCemMuscas3 = true;
    const arrayString3 = ["Dupla sertaneja","primeiro DVD/CD (2015)", "brasileiros"]
    
    const nome4 = "João Gomes".toUpperCase();
    const idadeJoao = 20;
    const maisDeCemMuscas4 = false;
    const arrayString4 = ["Sertanejo universitário","primeiro DVD/CD (2022)","brasileiros"]
 
    console.log("PRIMEIRA SEMANA")
 /*(3)*/const mediaValores = 39 + 36 + 31 + 32 + 20;
 console.log("(3) Soma de todos os valores:", mediaValores)
 const resultadoMedia = mediaValores / 5;
 console.log("(3) Média da soma:",resultadoMedia)
 
 /*(4)*/const booleanasVerdadeiras= maisDeCemMuscas && maisDeCemMuscas2 && maisDeCemMuscas3 && maisDeCemMuscas4;
 console.log("(4) Todas as booleanas são verdadeiras?",booleanasVerdadeiras);
 
 /*(6)*/ console.log("(6 JM)","Nome:",nome)
 /*(6)*/ console.log("(6 J)","Idade:",idadeJorge)
 /*(6)*/ console.log("(6 M)","Idade:",idadeMateus)
 /*(6)*/ console.log("(6)","Músicas:",maisDeCemMuscas)
 /*(6)*/ console.log("(6)",arrayString)
 
 /*(6)*/ console.log("(6)","Nome:",nome2)
 /*(6)*/ console.log("(6)","Idade:",idadeLuan)
 /*(6)*/ console.log("(6)","Músicas:",maisDeCemMuscas2)
 /*(6)*/ console.log("(6)",arrayString2)
 
 /*(6)*/ console.log("(6 ZC)","Nome:",nome3)
 /*(6)*/ console.log("(6 Z)","Idade:",idadeZe)
 /*(6)*/ console.log("(6 C)","Idade:",idadeCris)
 /*(6)*/ console.log("(6)","Músicas:",maisDeCemMuscas3)
 /*(6)*/ console.log("(6)",arrayString3)
 
 /*(6)*/ console.log("(6 J)","Nome:",nome4)
 /*(6)*/ console.log("(6 J)","Idade:",idadeJoao)
 /*(6)*/ console.log("(6)","Músicas:",maisDeCemMuscas4)
 /*(6)*/ console.log("(6)",arrayString4)
 
 
    /////////////////////////////////// Item com Objeto (SEGUNDA SEMANA)  ////////////////////////////
   console.log("SEGUNDA SEMANA")
 /*(1)*/let objeto1 = {
       nome: "JORGE E MATEUS",
       idades: [39, 36],
       maisDeCemMuscas: true,
    }
 
 /*(1)*/let objeto2 = {
       nome: "LUAN SANTANA",
       idadeLuan: 31,
       maisDeCemMuscas: true,
    }
 
 /*(1)*/let objeto3 = {
       nome: "ZÉ NETO E CRISTIANO",
       idades: [32, 31],
       maisDeCemMuscas: true,
    }
 
 /*(1)*/let objeto4 = {
       nome: "JOÃO GOMES",
       idadeJoao: 20,
       maisDeCemMuscas: false,
    }
 
 /*(2)*/ const arrayVazio2 = [];
 
 /*(3)*/arrayVazio2.push(objeto1, objeto2, objeto3, objeto4);
 console.log("(3)",arrayVazio2)
 
 /*(4)*/
 /*(5)*/
 
 /*///////////////////////////////// TERCEIRA SEMANA  ///////////////////////////*/ 
 let listaDoLaco;
 let listaDoLaco2;
 let listaDoLaco3;
 for(let i=3; h=0,j=1,n=2, i<arrayString.length; i++){  
   listaDoLaco = arrayString[h]
   listaDoLaco2 = arrayString[j]
   listaDoLaco3 = arrayString[n]
   console.log(listaDoLaco, listaDoLaco2, listaDoLaco3)
 }
 /////////////////////////// Criando os elementos do cantor 1   ///////////////////////////////////////
 const ulCantor1 = document.createElement("ul")
 const referenciaUl= document.querySelector("#ul1")
 referenciaUl.insertAdjacentElement("afterbegin", ulCantor1)
 const liCantor1 = document.createElement("li")
 const liIdadeCantor = document.createElement("li")
 const liMusicas = document.createElement("li")
 const aCantor1 = document.createElement("a")
 const nomeCantor1 = document.createTextNode(objeto1.nome)
 const idadeCantor = document.createTextNode(`Idade : ${objeto1.idades}`)
 const quantidadeMusica = document.createTextNode("Músicas : 335")
 aCantor1.setAttribute("href", "https://www.instagram.com/jorgeemateus/")
 aCantor1.setAttribute("target", "_blank")
 aCantor1.appendChild(nomeCantor1)
 liCantor1.appendChild(aCantor1)
 liIdadeCantor.appendChild(idadeCantor)
 liMusicas.appendChild(quantidadeMusica)
 let elementoRefencia = document.querySelector("#ul-cantor1")
 elementoRefencia.insertAdjacentElement("afterbegin", liCantor1)
 elementoRefencia.insertAdjacentElement("beforeend", liIdadeCantor)
 elementoRefencia.insertAdjacentElement("beforeend", liMusicas)
 
 /////////////////////////////////////////////////////////
 /////////////////////////// Criando os elementos do cantor 2   ///////////////////////////////////////
 const ulCantor2 = document.createElement("ul")
 const referenciaUl2= document.querySelector("#lista2")
 referenciaUl2.insertAdjacentElement("afterbegin", ulCantor1)
 const liCantor2 = document.createElement("li")
 const liIdadeCantor2 = document.createElement("li")
 const liMusicas2 = document.createElement("li")
 const aCantor2 = document.createElement("a")
 const nomeCantor2 = document.createTextNode(objeto2.nome)
 const idadeCantor2 = document.createTextNode(`Idade : ${objeto2.idadeLuan}`)
 const quantidadeMusica2 = document.createTextNode("Músicas : 330")
 aCantor2.setAttribute("href", "https://www.instagram.com/luansantana/")
 aCantor2.setAttribute("target", "_blank")
 aCantor2.appendChild(nomeCantor2)
 liCantor2.appendChild(aCantor2)
 liIdadeCantor2.appendChild(idadeCantor2)
 liMusicas2.appendChild(quantidadeMusica2)
 let elementoRefencia2 = document.querySelector("#ul-cantor2")
 elementoRefencia2.insertAdjacentElement("afterbegin", liCantor2)
 elementoRefencia2.insertAdjacentElement("beforeend", liIdadeCantor2)
 elementoRefencia2.insertAdjacentElement("beforeend", liMusicas2)
 
 /////////////////////////////////////////////////////////
 /////////////////////////// Criando os elementos do cantor 3   ///////////////////////////////////////
 const ulCantor3 = document.createElement("ul")
 const referenciaUl3= document.querySelector("#lista3")
 referenciaUl3.insertAdjacentElement("afterbegin", ulCantor3)
 const liCantor3 = document.createElement("li")
 const liIdadeCantor3 = document.createElement("li")
 const liMusicas3 = document.createElement("li")
 const aCantor3 = document.createElement("a")
 const nomeCantor3 = document.createTextNode(objeto3.nome)
 const idadeCantor3 = document.createTextNode(`Idade : ${objeto3.idades}`)
 const quantidadeMusica3 = document.createTextNode("Músicas : 181")
 aCantor3.setAttribute("href", "https://www.instagram.com/zenetoecristiano/")
 aCantor3.setAttribute("target", "_blank")
 aCantor3.appendChild(nomeCantor3)
 liCantor3.appendChild(aCantor3)
 liIdadeCantor3.appendChild(idadeCantor3)
 liMusicas3.appendChild(quantidadeMusica3)
 let elementoRefencia3 = document.querySelector("#ul-cantor3")
 elementoRefencia3.insertAdjacentElement("afterbegin", liCantor3)
 elementoRefencia3.insertAdjacentElement("beforeend", liIdadeCantor3)
 elementoRefencia3.insertAdjacentElement("beforeend", liMusicas3)
 
 /////////////////////////////////////////////////////////
 /////////////////////////// Criando os elementos do cantor 4   ///////////////////////////////////////
 const ulCantor4 = document.createElement("ul")
 const referenciaUl4= document.querySelector("#ul1")
 referenciaUl4.insertAdjacentElement("afterbegin", ulCantor4)
 const liCantor4 = document.createElement("li")
 const liIdadeCantor4 = document.createElement("li")
 const liMusicas4 = document.createElement("li")
 const aCantor4 = document.createElement("a")
 const nomeCantor4 = document.createTextNode(objeto4.nome)
 const idadeCantor4 = document.createTextNode(`Idade : ${objeto4.idadeJoao}`)
 const quantidadeMusica4 = document.createTextNode("Músicas : 52")
 aCantor4.setAttribute("href", "https://www.instagram.com/joaogomescantor/")
 aCantor4.setAttribute("target", "_blank")
 aCantor4.appendChild(nomeCantor4)
 liCantor4.appendChild(aCantor4)
 liIdadeCantor4.appendChild(idadeCantor4)
 liMusicas4.appendChild(quantidadeMusica4)
 let elementoRefencia4 = document.querySelector("#ul-cantor4")
 elementoRefencia4.insertAdjacentElement("afterbegin", liCantor4)
 elementoRefencia4.insertAdjacentElement("beforeend", liIdadeCantor4)
 elementoRefencia4.insertAdjacentElement("beforeend", liMusicas4)
 
 /////////////////////////////////////////////////////////
 let barraInput= document.querySelector("#button")
 let buttonClick = document.querySelector("#inputClick")
 let sumirSection = document.querySelector("#lista1")
 let sumirSection2 = document.querySelector("#lista2")
 let sumirSection3 = document.querySelector("#lista3")
 let sumirSection4 = document.querySelector("#lista4")
 let tabela = document.querySelector("#form2")
 let paginaCorpo = document.querySelector("body")
 let headPagina = document.querySelector("header")
 let lampada = document.querySelector("#lampada")
 let lampada2 = document.querySelector("#lampada2")
 let cadastro = document.querySelector("#btn-cadastro")
 let usuario = document.querySelector("#btn-entrar")
 let main1 = document.querySelector("#main1")
 let main2 = document.querySelector("#main2")
 let sairCadastro = document.querySelector("#botao-sair")
 let inputCadastro = document.querySelector("#navegar")
 let section1 = document.querySelector(".section1")
 let section2 = document.querySelector(".section2")
 let section3 = document.querySelector(".section3")
 let section4 = document.querySelector(".section4")
 
 
 // recarregar a página quando clicar novamente no input
 barraInput.addEventListener("click", () => {
     if(arrayVazio.length > 1){
        location.reload()
     }
    
  })
 buttonClick.addEventListener("click", () => {
     if(arrayVazio.length > 1){
        location.reload()
     }
    
  })
 
 
 //lampadas para deixar o body no modo day e night
 lampada.addEventListener("click", function(){
    paginaCorpo.style.backgroundColor = "white"
    headPagina.style.backgroundColor = "gray"
    headPagina.style.borderBottom = "4px solid black"
    lampada.style.display = "none"
    lampada2.style.display = "block"
 })
 lampada2.addEventListener("click", function(){
    paginaCorpo.style.backgroundColor = "rgb(30, 29, 29)"
    headPagina.style.backgroundColor = "black"
    headPagina.style.borderBottom = "2px solid white"
    lampada.style.display = "block"
    lampada2.style.display = "none"
 })
 // evento para ocultar o demais cantores e trazer a tabela
 const arrayVazio= [1]
 buttonClick.addEventListener("click", function aparecer(){
    const name = document.querySelector("#button")
    const valorDigitado = name.value.toLowerCase(); 
    arrayVazio.push(1)
    console.log(arrayVazio)
    barraInput.style.cursor = "none"
   
    if(valorDigitado === "Luan Santana"|| valorDigitado === "luan santana"){
       sumirSection.style.display = "none";
       sumirSection3.style.display = "none";
       sumirSection4.style.display = "none";
       sumirSection2.style.display = "0";
       tabela.style.display = "block";
       let buttonResetarTabela = document.querySelector("#buttonResetarTabela")
       buttonResetarTabela.style.display="none"
       let tituloL = document.querySelector("#a1-jorge-t"); tituloL.innerText = "Luan Santana"
       let ttitulo = document.querySelector(".i-th2"); ttitulo.innerText = "Músicas em breve"
       let nomeMusica = document.querySelector("#microfone1"); nomeMusica.style.display = "none"
       let nomeMusica2 = document.querySelector("#microfone2"); nomeMusica2.style.display = "none"
       let nomeMusica3 = document.querySelector("#microfone3"); nomeMusica3.style.display = "none"
       let nomeMusica4 = document.querySelector("#microfone4"); nomeMusica4.style.display = "none"
       let nomeMusica5 = document.querySelector("#microfone5"); nomeMusica5.style.display = "none"
       let nomeMusica6 = document.querySelector("#microfone6"); nomeMusica6.style.display = "none"
       let nomeMusica7 = document.querySelector("#microfone7"); nomeMusica7.style.display = "none"
       let nomeMusica8 = document.querySelector("#microfone8"); nomeMusica8.style.display = "none"
       let nomeMusica9 = document.querySelector("#microfone9"); nomeMusica9.style.display = "none"
       let nomeMusica10 = document.querySelector("#microfone10"); nomeMusica10.style.display = "none"
 }else if(valorDigitado === "Jorge e Mateus"|| valorDigitado === "jorge e mateus"){
       sumirSection2.style.display = "none";
       sumirSection3.style.display = "none";
       sumirSection4.style.display = "none";
       sumirSection.style.display = "0";
       tabela.style.display = "block";
 
    }else if(valorDigitado === "Zé Neto e Cristiano"|| valorDigitado === "zé neto e cristiano"){
       sumirSection.style.display = "none";
       sumirSection2.style.display = "none";
       sumirSection4.style.display = "none";
       sumirSection3.style.display = "0";
       tabela.style.display = "block";
       let buttonResetarTabela = document.querySelector("#buttonResetarTabela")
       buttonResetarTabela.style.display="none"
       let tituloL = document.querySelector("#a1-jorge-t"); tituloL.innerText = "Zé Neto e Cristiano"
       let ttitulo = document.querySelector(".i-th2"); ttitulo.innerText = "Músicas em breve"
       let nomeMusica = document.querySelector("#microfone1"); nomeMusica.style.display = "none"
       let nomeMusica2 = document.querySelector("#microfone2"); nomeMusica2.style.display = "none"
       let nomeMusica3 = document.querySelector("#microfone3"); nomeMusica3.style.display = "none"
       let nomeMusica4 = document.querySelector("#microfone4"); nomeMusica4.style.display = "none"
       let nomeMusica5 = document.querySelector("#microfone5"); nomeMusica5.style.display = "none"
       let nomeMusica6 = document.querySelector("#microfone6"); nomeMusica6.style.display = "none"
       let nomeMusica7 = document.querySelector("#microfone7"); nomeMusica7.style.display = "none"
       let nomeMusica8 = document.querySelector("#microfone8"); nomeMusica8.style.display = "none"
       let nomeMusica9 = document.querySelector("#microfone9"); nomeMusica9.style.display = "none"
       let nomeMusica10 = document.querySelector("#microfone10"); nomeMusica10.style.display = "none"
    
    }else if(valorDigitado === "João Gomes"|| valorDigitado === "joão gomes"){
       sumirSection.style.display = "none";
       sumirSection2.style.display = "none";
       sumirSection3.style.display = "none";
       sumirSection4.style.display = "0";
       tabela.style.display = "block";
       let buttonResetarTabela = document.querySelector("#buttonResetarTabela")
       buttonResetarTabela.style.display="none"
       let tituloL = document.querySelector("#a1-jorge-t"); tituloL.innerText = "João Gomes"
       let ttitulo2 = document.querySelector("#a2-jorge-t"); ttitulo2.innerText = "Músicas em breve"
       let nomeMusica = document.querySelector("#microfone1"); nomeMusica.style.display = "none"
       let nomeMusica2 = document.querySelector("#microfone2"); nomeMusica2.style.display = "none"
       let nomeMusica3 = document.querySelector("#microfone3"); nomeMusica3.style.display = "none"
       let nomeMusica4 = document.querySelector("#microfone4"); nomeMusica4.style.display = "none"
       let nomeMusica5 = document.querySelector("#microfone5"); nomeMusica5.style.display = "none"
       let nomeMusica6 = document.querySelector("#microfone6"); nomeMusica6.style.display = "none"
       let nomeMusica7 = document.querySelector("#microfone7"); nomeMusica7.style.display = "none"
       let nomeMusica8 = document.querySelector("#microfone8"); nomeMusica8.style.display = "none"
       let nomeMusica9 = document.querySelector("#microfone9"); nomeMusica9.style.display = "none"
       let nomeMusica10 = document.querySelector("#microfone10"); nomeMusica10.style.display = "none"
       
    }else{alert("🤷 Cantor não encontrado, digite os nomes corretamente...")}
    if(valorDigitado === ""){
       alert("Digite alguma coisa para que a busca aconteça (...)")
    }
 })
 /*//////////////////////////// cadastro /////////////////////////////////////// */
 
 cadastro.addEventListener("click", function(){
        main1.style.display = "none"
        main2.style.display = "block"
        alert("⚠️ O formulário de cadastro não possue o input de senha, isso porque não existe conexão com quaisquer banco de dados para armazenar as informações. ⚠️ ")
    
       
 })
 sairCadastro.addEventListener("click", function(){
    main1.style.display = "block"
    main2.style.display = "none"
    
 })
 
 /*//////////////////////////////////////////////////////////////////////////////////*/
 
 let cadastroRealizado = document.querySelector("#cadastro");
 let cadastroRealizado2 = document.querySelector("#cadastro2");
 let cadastroRealizado3 = document.querySelector("#cadastro3");
 let botaoInput = document.querySelector("#botao");
 let input1 = document.querySelector("#e-mail");
 let input2 = document.querySelector("#confirme-email");
 let cadastroP = document.querySelector("#cdt");
 let emailLogin = document.querySelector("#e-mail2");
 let passwordLogin = document.querySelector("#senha2");
 let botaoInput2 = document.querySelector("#botao2");
 let mensagem = document.querySelector("#cadastro");
 let listas = document.querySelector(".lista");
 let listas2 = document.querySelector(".lista2");
 let listas3 = document.querySelector(".lista3");
 let listas4 = document.querySelector(".lista4");
 let iframes = document.querySelector("#iframe")
 let iframes2 = document.querySelector("#iframe2")
 let iframes3 = document.querySelector("#iframe3")
 let iframes4 = document.querySelector("#iframe4")
 let mensagem2 = document.querySelector("#cadastro5")
 
 input2.addEventListener("keypress", function(e){
    const valorInput2 = 10;
    const valorDigitadoinput2= input2.value;
    if(valorDigitadoinput2.length === valorInput2){
       e.preventDefault()
    }
 })
 botaoInput.addEventListener("click", function(){
    const numRest = input1.value;
    const in1 = input1.value;
    const in2 = input2.value;
    if(numRest.includes("@gmail.coma")||numRest.includes("@gmail.comb")||numRest.includes("@gmail.comc")||numRest.includes("@gmail.comd")||numRest.includes("@gmail.come")||numRest.includes("@gmail.comf")||numRest.includes("@gmail.comg")||numRest.includes("@gmail.comh")||numRest.includes("@gmail.comi")||numRest.includes("@gmail.comj")||numRest.includes("@gmail.comk")||numRest.includes("@gmail.coml")||numRest.includes("@gmail.comm")||numRest.includes("@gmail.comn")||numRest.includes("@gmail.como")||numRest.includes("@gmail.comp")||numRest.includes("@gmail.comq")||numRest.includes("@gmail.comr")||numRest.includes("@gmail.coms")||numRest.includes("@gmail.comt")||numRest.includes("@gmail.comu")||numRest.includes("@gmail.comv")||numRest.includes("@gmail.comw")||numRest.includes("@gmail.comx")||numRest.includes("@gmail.comy")||numRest.includes("@gmail.comz")||numRest.includes("@gmail.comaA")||numRest.includes("@gmail.comB")||numRest.includes("@gmail.comC")||numRest.includes("@gmail.comD")||numRest.includes("@gmail.comE")||numRest.includes("@gmail.comF")||numRest.includes("@gmail.comG")||numRest.includes("@gmail.comH")||numRest.includes("@gmail.comI")||numRest.includes("@gmail.comJ")||numRest.includes("@gmail.comK")||numRest.includes("@gmail.comL")||numRest.includes("@gmail.comM")||numRest.includes("@gmail.comN")||numRest.includes("@gmail.comO")||numRest.includes("@gmail.comP")||numRest.includes("@gmail.comQ")||numRest.includes("@gmail.comR")||numRest.includes("@gmail.comS")||numRest.includes("@gmail.comT")||numRest.includes("@gmail.comU")||numRest.includes("@gmail.comV")||numRest.includes("@gmail.comW")||numRest.includes("@gmail.comX")||numRest.includes("@gmail.comY")||numRest.includes("@gmail.comZ")||numRest.includes("@gmail.com'")||numRest.includes("@gmail.com!")||numRest.includes("@gmail.com@")||numRest.includes("@gmail.com#")||numRest.includes("@gmail.com$")||numRest.includes("@gmail.com%")||numRest.includes("@gmail.com¨")||numRest.includes("@gmail.com&")||numRest.includes("@gmail.com*")||numRest.includes("@gmail.com+")||numRest.includes("@gmail.com-")||numRest.includes("@gmail.com<")||numRest.includes("@gmail.com;")||numRest.includes("@gmail.com~")||numRest.includes("@gmail.com]")||numRest.includes("@gmail.com}")||numRest.includes("@gmail.com.")||numRest.includes("@gmail.com?")||numRest.includes("@gmail.com_")||numRest.includes("@gmail.com2")||numRest.includes("@gmail.com4")||numRest.includes("@gmail.com6")||numRest.includes("@gmail.com8")){
       alert("E-mail está incorreto, verifique novamente !!!")
  
 }else if(numRest.includes("@gmail.com")){
           if(in1 && in2){
          valor = input1.value;
          alert(`Cadastro Realizado com Sucesso, seja bem vindo(a) ${in2.toUpperCase()}`)
          cadastroRealizado2.style.display = "none"
          main2.style.display = "none"
          main1.style.display = "block"
          cadastro.style.display = "none"
          usuario.style.display = "block"
          usuario.innerHTML = `${in2}`
          inputCadastro.style.display = "block"
          mensagem.style.display = "none"
          iframes.style.display = "block"
          iframes2.style.display = "block"
          iframes3.style.display = "block"
          iframes4.style.display = "block"
          listas.style.display = "block"
          listas2.style.display = "block"
          listas3.style.display = "block"
          listas4.style.display = "block"
          mensagem2.style.display = "block"
          refresh.style.display = "block"
      }else if(in2.value && in1.value){
        
    }else{
       cadastroRealizado2.style.display="block"
    }
    }else{
      alert("E-mail está incorreto, verifique novamente !!!")
    }
    
 })
 let textarea = document.querySelector("#textarea");
 let inputTextarea = document.querySelector("#input-textarea");
 let adicionada = document.querySelector("#acicionada");
 let h2_1e2 = document.querySelector("#sim-nao");
 let excluir = document.querySelector("#btn-2");
 let incluir = document.querySelector("#btn-1")
 let playlist = document.querySelector("#listando-musica")
 let refresh = document.querySelector("#escolha")
 
 let total = 20;
 let quantidade = textarea.value.length;
 
 textarea.addEventListener("keypress", function(end){
    let total2 = 20;
    let quantidade2 = textarea.value.length;
    if( quantidade2 >= total2){
       end.preventDefault();
      }
 })
  inputTextarea.addEventListener("click", function(){
        if(textarea.value.length < 1){
        alert("Digite o nome de alguma música")
       }else{
          adicionada.style.display = "block";
          adicionada.innerHTML = textarea.value;
          h2_1e2.style.display = "block";
       }
  })
 excluir.addEventListener("click", function(){
    adicionada.style.display = "none";
    h2_1e2.style.display = "none";
    textarea.value="";
 })
 incluir.addEventListener("click", function(){
    textarea.value="";
    alert("😊 Obrigada pela sua sujestão !!! 😊")
    h2_1e2.style.display="none"
    let recebe = textarea.value;
    arrayDaMusica.push(recebe)
 })
 
 let count = [1];
 setInterval(function(){
     nextColor()
 }, 300)
 
 function nextColor(){
     let mudarCorBorda=1
     let mudarCorBorda2=2
     if(count.length === mudarCorBorda){
         adicionada.style.color="white"
         adicionada.style.fontWeight="bold"
         count.push(1)
     }else if(count.length === mudarCorBorda2){
         adicionada.style.color="black"
         count.pop(1)
     }
    
 }
 let audio = document.querySelector("#audio")
 let microfone1 = document.querySelector("#microfone1")
 let audio2 = document.querySelector("#audio2")
 let microfone2 = document.querySelector("#microfone2")
 let audio3 = document.querySelector("#audio3")
 let microfone3 = document.querySelector("#microfone3")
 let audio4 = document.querySelector("#audio4")
 let microfone4 = document.querySelector("#microfone4")
 let audio5 = document.querySelector("#audio5")
 let microfone5 = document.querySelector("#microfone5")
 let audio6 = document.querySelector("#audio6")
 let microfone6 = document.querySelector("#microfone6")
 let audio7 = document.querySelector("#audio7")
 let microfone7 = document.querySelector("#microfone7")
 let audio8 = document.querySelector("#audio8")
 let microfone8 = document.querySelector("#microfone8")
 let audio9 = document.querySelector("#audio9")
 let microfone9 = document.querySelector("#microfone9")
 let audio10 = document.querySelector("#audio10")
 let microfone10 = document.querySelector("#microfone10")
 let buttonResetarTabela = document.querySelector("#buttonResetarTabela")
 
 buttonResetarTabela.addEventListener("click", function(){
    headPagina.style.position="sticky"
    audio.style.display="none"
    microfone1.style.display="block"
    audio2.style.display="none"
    microfone2.style.display="block"
    audio3.style.display="none"
    microfone3.style.display="block"
    audio4.style.display="none"
    microfone4.style.display="block"
    audio5.style.display="none"
    microfone5.style.display="block"
    audio6.style.display="none"
    microfone6.style.display="block"
    audio7.style.display="none"
    microfone7.style.display="block"
    audio8.style.display="none"
    microfone8.style.display="block"
    audio9.style.display="none"
    microfone9.style.display="block"
    audio10.style.display="none"
    microfone10.style.display="block"
 })
 
 function micro(){
    audio.style.display="block"
    microfone1.style.display="none"
    headPagina.style.position="static"
 }
 function micro2(){
    audio2.style.display="block"
    microfone2.style.display="none"
    headPagina.style.position="static"
 }
 function micro3(){
    audio3.style.display="block"
    microfone3.style.display="none"
    headPagina.style.position="static"
 }
 function micro4(){
    audio4.style.display="block"
    microfone4.style.display="none"
    headPagina.style.position="static"
 }
 function micro5(){
    audio5.style.display="block"
    microfone5.style.display="none"
    headPagina.style.position="static"
 }
 function micro6(){
    audio6.style.display="block"
    microfone6.style.display="none"
    headPagina.style.position="static"
 }
 function micro7(){
    audio7.style.display="block"
    microfone7.style.display="none"
    headPagina.style.position="static"
 }
 function micro8(){
    audio8.style.display="block"
    microfone8.style.display="none"
    headPagina.style.position="static"
 }
 function micro9(){
    audio9.style.display="block"
    microfone9.style.display="none"
    headPagina.style.position="static"
 }
 function micro10(){
    audio10.style.display="block"
    microfone10.style.display="none"
    headPagina.style.position="static"
 }
 let file = document.querySelector("#inputDaImagem")
 let imagePhoto = document.querySelector("#imagePhoto")
 
    