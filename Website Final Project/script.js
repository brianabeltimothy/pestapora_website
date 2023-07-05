window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 290)
  })

function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

//lineup hover shows image 
//day 1 
const feast = document.querySelector(".feast"),
feastImg = document.querySelector(".feast-img");

const abdelTemon = document.querySelector(".abdel-temon"),
abdelTemonImg = document.querySelector(".abdel-temon-img");

const agrikulture = document.querySelector(".agrikulture"),
agrikultureImg = document.querySelector(".agrikulture-img");
  
const aloneAtLast = document.querySelector(".alone-at-last"),
aloneAtLastImg = document.querySelector(".alone-at-last-img");

const armada = document.querySelector(".armada"),
armadaImg = document.querySelector(".armada-img");

const barasura = document.querySelector(".barasura"),
barasuraImg = document.querySelector(".barasura-img");

const bongabonga = document.querySelector(".bongabonga"),
bongabongaImg = document.querySelector(".bongabonga-img");

const efekRumahKaca = document.querySelector(".efek-rumah-kaca"),
efekRumahKacaImg = document.querySelector(".efek-rumah-kaca-img");

const fourtwnty = document.querySelector(".fourtwnty"),
fourtwntyImg = document.querySelector(".fourtwnty-img");

const geisha = document.querySelector(".geisha"),
geishaImg = document.querySelector(".geisha-img");

const gugunBluesShelter = document.querySelector(".gugun-blues-shelter"),
gugunBluesShelterImg = document.querySelector(".gugun-blues-shelter-img");

const tuanTigaBelas = document.querySelector(".tuan-tiga-belas"),
tuanTigaBelasImg = document.querySelector(".tuan-tiga-belas-img");

const idgitaf = document.querySelector(".idgitaf"),
idgitafImg = document.querySelector(".idgitaf-img");

const kuntoAji = document.querySelector(".kunto-aji"),
kuntoAjiImg = document.querySelector(".kunto-aji-img");

const hivi = document.querySelector(".hivi"),
hiviImg = document.querySelector(".hivi-img");

//day 2

const danilla = document.querySelector(".danilla"),
  danillaImg = document.querySelector(".danilla-img");

  const kangenBand = document.querySelector(".kangen-band"),
  kangenBandImg = document.querySelector(".kangen-band-img");

  const diskopantera = document.querySelector(".diskopantera"),
  diskopanteraImg = document.querySelector(".diskopantera-img");
  
  const diskoria = document.querySelector(".diskoria"),
  diskoriaImg = document.querySelector(".diskoria-img");

  const febyPutri = document.querySelector(".feby-putri"),
  febyPutriImg = document.querySelector(".feby-putri-img");

  const feelKoplo = document.querySelector(".feel-koplo"),
  feelKoploImg = document.querySelector(".feel-koplo-img");

  const fleur = document.querySelector(".fleur"),
  fleurImg = document.querySelector(".fleur-img");

  const jkt48 = document.querySelector(".jkt48"),
  jkt48Img = document.querySelector(".jkt48-img");

  const jasonRanti = document.querySelector(".jason-ranti"),
  jasonRantiImg = document.querySelector(".jason-ranti-img");

  const komunal = document.querySelector(".komunal"),
  komunalImg = document.querySelector(".komunal-img");

  const kungPowChicken = document.querySelector(".kung-pow-chicken"),
  kungPowChickenImg = document.querySelector(".kung-pow-chicken-img");

  const kuntari = document.querySelector(".kuntari"),
  kuntariImg = document.querySelector(".kuntari-img");

  const marionJola = document.querySelector(".marion-jola"),
  marionJolaImg = document.querySelector(".marion-jola-img");

  const ran = document.querySelector(".ran"),
  ranImg = document.querySelector(".ran-img");
   

