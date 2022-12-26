verileriYukle()

const sonuc = document.getElementById("sonuc")
const aramaKutusu = document.getElementById("aramaKutusu")
const aramaListesi = document.getElementById("aramaListesi")

async function verileriYukle(){
    const sunucuYaniti = await fetch('https://sozluk.gov.tr/atasozu')
    let veriler = await sunucuYaniti.json()

}