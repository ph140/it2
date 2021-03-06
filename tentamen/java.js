class Land{
  constructor(navn, utovere, idretter, gull) {
    this.navn = navn;
    this.utovere = utovere;
    this.idretter = idretter;
    this.gull = gull
  }

  skrivinfo(){
    document.getElementById('info').innerHTML =
    'Du gjettet: ' + this.navn + '<br>' +
    'Idrett: ' + this.utovere + ' utovere i ' + this.idretter + ' idretter. <br>' +
    'Antall gull: ' + this.gull;

    var img = document.createElement("img");
    img.src = this.navn + '.png'
    var src = document.getElementById("bildecontainer");
    src.innerHTML = ''
    src.appendChild(img);

  }
}



let Osterrike = new Land('Osterrike', '421', '26', '10');
let Storbritannia = new Land('Storbritannia', '366', '25', '27')
let Japan = new Land('Japan', '338', '30', '12')
let Frankrike = new Land('Frankrike', '395', '27', '10')
let Norge = new Land('Norge', '64', '13', '0')
let Kina = new Land('Kina', '416', '26', '26')

var land = ['', Osterrike, Storbritannia, Japan, Frankrike, Norge, Kina]
var forsok = 1

var res = document.getElementById('res')
var indeks = prompt('Hvilket land tror du fikk flest gull i OL')

while (indeks != '2'){
  if (indeks < 1 || indeks > 6) {
    alert('Du må velge et tall mellom 1 og 6')
    indeks = prompt('Hvilket land tror du fikk flest gull i OL?')
  }else {
    forsok += 1
    land[indeks].skrivinfo()
    res.innerHTML = '<br> <h2>Ikke riktig - prov igjen!</h2>'
    var indeks = prompt('Hvilket land tror du fikk flest gull i OL')
  }
}

land[indeks].skrivinfo()
res.innerHTML = '<br> <h2>Du gjettet riktig!</h2><br> Du brukte ' + forsok + ' forsok.'
