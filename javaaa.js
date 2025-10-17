const nevezes = 5000
const maxkiallitas = 7
hanynevezes = 0

const kiallitasok = [
    {id: 1, helyszin: Budapest, nap: 3},
    {id: 2, helyszin: Hajdúdorog, nap: 3},
    {id: 3, helyszin: Szilvásvárad, nap: 3},
    {id: 4, helyszin: Agárd, nap: 1},
    {id: 5, helyszin: Pápa, nap: 1},
    {id: 6, helyszin: Komárom, nap: 3}
]

const lista = []

//majd kihelyettesitem a tablazatot evvel a kiirasos functionnel

function kiiras(){

}


function bekerdezes(){
    hanynevezes = document.getElementById('javascript').value
    if  (hanynevezes > maxkiallitas){
        console.log("Kérem ne írjon több számot mint amennyi kiállítás van!")
        hanynevezes = document.getElementById('javascript').value
    }

    for (let i = 0; i < hanynevezes; i++) {
        
        
    }

}