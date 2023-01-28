function add2pointer(player) {
  var currentValue = document.getElementById(player + '-2pointers').innerHTML;
  document.getElementById(player + '-2pointers').innerHTML = parseInt(currentValue) + 2;
  
  
  }
  
  function add3pointer(player) {
    var currentValue = document.getElementById(player + '-3pointers').innerHTML;
    document.getElementById(player + '-3pointers').innerHTML = parseInt(currentValue) + 3;
  }

  function addAssist(player) {
    var currentValue = document.getElementById(player + '-assists').innerHTML;
    document.getElementById(player + '-assists').innerHTML = parseInt(currentValue) + 1;
  }

  function addTurnover(player) {
    var currentValue = document.getElementById(player + '-turnovers').innerHTML;
    document.getElementById(player + '-turnovers').innerHTML = parseInt(currentValue) + 1;
  }

  function addRebound(player) {
    var currentValue = document.getElementById(player + '-rebounds').innerHTML;
    document.getElementById(player + '-rebounds').innerHTML = parseInt(currentValue) + 1;
  }

  function addWin(player) {
    var currentValue = document.getElementById(player + '-wins').innerHTML;
    document.getElementById(player + '-wins').innerHTML = parseInt(currentValue) + 1;
  }

  function addLoss(player) {
    var currentValue = document.getElementById(player + '-losses').innerHTML;
    document.getElementById(player + '-losses').innerHTML = parseInt(currentValue) + 1;
  }
  
  function cadastrar() {
    var nome = document.getElementById("nome").value;
    var cestas2 = document.getElementById("cestas2").value;
    var cestas3 = document.getElementById("cestas3").value;
    var taxaAcerto2 = document.getElementById("taxaAcerto2").value;
    var taxaAcerto3 = document.getElementById("taxaAcerto3").value;
    var mediaPontosPartida = document.getElementById("mediaPontosPartida").value;
    var precisaoMedia = document.getElementById("precisaoMedia").value;
    var taxaVitorias = document.getElementById("taxaVitorias").value;
  
    var jogador = {
      "nome": nome,
      "cestas2": cestas2,
      "cestas3": cestas3,
      "taxaAcerto2": taxaAcerto2,
      "taxaAcerto3": taxaAcerto3,
      "mediaPontosPartida": mediaPontosPartida,
      "precisaoMedia": precisaoMedia,
      "taxaVitorias": taxaVitorias
    };
  
    var jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    jogadores.push(jogador);
    localStorage.setItem("jogadores", JSON.stringify(jogadores));
    console.log("Jogador cadastrado com sucesso!");
  }
  
 
  
