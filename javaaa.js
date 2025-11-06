const nevezes = 5000
const maxk = 6
hanynevezes = 0

const kiallitasok = [
    {id: 1, helyszin: Budapest, nap: 3},
    {id: 2, helyszin: Hajdúdorog, nap: 1},
    {id: 3, helyszin: Szilvásvárad, nap: 1},
    {id: 4, helyszin: Agárd, nap: 1},
    {id: 5, helyszin: Pápa, nap: 1},
    {id: 6, helyszin: Komárom, nap: 3}
]

const lista = [0,0,0,0,0,0,0]

//majd kihelyettesitem a tablazatot evvel a kiirasos functionnel

/*function kiiras(){
    document.getElementById("tabla").innerHTML+="<tr> <th>Sorszám</th> <th>Helyszín</th> <th>Napok száma</th> </tr>"
    for (let i = 0; i < kiallitasok.length; i++) {
        szoveg= "<tr><td>" + kiallitasok[i].id + "</td>"
        szoveg+= "<td>" + kiallitasok[i].helyszin + "</td>"
        szoveg+= "<td>" + kiallitasok[i].nap + "</td>"
        szoveg+="</tr>"
        document.getElementById("tabla").innerHTML+=szoveg
    }

    

}*/

//megsem helyettesitem mert felidegesitett


function bekerdezes(){
    
    let hanynevezes = document.getElementById('javascript').value
    if  (hanynevezes > maxk){
        alert("Kérem ne írjon több számot mint amennyi kiállítás van!")
    }
    else {
        for (let i = 0; i < hanynevezes; i++) {
            let sorszam = prompt("Add meg a kiállítás sorszámát").value
            lista[sorszam]++
            if (lista[sorszam] > 1) {
                alert("Kérem ne írja ugyanazt a kiállítást többször")
            }
        }
    }
    for (let i = 1; i < lista.length; i++) {
        if (kiallitasok[i].nap == 3){
            nevezesssss+3
        }
        else {
            nevezesssss++
        }
        osszar(nevezesssss)  
    }
}

function atlag(){
    
}

function osszar(nevezesek){
    szoveg= "Összesen a nevezések ára: "
    szoveg += nevezesek * nevezes
    szoveg += " Ft"
    document.getElementById("arkiir").innerHTML= szoveg
}