window.addEventListener("mousemove", (e) => {
  let x = e.pageX,
    y = e.pageY;

  //feast
  if (e.target.classList.contains("feast")) {
    feastImg.style.left = `${x}px`;
    feastImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("abdel-temon")) {
    abdelTemonImg.style.left = `${x}px`;
    abdelTemonImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("agrikulture")) {
    agrikultureImg.style.left = `${x}px`;
    agrikultureImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("alone-at-last")) {
    aloneAtLastImg.style.left = `${x}px`;
    aloneAtLastImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("armada")) {
    armadaImg.style.left = `${x}px`;
    armadaImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("barasura")) {
    barasuraImg.style.left = `${x}px`;
    barasuraImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("bongabonga")) {
    bongabongaImg.style.left = `${x}px`;
    bongabongaImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("efek-rumah-kaca")) {
    efekRumahKacaImg.style.left = `${x}px`;
    efekRumahKacaImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("fourtwnty")) {
    fourtwntyImg.style.left = `${x}px`;
    fourtwntyImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("geisha")) {
    geishaImg.style.left = `${x}px`;
    geishaImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("gugun-blues-shelter")) {
    gugunBluesShelterImg.style.left = `${x}px`;
    gugunBluesShelterImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("tuan-tiga-belas")) {
    tuanTigaBelasImg.style.left = `${x}px`;
    tuanTigaBelasImg.style.top = `${y}px`;
  }

  if (e.target.classList.contains("idgitaf")) {
    idgitafImg.style.left = `${x}px`;
    idgitafImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("kunto-aji")) {
    kuntoAjiImg.style.left = `${x}px`;
    kuntoAjiImg.style.top = `${y}px`;
  } 
  
  if (e.target.classList.contains("hivi")) {
    hiviImg.style.left = `${x}px`;
    hiviImg.style.top = `${y}px`;
  }
});

//feast
feast.addEventListener("mouseover", () => {
  feastImg.style.opacity = 1;
});
feast.addEventListener("mouseleave", () => {
  feastImg.style.opacity = 0;
});

//abdelTemon
abdelTemon.addEventListener("mouseover", () => {
  abdelTemonImg.style.opacity = 1;
});
abdelTemon.addEventListener("mouseleave", () => {
  abdelTemonImg.style.opacity = 0;
});

//agrikulture
agrikulture.addEventListener("mouseover", () => {
  agrikultureImg.style.opacity = 1;
});
agrikulture.addEventListener("mouseleave", () => {
  agrikultureImg.style.opacity = 0;
});

//aloneAtLast
aloneAtLast.addEventListener("mouseover", () => {
  aloneAtLastImg.style.opacity = 1;
});
aloneAtLast.addEventListener("mouseleave", () => {
  aloneAtLastImg.style.opacity = 0;
});

//armada
armada.addEventListener("mouseover", () => {
  armadaImg.style.opacity = 1;
});
armada.addEventListener("mouseleave", () => {
  armadaImg.style.opacity = 0;
});

//barasura
barasura.addEventListener("mouseover", () => {
  barasuraImg.style.opacity = 1;
});
barasura.addEventListener("mouseleave", () => {
  barasuraImg.style.opacity = 0;
});

//bongabonga
bongabonga.addEventListener("mouseover", () => {
  bongabongaImg.style.opacity = 1;
});
bongabonga.addEventListener("mouseleave", () => {
  bongabongaImg.style.opacity = 0;
});

//efekRumahKaca
efekRumahKaca.addEventListener("mouseover", () => {
  efekRumahKacaImg.style.opacity = 1;
});
efekRumahKaca.addEventListener("mouseleave", () => {
  efekRumahKacaImg.style.opacity = 0;
});

//fourtwnty
fourtwnty.addEventListener("mouseover", () => {
  fourtwntyImg.style.opacity = 1;
});
fourtwnty.addEventListener("mouseleave", () => {
  fourtwntyImg.style.opacity = 0;
});

//geisha
geisha.addEventListener("mouseover", () => {
  geishaImg.style.opacity = 1;
});
geisha.addEventListener("mouseleave", () => {
  geishaImg.style.opacity = 0;
});

//gugunBluesShelter
gugunBluesShelter.addEventListener("mouseover", () => {
  gugunBluesShelterImg.style.opacity = 1;
});
gugunBluesShelter.addEventListener("mouseleave", () => {
  gugunBluesShelterImg.style.opacity = 0;
});

//tuanTigaBelas
tuanTigaBelas.addEventListener("mouseover", () => {
  tuanTigaBelasImg.style.opacity = 1;
});
tuanTigaBelas.addEventListener("mouseleave", () => {
  tuanTigaBelasImg.style.opacity = 0;
});

