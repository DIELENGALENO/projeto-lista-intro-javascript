// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  let altura
  let largura
  let area

  altura = prompt("Digite a altura do retângulo.", altura)
  largura = prompt("Digite a largura do retângulo.", largura) 
  area = altura*largura
  console.log(area)

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let anoAtual
  let anoDeNascimento 
  let idade

  anoAtual = prompt("Digite o ano atual.", anoAtual)
  anoDeNascimento = prompt("Digite o ano do seu nascimento.", anoDeNascimento)
  idade = anoAtual - anoDeNascimento
  console.log(idade)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

    let imc = peso / (altura*altura)
    return imc
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nome
  let idade
  let email

  nome = prompt("Digite seu primeiro nome.", nome)
  idade = prompt("Digite sua idade.", idade)
  email = prompt("Digite o seu email.", email)

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)


}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

    let cores = []
    
    cores[0] = prompt("Digite sua cor favorita.", cores[0])
    cores[1] = prompt("Digite sua segunda cor favorita.", cores[1])
    cores[2] = prompt("Digite sua terceira cor favorita.", cores[2])

    console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  let maiusculaToUpperCase = string.toUpperCase()
  return maiusculaToUpperCase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  let espetaculo = custo / valorIngresso
  return espetaculo

}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  // para saber o tamanho da string1 voce pode escrever string1.length

  // para comparar 2 valores, voce pode usar o operador ==

  // const condicao = 1 === 2   --- condicao é false

  // se a string1 for abc o tamanho é 3
  // se a string2 for abcd o tamanho é 4

  let tamanhodaprimeirastring = string1.length
  let tamanhodasegundastring = string2.length

  let resultadoDaComparacao = tamanhodaprimeirastring === tamanhodasegundastring

  return resultadoDaComparacao

  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui


  let primeiroelemento = array[0]

  return primeiroelemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  // tamanho do array: array.length

  let tamanhodoarray = array.length

  let ultimoelemento = array[tamanhodoarray - 1]

  return ultimoelemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  // array[0]
  // array[array.length - 1]

  let primeiroelemento = array[0]
  let ultimoelemento = array[array.length - 1]

  array[0] = ultimoelemento
  array[array.length - 1] = primeiroelemento

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  let string1comletrasmaiusculas = string1.toUpperCase()
  let string2comletrasmaiusculas = string2.toUpperCase()

  let resultadoDaComparacao = string1comletrasmaiusculas === string2comletrasmaiusculas

  return resultadoDaComparacao

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  
  let anoAtual = prompt("Digite o ano atual.")
  let anoDeNascimento = prompt("Digite o ano de nascimento.")
  let anoEmissaoCarteiraIdentidade = prompt("Digite o ano em que sua carteira de identidade foi emitida.")


  let idade = anoAtual - anoDeNascimento
  let anosSemRenovar = anoAtual - anoEmissaoCarteiraIdentidade


  let jovem = idade <= 20
  let carteiraVenceu5Anos = anosSemRenovar >= 5

  let criterio1 = jovem && carteiraVenceu5Anos

  let adulto = idade > 20 && idade <= 50

  let carteiraVenceu10anos = anosSemRenovar >= 10

  let criterio2 = adulto && carteiraVenceu10anos


  let idoso = idade > 50
  let carteiraVenceu15anos = anosSemRenovar > 15

  let criterio3 = idoso && carteiraVenceu15anos

  let carteiraPrecisaSerRenovada = criterio1 || criterio2 || criterio3

  console.log(carteiraPrecisaSerRenovada)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui


  let criterio1 = (ano % 400) === 0


  let multiplode4 = (ano % 4) === 0
  let multiplode100 = (ano % 100) === 0
  let multiplode400 = (ano % 400) === 0

  let excecao = multiplode100 && !multiplode400

  let criterio2 = multiplode4 && !excecao

  let eanobissexto = criterio1 || criterio2

  return eanobissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  let resposta1 = prompt("Você tem mais de 18 anos?")
  let resposta2 = prompt("Você possui ensino médio completo?")
  let resposta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  
  let criterio1 = resposta1 === "sim"
  let criterio2 = resposta2 === "sim"
  let criterio3 = resposta3 === "sim"

  let inscricaoEValida = criterio1 && criterio2 && criterio3

  console.log(inscricaoEValida)
}