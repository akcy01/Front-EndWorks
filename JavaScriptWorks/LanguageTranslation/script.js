const fromLang = document.getElementById("from-lang")
const toLang = document.getElementById("to-lang")
const btnTranslate = document.getElementById("btnTranslate")
const fromText = document.getElementById("from-text")
const toText = document.getElementById("to-text")
const exchange = document.getElementsByClassName("exchange")

/* for'da in index numarasını getirir of indexteki değeri getirir. */
for(let lang in languages)
{
    let option = `<option value="${lang}">${languages[lang]}</option>`
    fromLang.insertAdjacentHTML("beforeend",option)
    toLang.insertAdjacentHTML("beforeend",option)

    fromLang.value = "tr-TR"
    toLang.value = "en-GB"
}

btnTranslate.addEventListener("click",() => {
    let text = fromText.value
    let from = fromLang.value
    let to = toLang.value
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`

    fetch(url)
    .then(u => u.json())
    .then(data => {
        toText.value = data.responseData.translatedText
    })
})

exchange.addEventListener("click",() => {
    let text = fromText.value
    fromText.value = toText.value
    toText.value = text

    let lang = fromLang.value
    fromLang.value = toLang.value
    toLang.value = lang
})