//idgitaf
idgitaf.addEventListener("mouseover", () => {
  idgitafImg.style.opacity = 1;
});
idgitaf.addEventListener("mouseleave", () => {
  idgitafImg.style.opacity = 0;
});

//kuntoAji
kuntoAji.addEventListener("mouseover", () => {
  kuntoAjiImg.style.opacity = 1;
});
kuntoAji.addEventListener("mouseleave", () => {
  kuntoAjiImg.style.opacity = 0;
});

//hivi
hivi.addEventListener("mouseover", () => {
  hiviImg.style.opacity = 1;
});
hivi.addEventListener("mouseleave", () => {
  hiviImg.style.opacity = 0;
});



 //day 2
  

window.addEventListener("mousemove", (e) => {
  let x = e.pageX,
    y = e.pageY;

  //feast
  if (e.target.classList.contains("danilla")) {
    danillaImg.style.left = `${x}px`;
    danillaImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("kangen-band")) {
    kangenBandImg.style.left = `${x}px`;
    kangenBandImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("diskopantera")) {
    diskopanteraImg.style.left = `${x}px`;
    diskopanteraImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("diskoria")) {
    diskoriaImg.style.left = `${x}px`;
    diskoriaImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("feby-putri")) {
    febyPutriImg.style.left = `${x}px`;
    febyPutriImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("feel-koplo")) {
    feelKoploImg.style.left = `${x}px`;
    feelKoploImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("fleur")) {
    fleurImg.style.left = `${x}px`;
    fleurImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("jkt48")) {
    jkt48Img.style.left = `${x}px`;
    jkt48Img.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("jason-ranti")) {
    jasonRantiImg.style.left = `${x}px`;
    jasonRantiImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("komunal")) {
    komunalImg.style.left = `${x}px`;
    komunalImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("kung-pow-chicken")) {
    kungPowChickenImg.style.left = `${x}px`;
    kungPowChickenImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("kuntari")) {
    kuntariImg.style.left = `${x}px`;
    kuntariImg.style.top = `${y}px`;
  }

  if (e.target.classList.contains("marion-jola")) {
    marionJolaImg.style.left = `${x}px`;
    marionJolaImg.style.top = `${y}px`;
  }
  
  if (e.target.classList.contains("ran")) {
    ranImg.style.left = `${x}px`;
    ranImg.style.top = `${y}px`;
  } 

  if (e.target.classList.contains("geisha")) {
    geishaImg.style.left = `${x}px`;
    geishaImg.style.top = `${y}px`;
  }
});

//danilla
danilla.addEventListener("mouseover", () => {
  danillaImg.style.opacity = 1;
});
danilla.addEventListener("mouseleave", () => {
  danillaImg.style.opacity = 0;
});

//kangenBand
kangenBand.addEventListener("mouseover", () => {
  kangenBandImg.style.opacity = 1;
});
kangenBand.addEventListener("mouseleave", () => {
  kangenBandImg.style.opacity = 0;
});

//diskopantera
diskopantera.addEventListener("mouseover", () => {
  diskopanteraImg.style.opacity = 1;
});
diskopantera.addEventListener("mouseleave", () => {
  diskopanteraImg.style.opacity = 0;
});

//diskoria
diskoria.addEventListener("mouseover", () => {
  diskoriaImg.style.opacity = 1;
});
diskoria.addEventListener("mouseleave", () => {
  diskoriaImg.style.opacity = 0;
});

//febyPutri
febyPutri.addEventListener("mouseover", () => {
  febyPutriImg.style.opacity = 1;
});
febyPutri.addEventListener("mouseleave", () => {
  febyPutriImg.style.opacity = 0;
});

//feelKoplo
feelKoplo.addEventListener("mouseover", () => {
  feelKoploImg.style.opacity = 1;
});
feelKoplo.addEventListener("mouseleave", () => {
  feelKoploImg.style.opacity = 0;
});

//fleur
fleur.addEventListener("mouseover", () => {
  fleurImg.style.opacity = 1;
});
fleur.addEventListener("mouseleave", () => {
  fleurImg.style.opacity = 0;
});

//jkt48
jkt48.addEventListener("mouseover", () => {
  jkt48Img.style.opacity = 1;
});
jkt48.addEventListener("mouseleave", () => {
  jkt48Img.style.opacity = 0;
});

