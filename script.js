function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();       
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function mostraDataSeparata() {
    const oggi = new Date();
    const opzioni = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormattata = oggi.toLocaleDateString('it-IT', opzioni);
    document.getElementById("dataOggi").innerHTML = "📅 Oggi è " + dataFormattata;
  }

  let utterance;

  function readPage() {
    const text = document.body.innerText;
    utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "it-IT";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
  }

  function stopReading() {
    speechSynthesis.cancel();
  }