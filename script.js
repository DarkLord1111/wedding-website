/* ============================================================
   Luca & Diane Wedding — Script
   ============================================================ */

// ===== TRANSLATIONS =====
const translations = {
  en: {
    subtitle: "Invitation",
    date: "June 5, 2027",
    venue: "Villa La Sorgente di Francesca\nStrada Provinciale 84\n50065 Pontassieve, Italy",
    tagline: "We would be delighted to celebrate this day with you",
    scroll: "Scroll down",
    detailsTitle: "The Wedding Day & Program",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    ceremonyTitle: "Ceremony",
    ceremonyText: "4:00 PM — Ceremony\nWe will exchange our vows surrounded by our loved ones in Tuscany.",
    receptionTitle: "Reception",
    receptionText: "After the ceremony\nAperitivo, dinner, and party with DJ under the stars.",
    locationTitle: "Location",
    locationText: "Villa La Sorgente di Francesca\nStrada Provinciale 84, 50065 Pontassieve (FI)\nTuscany, Italy",
    mapLink: "View on Google Maps",
    galleryTitle: "Our Story",
    photoPlaceholder: "Moment",
    extrasTitle: "Good to Know",
    dresscodeTitle: "Dress Code",
    dresscodeText: "Details coming soon — stay tuned for our dress code guidelines!",
    giftTitle: "Gifts",
    giftText: "Your presence is our greatest gift. If you wish to contribute, details will follow.",
    accommodationTitle: "Accommodation",
    accommodationText: "Night at the villa — Accommodation at the villa is arranged for our guests for Saturday night.",
    rsvpTitle: "RSVP",
    rsvpText: "Please confirm your attendance by April 1, 2027.",
    closing: "Our story will be written together!",
    dotLabels: ["Welcome", "Details", "Gallery"]
  },
  fr: {
    subtitle: "Invitation",
    date: "5 Juin 2027",
    venue: "Villa La Sorgente di Francesca\nStrada Provinciale 84\n50065 Pontassieve, Italie",
    tagline: "Nous serions heureux de célébrer ce jour avec vous",
    scroll: "Défiler vers le bas",
    detailsTitle: "Le programme & l'hébergement",
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    ceremonyTitle: "Cérémonie",
    ceremonyText: "16h00 — Cérémonie\nNous nous dirons oui entourés de vous au cœur des collines toscanes.",
    receptionTitle: "Après la cérémonie",
    receptionText: "Apéritif, dîner et soirée avec DJ sous les étoiles dans les jardins de la villa.",
    locationTitle: "Lieu",
    locationText: "Villa La Sorgente di Francesca\nStrada Provinciale 84, 50065 Pontassieve (FI)\nToscane, Italie",
    mapLink: "Voir sur Google Maps",
    galleryTitle: "Notre histoire",
    photoPlaceholder: "Moment",
    extrasTitle: "Bon à Savoir",
    dresscodeTitle: "Code Vestimentaire",
    dresscodeText: "Les détails arrivent bientôt — restez à l'écoute pour nos recommandations vestimentaires !",
    giftTitle: "Cadeaux",
    giftText: "Votre présence est notre plus beau cadeau. Si vous souhaitez contribuer, les détails suivront.",
    accommodationTitle: "Nuit à la villa",
    accommodationText: "Un hébergement à la villa est prévu pour nos invités pour la nuit du samedi.",
    rsvpTitle: "RSVP",
    rsvpText: "Merci de confirmer votre présence avant le 1er avril 2027.",
    closing: "Notre histoire sera complétée ensemble !",
    dotLabels: ["Accueil", "Détails", "Galerie"]
  },
  it: {
    subtitle: "Invito",
    date: "5 Giugno 2027",
    venue: "Villa La Sorgente di Francesca\nStrada Provinciale 84\n50065 Pontassieve, Italia",
    tagline: "Saremmo felici di celebrare questo giorno con voi",
    scroll: "Scorri verso il basso",
    detailsTitle: "Il programma e il soggiorno",
    days: "Giorni",
    hours: "Ore",
    minutes: "Minuti",
    seconds: "Secondi",
    ceremonyTitle: "Cerimonia",
    ceremonyText: "Ore 16:00 — Cerimonia\nCi diremo sì circondati dal vostro affetto tra le colline toscane.",
    receptionTitle: "Dopo la cerimonia",
    receptionText: "Aperitivo, cena e festa con DJ sotto le stelle nei giardini della villa.",
    locationTitle: "Luogo",
    locationText: "Villa La Sorgente di Francesca\nStrada Provinciale 84, 50065 Pontassieve (FI)\nToscana, Italia",
    mapLink: "Vedi su Google Maps",
    galleryTitle: "La Nostra Storia",
    photoPlaceholder: "Momento",
    extrasTitle: "Buono a Sapersi",
    dresscodeTitle: "Dress Code",
    dresscodeText: "Dettagli in arrivo — restate sintonizzati per le nostre indicazioni sull'abbigliamento!",
    giftTitle: "Regali",
    giftText: "La vostra presenza è il regalo più bello. Se desiderate contribuire, i dettagli seguiranno.",
    accommodationTitle: "Notte alla villa",
    accommodationText: "L'alloggio presso la villa è previsto per i nostri ospiti per la notte di sabato.",
    rsvpTitle: "RSVP",
    rsvpText: "Vi preghiamo di confermare la vostra presenza entro il 1° aprile 2027.",
    closing: "La nostra storia sarà scritta insieme!",
    dotLabels: ["Benvenuti", "Dettagli", "Galleria"]
  },
  ru: {
    subtitle: "Приглашение",
    date: "5 июня 2027",
    venue: "Villa La Sorgente di Francesca\nStrada Provinciale 84\n50065 Понтассьеве, Италия",
    tagline: "Мы будем счастливы разделить этот день с вами",
    scroll: "Прокрутите вниз",
    detailsTitle: "Программа и проживание",
    days: "Дней",
    hours: "Часов",
    minutes: "Минут",
    seconds: "Секунд",
    ceremonyTitle: "Церемония",
    ceremonyText: "16:00 — Церемония\nМы скажем друг другу «да» в окружении самых близких среди холмов Тосканы.",
    receptionTitle: "После церемонии",
    receptionText: "Аперитив, ужин и вечеринка с DJ под звёздами в саду виллы.",
    locationTitle: "Место",
    locationText: "Villa La Sorgente di Francesca\nStrada Provinciale 84, 50065 Pontassieve (FI)\nТоскана, Италия",
    mapLink: "Посмотреть на Google Maps",
    galleryTitle: "Наша история",
    photoPlaceholder: "Момент",
    extrasTitle: "Полезная информация",
    dresscodeTitle: "Дресс-код",
    dresscodeText: "Подробности скоро появятся — следите за нашими рекомендациями по дресс-коду!",
    giftTitle: "Подарки",
    giftText: "Ваше присутствие — лучший подарок. Если вы хотите сделать вклад, детали будут позже.",
    accommodationTitle: "Ночь на вилле",
    accommodationText: "Для наших гостей предусмотрено размещение на вилле на ночь субботы.",
    rsvpTitle: "RSVP",
    rsvpText: "Пожалуйста, подтвердите своё присутствие до 1 апреля 2027 года.",
    closing: "Наша история продолжится вместе с вами!",
    dotLabels: ["Главная", "Детали", "Галерея"]
  }
};

