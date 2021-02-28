function makeRed(komenti){
    if (komenti.localeCompare('ligji')==0){
        document.getElementById('ligji').style.backgroundColor="red";
    } else if (komenti.localeCompare('Programet')==0){
        document.getElementById('Programet').style.backgroundColor="red";
    }
        else if (komenti.localeCompare('Stafi')==0){
            document.getElementById('Stafi').style.backgroundColor="red";
        }
            else{
                document.getElementById('Kerkimi').style.backgroundColor="red";
            }
}

function makeGreen(komenti){
    if (komenti.localeCompare('ligji')==0){
        document.getElementById('ligji').style.backgroundColor="green";
    } else if (komenti.localeCompare('Programet')==0){
        document.getElementById('Programet').style.backgroundColor="green";
    }
        else if (komenti.localeCompare('Stafi')==0){
            document.getElementById('Stafi').style.backgroundColor="green";
        }
            else{
                document.getElementById('Kerkimi').style.backgroundColor="green";
            }
}

function makeBlue(komenti){
    if (komenti.localeCompare('ligji')==0){
        document.getElementById('ligji').style.backgroundColor="blue";
    } else if (komenti.localeCompare('Programet')==0){
        document.getElementById('Programet').style.backgroundColor="blue";
    }
        else if (komenti.localeCompare('Stafi')==0){
            document.getElementById('Stafi').style.backgroundColor="blue";
        }
            else{
                document.getElementById('Kerkimi').style.backgroundColor="blue";
            }
}

function shtoRresht(){
    var tabela = document.getElementById("tabela");

    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    
    var text1 = document.createTextNode("MEGI");
    var text2 = document.createTextNode("JOAN");

    col1.appendChild(text1);
    col2.appendChild(text2);

    row.append(col1,col2);

    tabela.appendChild(row);

}