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
}

var language = localStorage.getItem("language");
if(language === 'en') {
  toEnglish();
} else {
  toThai();
}