// ===== STATE =====
let currentPage = 0;
let currentLang = "en";
let isTransitioning = false;
const totalPages = 3;

// ===== DOM REFS =====
const pages = document.querySelectorAll(".page");
const dots = document.querySelectorAll(".page-dot");
const langBtns = document.querySelectorAll(".lang-btn");

// ===== LANGUAGE =====
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "ru" ? "ru" : lang;

  // Update active button
  langBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Apply translations
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      // Support newlines → <br>
      el.innerHTML = t[key].replace(/\n/g, "<br />");
    }
  });

  // Update dot labels
  dots.forEach((dot, i) => {
    dot.dataset.label = t.dotLabels[i];
  });

  // Update page title
  const titles = {
    en: "Luca & Diane — Wedding Invitation",
    fr: "Luca & Diane — Invitation au Mariage",
    it: "Luca & Diane — Invito al Matrimonio",
    ru: "Luca & Diane — Приглашение на свадьбу"
  };
  document.title = titles[lang];
}

// Language button clicks
langBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

// ===== PAGE NAVIGATION =====
function goToPage(index) {
  if (index === currentPage || isTransitioning || index < 0 || index >= totalPages) return;
  isTransitioning = true;

  pages.forEach((page, i) => {
    page.classList.remove("current", "above", "below", "animate-in");
    if (i === index) {
      page.classList.add("current");
      // Trigger entrance animations after a small delay
      requestAnimationFrame(() => {
        page.classList.add("animate-in");
      });
    } else if (i < index) {
      page.classList.add("above");
    } else {
      page.classList.add("below");
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentPage = index;

  setTimeout(() => {
    isTransitioning = false;
  }, 750);
}

// Dot clicks
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    goToPage(parseInt(dot.dataset.page, 10));
  });
});

// Scroll hint click
const scrollHint = document.querySelector(".scroll-hint");
if (scrollHint) {
  scrollHint.addEventListener("click", () => {
    goToPage(1);
  });
}

// ===== SCROLL / SWIPE HANDLING =====
let touchStartY = 0;
let touchEndY = 0;

// Mouse wheel
document.addEventListener("wheel", (e) => {
  if (isTransitioning) return;
  if (e.deltaY > 30) {
    goToPage(currentPage + 1);
  } else if (e.deltaY < -30) {
    goToPage(currentPage - 1);
  }
}, { passive: true });

// Touch events
document.addEventListener("touchstart", (e) => {
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener("touchend", (e) => {
  if (isTransitioning) return;
  touchEndY = e.changedTouches[0].screenY;
  const diff = touchStartY - touchEndY;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      goToPage(currentPage + 1);
    } else {
      goToPage(currentPage - 1);
    }
  }
}, { passive: true });

// Keyboard
document.addEventListener("keydown", (e) => {
  if (isTransitioning) return;
  if (e.key === "ArrowDown" || e.key === "PageDown") {
    e.preventDefault();
    goToPage(currentPage + 1);
  } else if (e.key === "ArrowUp" || e.key === "PageUp") {
    e.preventDefault();
    goToPage(currentPage - 1);
  }
});

// ===== COUNTDOWN =====
const weddingDate = new Date("2027-06-05T16:00:00+02:00"); // 4 PM CEST

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("countdown-days").textContent = "000";
    document.getElementById("countdown-hours").textContent = "00";
    document.getElementById("countdown-mins").textContent = "00";
    document.getElementById("countdown-secs").textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown-days").textContent = String(days).padStart(3, "0");
  document.getElementById("countdown-hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("countdown-mins").textContent = String(mins).padStart(2, "0");
  document.getElementById("countdown-secs").textContent = String(secs).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== INIT =====
setLanguage("en");
