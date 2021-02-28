function calculate(){
    var nr1 = document.getElementById("Nr1").value;
    var nr2 = document.getElementById("Nr2").value;
    var action = document.getElementById("veprimi").value;
 //   console.log(action);
    if (nr1.length==0 || nr2.length==0){
        return;
    } 
    nr1 = parseInt(nr1);
    nr2 = parseInt(nr2);
    var result ;
    if (action.localeCompare("+")==0)  result = nr1+nr2;
    else if (action.localeCompare("-")==0)  result = nr1-nr2;
    else if (action.localeCompare("*")==0)  result = nr1*nr2;
    else  result = nr1/nr2;
    document.getElementById('result').value = result;
}

/* Ushtrimi 4 */
function readAndPrint(){
    var vektor = Array();
    const TOTAL_NUMS = 2;
    let i = 0;
    
    while (i<TOTAL_NUMS){
        var num = parseInt(prompt("Jep numrin"));
        if (isIn(vektor,num)){
            continue;
        } else {
            vektor[i++] = num;
            document.getElementById("num").innerHTML+=" "+num;
        }
    
    }
}
function isIn(vektor,num){
    for (let i = 0;i<vektor.length;i++){
        if (num==vektor[i]) return true;
    }
    return false;
}

function zarat(){
    var shumat = [];
    for (let i = 0;i<=12;i++){
        shumat[i] = 0;
    }
    console.log(shumat);
   for (let i = 0;i<36;i++)
    {
        var zari1 = Math.floor(Math.random()*6)+1;
        var zari2 = Math.floor(Math.random()*6)+1;
        var sum = zari1 + zari2;
        shumat[sum]++;
    }
    console.log(shumat);
    document.getElementById('tabelaZarave').setAttribute('border',"1");
    for (let i = 2;i<=12;i++){
        let node = document.createElement('th');
        let textNode = document.createTextNode(i);
        node.appendChild(textNode);
        document.getElementById('tableHead').appendChild(node);
       
        let secondNode = document.createElement('td');
        let secondTextNode = document.createTextNode(shumat[i]);
       // console.log(shumat[i]);
        secondNode.appendChild(secondTextNode);
        document.getElementById('tableBody').appendChild(secondNode);
    }

    function start (){
var vektor = new Array(1000);

for (var i=0;i<100;i++){
    vektor[i] = 1;
}
vektor[0] = 0;
vektor[1] = 0;
for (var i = 2 ; i*i<=1000;i++){
    if (vektor[i]==1){
        for (var j = i*i;j<=1000;j+=i){
                vektor[j] = 0;
        }
    }
}
for (var i = 2;i<1000;i++){
    if (vektor[i] == 1){
        console.log(i);
        document.getElementById("result1").innerHTML+=" "+i;
    }
}
}
}