//fourtwnty
jasonRanti.addEventListener("mouseover", () => {
  jasonRantiImg.style.opacity = 1;
});
jasonRanti.addEventListener("mouseleave", () => {
  jasonRantiImg.style.opacity = 0;
});

//komunal
komunal.addEventListener("mouseover", () => {
  komunalImg.style.opacity = 1;
});
komunal.addEventListener("mouseleave", () => {
  komunalImg.style.opacity = 0;
});

//kungPowChicken
kungPowChicken.addEventListener("mouseover", () => {
  kungPowChickenImg.style.opacity = 1;
});
kungPowChicken.addEventListener("mouseleave", () => {
  kungPowChickenImg.style.opacity = 0;
});

//kuntari
kuntari.addEventListener("mouseover", () => {
  kuntariImg.style.opacity = 1;
});
kuntari.addEventListener("mouseleave", () => {
  kuntariImg.style.opacity = 0;
});

//marionJola
marionJola.addEventListener("mouseover", () => {
  marionJolaImg.style.opacity = 1;
});
marionJola.addEventListener("mouseleave", () => {
  marionJolaImg.style.opacity = 0;
});

//ran
ran.addEventListener("mouseover", () => {
  ranImg.style.opacity = 1;
});
ran.addEventListener("mouseleave", () => {
  ranImg.style.opacity = 0;
});








//day 3
const souljah = document.querySelector(".souljah"),
souljahImg = document.querySelector(".souljah-img");

const mundae = document.querySelector(".mundae"),
mundaeImg = document.querySelector(".mundae-img");

const kotak = document.querySelector(".kotak"),
kotakImg = document.querySelector(".kotak-img");

const nassar = document.querySelector(".nassar"),
nassarImg = document.querySelector(".nassar-img");

const hursa = document.querySelector(".hursa"),
hursaImg = document.querySelector(".hursa-img");

const hindia = document.querySelector(".hindia"),
hindiaImg = document.querySelector(".hindia-img");

const fiersaBesari = document.querySelector(".fiersa-besari"),
fiersaBesariImg = document.querySelector(".fiersa-besari-img");

const eazz = document.querySelector(".eazz"),
eazzImg = document.querySelector(".eazz-img");

const closehead = document.querySelector(".closehead"),
closeheadImg = document.querySelector(".closehead-img");

const budiDoremi = document.querySelector(".budi-doremi"),
budiDoremiImg = document.querySelector(".budi-doremi-img");

const afgan = document.querySelector(".afgan"),
afganImg = document.querySelector(".afgan-img");

const burgerkill = document.querySelector(".burgerkill"),
burgerkillImg = document.querySelector(".burgerkill-img");

const diphaBarus = document.querySelector(".dipha-barus"),
diphaBarusImg = document.querySelector(".dipha-barus-img");

const isyanaSarasvati = document.querySelector(".isyana-sarasvati"),
isyanaSarasvatiImg = document.querySelector(".isyana-sarasvati-img");
 

window.addEventListener("mousemove", (e) => {
let x = e.pageX,
  y = e.pageY;

//feast
if (e.target.classList.contains("souljah")) {
  souljahImg.style.left = `${x}px`;
  souljahImg.style.top = `${y}px`;
}

if (e.target.classList.contains("mundae")) {
  mundaeImg.style.left = `${x}px`;
  mundaeImg.style.top = `${y}px`;
}

if (e.target.classList.contains("kotak")) {
  kotakImg.style.left = `${x}px`;
  kotakImg.style.top = `${y}px`;
}

if (e.target.classList.contains("nassar")) {
  nassarImg.style.left = `${x}px`;
  nassarImg.style.top = `${y}px`;
}

if (e.target.classList.contains("hursa")) {
  hursaImg.style.left = `${x}px`;
  hursaImg.style.top = `${y}px`;
}

if (e.target.classList.contains("hindia")) {
  hindiaImg.style.left = `${x}px`;
  hindiaImg.style.top = `${y}px`;
}

if (e.target.classList.contains("fiersa-besari")) {
  fiersaBesariImg.style.left = `${x}px`;
  fiersaBesariImg.style.top = `${y}px`;
}

if (e.target.classList.contains("eazz")) {
  eazzImg.style.left = `${x}px`;
  eazzImg.style.top = `${y}px`;
}

if (e.target.classList.contains("closehead")) {
  closeheadImg.style.left = `${x}px`;
  closeheadImg.style.top = `${y}px`;
}

if (e.target.classList.contains("budi-doremi")) {
  budiDoremiImg.style.left = `${x}px`;
  budiDoremiImg.style.top = `${y}px`;
}

if (e.target.classList.contains("afgan")) {
  afganImg.style.left = `${x}px`;
  afganImg.style.top = `${y}px`;
}

if (e.target.classList.contains("burgerkill")) {
  burgerkillImg.style.left = `${x}px`;
  burgerkillImg.style.top = `${y}px`;
}

if (e.target.classList.contains("dipha-barus")) {
  diphaBarusImg.style.left = `${x}px`;
  diphaBarusImg.style.top = `${y}px`;
}

if (e.target.classList.contains("isyana-sarasvati")) {
  isyanaSarasvatiImg.style.left = `${x}px`;
  isyanaSarasvatiImg.style.top = `${y}px`;
} 
});

