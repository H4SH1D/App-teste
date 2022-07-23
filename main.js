var  tnt = 0;
var tnt2 = 0;
var tnt3 = 0;
var acc2pt = 0;
var acc3pt = 0;
var porc = 0;





function ac2pts(){

    tnt++;
    tnt2++;
    acc2pt++;
    var pontos = (acc2pt * 2) + (acc3pt * 3);
    porc = (acc2pt / tnt2) * 100;
    porc = porc.toFixed(2);
    document.getElementById("tent1").textContent = tnt;
    document.getElementById("acc1").textContent = acc2pt;
    document.getElementById("pts").textContent = pontos;
    document.getElementById("2ptsporc").textContent = porc;
    

 
}

function ac3pts(){

    tnt++;
    tnt3++;
    acc3pt++;
    var pontos = (acc2pt * 2) + (acc3pt * 3);
    porc = (acc3pt / tnt3) * 100;
    porc = porc.toFixed(2);
    document.getElementById("tent1").textContent = tnt;
    document.getElementById("acc2").textContent = acc3pt;
    document.getElementById("pts").textContent = pontos;
    document.getElementById("3ptsporc").textContent = porc;

 
}

function erro3p(){

    tnt++;
    tnt3++;
    document.getElementById("tent1").textContent = tnt;
    porc = (acc3pt / tnt3) * 100;
    porc = porc.toFixed(2);
    document.getElementById("3ptsporc").textContent = porc;


}

function erro2p(){

    tnt++;
    tnt2++;
    document.getElementById("tent1").textContent = tnt;
    porc = (acc2pt / tnt2) * 100;
    porc = porc.toFixed(2);
    document.getElementById("2ptsporc").textContent = porc;


}

function saveRemove(){

    var nome = document.getElementById("objrem1").value;
    if(nome != null){

        document.getElementById("p1").textContent = nome;
        document.getElementById("objrem2").remove();
        document.getElementById("objrem1").remove();
        
    }




}
