function toggleLanguage() {
  var language = localStorage.getItem("language");

  if(language === "en") {
    toThai();
  } else {
    toEnglish();
  }
}

function toEnglish() {
  var englishDivs = document.getElementsByClassName("english");
  var thaiDivs = document.getElementsByClassName("thai");
  for(var i = 0; i < englishDivs.length; i++) {
    englishDivs[i].classList.remove("hide");
  }
  for(var j = 0; j < thaiDivs.length; j++) {
    thaiDivs[j].classList.add("hide");
  }

  localStorage.setItem("language", "en");

  document.getElementById("en-header-text").classList.add("pink");
  document.getElementById("th-header-text").classList.remove("pink");

  var languageWarningEl = document.getElementById("language-warning");
  if(languageWarningEl !== null) {
    languageWarningEl.classList.remove("hide");
  }
}

function toThai() {
  var thaiDivs = document.getElementsByClassName("thai");
  var englishDivs = document.getElementsByClassName("english");

  for(var j = 0; j < thaiDivs.length; j++) {
    thaiDivs[j].classList.remove("hide");
  }

  for(var i = 0; i < englishDivs.length; i++) {
    englishDivs[i].classList.add("hide");
  }

  localStorage.setItem("language", "th");

  document.getElementById("th-header-text").classList.add("pink");
  document.getElementById("en-header-text").classList.remove("pink");

  var languageWarningEl = document.getElementById("language-warning");
  if(languageWarningEl !== null) {
    languageWarningEl.classList.add("hide");
  }
}

var language = localStorage.getItem("language");
if(language === 'en') {
  toEnglish();
} else {
  toThai();
}