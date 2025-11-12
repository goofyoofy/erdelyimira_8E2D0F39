const nevezes = 5000
const maxk = 6
hanynevezes = 0

const kiallitasok = [
    {id: 1, helyszin: "Budapest", nap: 3},
    {id: 2, helyszin: "Hajdúdorog", nap: 1},
    {id: 3, helyszin: "Szilvásvárad", nap: 1},
    {id: 4, helyszin: "Agárd", nap: 1},
    {id: 5, helyszin: "Pápa", nap: 1},
    {id: 6, helyszin: "Komárom", nap: 3}
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
    if  (hanynevezes > maxk || hanynevezes <= 0){
        alert("Kérem ne írjon több számot mint amennyi kiállítás van!")
        return
    }
    
    for (let i = 0; i < hanynevezes; i++) {
        let sorszam = parseInt(prompt("Add meg a kiállítás sorszámát: "))
        if (sorszam < 1 || sorszam > 6) {
            alert("Érvénytelen sorszám!")
            i--
            continue
        }
        if (lista[sorszam] > 0) {
            alert("Ezt a kiállítást már megadta!")
            i--
            continue
        }
        lista[sorszam]++
    }

    let ossznap = 0
    let osszar = 0
    
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > 0){
            ossznap += kiallitasok[i-1].nap
            osszar += kiallitasok[i-1].nap * nevezes
        }
    }

    document.getElementById("arkiir").innerHTML = `Összesen fizetendő: <${ossznap * nevezes} Ft`

    atlag(ossznap, hanynevezes)
}

function atlag(ossznap, hanynevezes){
    let atlag = ossznap / hanynevezes
    document.getElementById("atlagkiir").innerHTML = `Átlagosan ennyi napos kiállításokra megy: ${atlag.toFixed(2)} nap`
}

let maxar = 0
let minar = 999999
let maxhely = ""
let minhely = ""

for (let i = 0; i < kiallitasok.length; i++) {
    let aktualisar = kiallitasok[i].nap * nevezes
    if (aktualisar > maxar) {
        maxar = aktualisar
        maxhely = kiallitasok[i].helyszin
    }
    if (aktualisar < minar) {
        minar = aktualisar
        minhely = kiallitasok[i].helyszin
    }
}

document.getElementById("maxkiir").innerHTML = "Legdrágább kiállítás: " + maxHely + " (" + maxAr + " Ft)"

document.getElementById("minkiir").innerHTML = "Legolcsóbb kiállítás: " + minHely + " (" + minAr + " Ft)"