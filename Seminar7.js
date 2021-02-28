var i = 0;
var countUP = () => {
    i++;
   document.getElementById('result').innerHTML= ((i) + ' ') ;
   document.getElementById('result2').innerHTML += ((i) + ' ') ;
}

function changeStyles(){
    var bgColor = document.getElementById('bgcolor').value;
    var font = document.getElementById('font').value;
    console.log(font);
    console.log(bgColor);
    document.getElementsByTagName('body')[0].style.backgroundColor = bgColor;
    document.getElementsByTagName('body')[0].style.fontFamily = font;

}
var k = 0;
function shtoRresht(){
    //behet dhe shtimi i kolones
    var tabela = document.getElementById('tabela');
    // var tabelaBody = tabela.firstChild;
    // console.log(tabelaBody);
    var rresht = document.createElement('tr');
    var kolone1 = document.createElement('td');
    var kolone2 = document.createElement('td');

    var k1Tekst = document.createTextNode('Shtuar me js '+(k++));
    var k2Tekst = document.createTextNode('Shtuar me js '+k);

    kolone1.appendChild(k1Tekst);
    kolone2.appendChild(k2Tekst);

    rresht.append(kolone1,kolone2);

    tabela.appendChild(rresht);
}

function ndrysho(){
    var x = parseInt(prompt("jep rreshtin:"));
    var y =parseInt(prompt("jep kolonen:"));
    var str = prompt("jep tekstin");

    var tabela = document.getElementById('tabela');
    var rreshti = tabela.rows[x];
    var qeliza = rreshti.cells.item(y);
    qeliza.innerHTML=str;
    console.log(qeliza);
}

/**
 * To delete smth from a drop down list
 
 var select=document.getElementById('DD1');

for (i=0;i<select.length;  i++) {
   if (select.options[i].value=='D') {
     select.remove(i);
   }
}
 */