//souljah
souljah.addEventListener("mouseover", () => {
  souljahImg.style.opacity = 1;
});
souljah.addEventListener("mouseleave", () => {
  souljahImg.style.opacity = 0;
});

//mundae
mundae.addEventListener("mouseover", () => {
  mundaeImg.style.opacity = 1;
});
mundae.addEventListener("mouseleave", () => {
  mundaeImg.style.opacity = 0;
});

//kotak
kotak.addEventListener("mouseover", () => {
  kotakImg.style.opacity = 1;
});
kotak.addEventListener("mouseleave", () => {
  kotakImg.style.opacity = 0;
});

//nassar
nassar.addEventListener("mouseover", () => {
  nassarImg.style.opacity = 1;
});
nassar.addEventListener("mouseleave", () => {
  nassarImg.style.opacity = 0;
});

//hursa
hursa.addEventListener("mouseover", () => {
  hursaImg.style.opacity = 1;
});
hursa.addEventListener("mouseleave", () => {
  hursaImg.style.opacity = 0;
});

//hindia
hindia.addEventListener("mouseover", () => {
  hindiaImg.style.opacity = 1;
});
hindia.addEventListener("mouseleave", () => {
  hindiaImg.style.opacity = 0;
});

//fiersaBesari
fiersaBesari.addEventListener("mouseover", () => {
  fiersaBesariImg.style.opacity = 1;
});
fiersaBesari.addEventListener("mouseleave", () => {
  fiersaBesariImg.style.opacity = 0;
});

//eazz
eazz.addEventListener("mouseover", () => {
  eazzImg.style.opacity = 1;
});
eazz.addEventListener("mouseleave", () => {
  eazzImg.style.opacity = 0;
});

//closehead
closehead.addEventListener("mouseover", () => {
  closeheadImg.style.opacity = 1;
});
closehead.addEventListener("mouseleave", () => {
  closeheadImg.style.opacity = 0;
});

//budiDoremi
budiDoremi.addEventListener("mouseover", () => {
  budiDoremiImg.style.opacity = 1;
});
budiDoremi.addEventListener("mouseleave", () => {
  budiDoremiImg.style.opacity = 0;
});

//afgan
afgan.addEventListener("mouseover", () => {
  afganImg.style.opacity = 1;
});
afgan.addEventListener("mouseleave", () => {
  afganImg.style.opacity = 0;
});

//burgerkill
burgerkill.addEventListener("mouseover", () => {
  burgerkillImg.style.opacity = 1;
});
burgerkill.addEventListener("mouseleave", () => {
  burgerkillImg.style.opacity = 0;
});

//diphaBarus
diphaBarus.addEventListener("mouseover", () => {
  diphaBarusImg.style.opacity = 1;
});
diphaBarus.addEventListener("mouseleave", () => {
  diphaBarusImg.style.opacity = 0;
});

//isyanaSarasvati
isyanaSarasvati.addEventListener("mouseover", () => {
  isyanaSarasvatiImg.style.opacity = 1;
});
isyanaSarasvati.addEventListener("mouseleave", () => {
  isyanaSarasvatiImg.style.opacity = 0;
});