function sieveEratostheneses (){
    /**
     *  Shkruani një skript që përdor një vektor me 1000 elementë për të përcaktuar dhe
    printuar numrat qe janë prim nga 1 në 999. Për të realizuar ketë skript mund të përdorni
    algoritmin Sieve of Eratosthenes i cili gjen numrat prim. Ky algoritëm vepron si më poshtë:
    a. Krijon një vektor me të gjithë elementët e inicializuar 1 (true). Të gjithë elementët me
    indeks prim do të qëndrojnë në vlerën 1 të tjetër do të vendosen në 0.
    b. Vendos dy elementet e parë në 0 duke qenë se 0 dhe 1 nuk janë prim. Duke filluar nga
    elementi me indeks 2 sa herë që gjendet një element me vlerë 1 futemi në një cikël deri në
    elementin e fundit të vektorit dhe vendoseni në 0 vlerën e çdo elementi indeksi i të cilit
    është shumëfish i indeksit me vlere 1 dhe kështu me radhë.
    Pasi të ketë përfunduar procesi vektori do të përmbaj vlera 0 dhe 1. Vlerat 1 do të
    përcaktojnë se indeksi i këtij elementi është një vlere prim.
     */
    var vektor = new Array(1000);
    
    for (var i=0;i<100;i++){
        vektor[i] = 1;
    }
    vektor[0] = 0;
    vektor[1] = 0;
    for (var i = 2 ; i*i<=1000;i++){
        if (vektor[i]==1){
            for (var j = i*i;j<=1000;j+=i){
                    vektor[j] = 0;
            }
        }
    }
    for (var i = 2;i<1000;i++){
        if (vektor[i] == 1){
            console.log(i);
            document.getElementById("result1").innerHTML+=" "+i;
        }
    }
    }

    function dataSot(){
        var d = new Date();
        var dita = d.getDate();
        var viti = d.getFullYear();
        var muaji = d.getMonth();
        alert("Data sot eshte "+dita +" " + muaji +" " + viti);
    }
    function dataDje(){
        var d = new Date();
        var dita = d.getDate()-1;
        var viti = d.getFullYear();
        var muaji = d.getMonth();
        if (dita==31 || dita == 30){
            muaji--;
        }
        alert("Data dje ishte "+dita +" " + muaji +" " + viti);
    }
    function data10VitePara(){
        var d = new Date();
        var dita = d.getDate();
        var viti = d.getFullYear()-10;
        var muaji = d.getMonth();
        alert("Data para 10 vitesh ishte "+dita +" " + muaji +" " + viti);
    }
    function dataPara1Jave(){
        var d = new Date();
        var dita = d.getDate();
        var viti = d.getFullYear();
        var muaji = d.getMonth();
        if (dita<=7){
            muaji--;
        }
        dita-=7;
        alert("Data para 1 jave ishte "+dita +" " + muaji +" " + viti);
    }

    function derive(){
        var str = prompt('jep stringen');
        if (str.length != 5){
            window.alert("Gjatesia e string-es duhet te jete 5");
            return;
        }
        var array = [];
        for (var i = 0;i<str.length;i++){
            array[i] = str.substring(i,i+1);
        }
        var strs = [], temp,count=0,scan;
    
        for ( var i  = 0;i<array.length;i++){
            for (var j = 0;j<array.length;j++){
                for (var k = 0;k<array.length;k++){
                    if (i==j || k==j || k==i) continue;
                    temp = array[i] + array[j] + array[k];
                    strs[count++] = temp;
                }
            }
        }
         var textArea = document.createElement('textarea');
         textArea.setAttribute("cols","36");
         textArea.setAttribute("rows","4");
         document.getElementById("elementi").appendChild(textArea);
        for (var i = 0;i<strs.length;i++){
            textArea.value+=" "+strs[i];
        }
    }  

    function shfaqi(){
        var tekst = document.getElementById('teksti').value.trim();
        if (tekst.length == 0){
            return;
        }
        var str = tekst.split(" ");
        var nStr="";
        for (var i = str.length - 1 ; i>=0;i--){
            nStr+=str[i];
        }
        alert(nStr);
        var upper = tekst.toUpperCase();
        alert(upper);
        var lower = tekst.toLowerCase();
        alert(lower);
        var count = nrOfOcurrences('o',tekst);
        alert('O gjendet '+count + " here");
        var shkronjat = ['a','b','c','d','e',
                        'f','g','h','i','j',
                        'k','l','m','n','o',
                        'p','q','r','s','t',
                        'u','v','w','x','y',
                        'z'];
        var heret = [];
        for (var i = 0;i<26;i++){
            heret[i]  = 0;
        }
        for (var i = 0;i<26;i++){
            heret[i] = nrOfOcurrences(shkronjat[i],tekst);
        }
        console.log(heret);
        for (var i = 0;i<26;i++){
            var node = document.createElement(
               'th' 
            );
            var text = document.createTextNode(
                shkronjat[i]
            );
            node.appendChild(text);
            document.getElementById('row').appendChild(node);

            var nnode = document.createElement(
                'td' 
             );
             var textPoshte = document.createTextNode(
                 heret[i]
             );
             nnode.appendChild(textPoshte);
             document.getElementById('rowBody').appendChild(nnode);
        }
       
    }
    function nrOfOcurrences(s,tekst){
        
        var count = 0;
        var i = 0;
        var prevN = 0;
        var n = 0;
        while (i<tekst.length){
            prevN = n;
            n = tekst.indexOf(s,i);         
            if (n==-1) break;
            else i++;
            if (prevN != n)
            count++;
           
        }
        return count;
    }