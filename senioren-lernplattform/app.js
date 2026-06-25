const app = document.querySelector("#app");

const routes = {
  home: "Start",
  onboarding: "Lernweg",
  dashboard: "Übersicht",
  learning: "Lernen",
  simulations: "Üben",
  forum: "Forum",
  chat: "Hilfe-Chat",
  events: "Termine",
  profile: "Profil"
};

const lessons = [
  {
    id: "online-banking",
    title: "Online-Banking sicher verstehen",
    icon: "🏦",
    level: "Anfänger",
    duration: "18 Minuten",
    progress: 35,
    text: "Sie lernen, woran Sie eine echte Bankseite erkennen und wie eine Überweisung aufgebaut ist."
  },
  {
    id: "bahnreise",
    title: "Eine Bahnreise online buchen",
    icon: "🚆",
    level: "Anfänger",
    duration: "15 Minuten",
    progress: 20,
    text: "Schritt für Schritt: Strecke suchen, Verbindung wählen und eine Probebuchung abschließen."
  },
  {
    id: "phishing",
    title: "Betrug und falsche Nachrichten erkennen",
    icon: "🛡️",
    level: "Anfänger",
    duration: "12 Minuten",
    progress: 60,
    text: "Sie üben, gefährliche Links, Druck und ungewöhnliche Absender zu erkennen."
  },
  {
    id: "messenger",
    title: "E-Mail und Messenger ruhig nutzen",
    icon: "💬",
    level: "Anfänger",
    duration: "14 Minuten",
    progress: 10,
    text: "Nachrichten lesen, beantworten, Bilder verschicken und Ruhe bewahren, wenn etwas unklar ist."
  },
  {
    id: "passwort",
    title: "Gute Passwörter erstellen",
    icon: "🔑",
    level: "Fortgeschritten",
    duration: "10 Minuten",
    progress: 0,
    text: "Ein einfaches Rezept für sichere Passwörter, das man sich trotzdem merken kann."
  },
  {
    id: "videotelefonie",
    title: "Videotelefonie ausprobieren",
    icon: "📹",
    level: "Anfänger",
    duration: "11 Minuten",
    progress: 45,
    text: "Kamera, Mikrofon, Einladung und Auflegen werden in Ruhe erklärt."
  }
];

const events = [
  ["Di, 02. Juli", "Online-Banking ohne Angst", "Volkshochschule Mitte"],
  ["Fr, 05. Juli", "Bahn-App gemeinsam üben", "Stadtbibliothek"],
  ["Mi, 10. Juli", "Betrug am Telefon und im Internet erkennen", "Seniorentreff Nord"]
];

function icon(name) {
  return `<span class="icon" aria-hidden="true">${name}</span>`;
}

function layout(page, content) {
  const nav = Object.entries(routes)
    .map(([key, label]) => `<a href="#/${key}" class="${page === key ? "active" : ""}">${label}</a>`)
    .join("");

  app.innerHTML = `
    <div class="shell">
      <header class="topbar">
        <a class="brand" href="#/home"><span class="brand-mark">✓</span><span>Einfach Digital Lernen</span></a>
        <nav class="nav" aria-label="Hauptnavigation">${nav}</nav>
      </header>
      <main id="inhalt" tabindex="-1">${content}</main>
      <button class="button help-button" id="helpToggle">? Hilfe anzeigen</button>
      <aside class="card help-panel" id="helpPanel" aria-live="polite">
        <h2>Sie sind nicht allein</h2>
        <p>Alles hier ist eine Übung. Sie können nichts kaputt machen und keine echten Daten senden.</p>
        <div class="inline-actions">
          <a class="button secondary" href="#/chat">Helfer fragen</a>
          <button class="ghost-button" data-simple-help>Bitte einfacher erklären</button>
        </div>
      </aside>
      <footer class="footer">
        <div class="container">
          <strong>Einfach Digital Lernen</strong>
          <p>Ein klickbarer Prototyp mit Platzhalterdaten. Später erweiterbar für Login, Datenbank, KI-Chatbot und Eventverwaltung.</p>
        </div>
      </footer>
    </div>
  `;

  document.querySelector("#helpToggle").addEventListener("click", () => {
    document.querySelector("#helpPanel").classList.toggle("open");
  });
  document.querySelector("[data-simple-help]").addEventListener("click", () => {
    location.hash = "#/chat";
  });
}

function home() {
  layout("home", `
    <section class="section hero">
      <div class="container hero-copy">
        <span class="eyebrow">Ruhig lernen. Sicher üben.</span>
        <h1>Einfach Digital Lernen</h1>
        <p class="lead">Diese Plattform hilft Menschen ab 65 Jahren, Smartphone, Computer und Internet Schritt für Schritt zu verstehen. Alles ist risikofrei und in einfacher Sprache erklärt.</p>
        <div class="actions">
          <a class="button" href="#/simulations">Jetzt kostenlos ausprobieren</a>
          <a class="ghost-button" href="#/onboarding">Lernweg starten</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container grid three">
        <article class="card">${icon("🧭")}<h2>Immer wissen, wo Sie sind</h2><p>Wenige Menüpunkte, klare Schritte und große Schaltflächen.</p></article>
        <article class="card">${icon("🧪")}<h2>Nur Übung</h2><p>Keine echten Bankdaten. Keine echten Tickets. Kein Risiko.</p></article>
        <article class="card">${icon("🤝")}<h2>Hilfe bleibt sichtbar</h2><p>Der Hilfe-Knopf ist immer da, wenn etwas unklar ist.</p></article>
      </div>
    </section>
    <section class="section soft">
      <div class="container">
        <h2>Beliebte Themen</h2>
        <div class="grid three">${lessons.slice(0, 3).map(lessonCard).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="container grid two">
        <div>
          <h2>Aktuelle Schulungen und Workshops</h2>
          <p>Treffen Sie Trainerinnen, Trainer und andere Lernende vor Ort oder online.</p>
        </div>
        <div class="grid">${events.map(eventCard).join("")}</div>
      </div>
    </section>
    <section class="section green">
      <div class="container">
        <h2>Keine Angst vor Fehlern</h2>
        <p class="lead">Hier dürfen Sie alles anklicken, ausprobieren und wiederholen. Wenn etwas falsch läuft, erklären wir ruhig, was passiert ist und was Sie beim nächsten Mal beachten können.</p>
        <a class="button secondary" href="#/simulations">Üben ohne Risiko</a>
      </div>
    </section>
  `);
}

function onboarding() {
  layout("onboarding", `
    <section class="section soft">
      <div class="container">
        <h1>Ihr Lernweg</h1>
        <p class="lead">Beantworten Sie ein paar einfache Fragen. Danach schlagen wir passende erste Schritte vor.</p>
        <form class="form-grid" id="onboardingForm">
          ${question("Nutzen Sie ein Smartphone?", ["Ja", "Manchmal", "Nein"])}
          ${question("Nutzen Sie einen Computer oder ein Tablet?", ["Ja", "Manchmal", "Nein"])}
          ${question("Haben Sie schon einmal Online-Banking benutzt?", ["Ja", "Nein", "Ich bin unsicher"])}
          ${question("Haben Sie schon einmal online eine Bahnreise gebucht?", ["Ja", "Nein", "Mit Hilfe"])}
          ${question("Wie sicher fühlen Sie sich im Internet?", ["Sehr unsicher", "Etwas sicher", "Schon recht sicher"])}
          ${checkQuestion("Wobei brauchen Sie Hilfe?", ["Online-Banking lernen", "Bahn- und Reisebuchungen lernen", "E-Mail und Messenger verstehen", "Betrug und Phishing erkennen", "Behörden- und Gesundheitsportale nutzen", "Fotos, Dateien und Passwörter verwalten", "Videotelefonie lernen"])}
          <button class="button" type="submit">Persönlichen Lernpfad anzeigen</button>
        </form>
        <div id="pathResult" class="panel" style="display:none; margin-top:1rem"></div>
      </div>
    </section>
  `);
  document.querySelector("#onboardingForm").addEventListener("submit", event => {
    event.preventDefault();
    const result = document.querySelector("#pathResult");
    result.style.display = "block";
    result.innerHTML = `<h2>Ihr Vorschlag</h2><p>Beginnen Sie mit diesen drei ruhigen Übungen:</p><div class="grid three">${lessons.slice(0, 3).map(lessonCard).join("")}</div>`;
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function dashboard() {
  layout("dashboard", `
    <section class="section">
      <div class="container">
        <h1>Guten Tag, Erika</h1>
        <p class="lead">Heute empfohlen: eine kurze Übung, ein sicherer Test und ein Termin in Ihrer Nähe.</p>
        <div class="grid three">
          <article class="card emphasis"><h2>Ihr Fortschritt</h2><div class="progress"><span style="width:42%"></span></div><p>42 Prozent Ihres ersten Lernwegs sind geschafft.</p></article>
          <article class="card"><h2>Nächste Lektion</h2><p>Online-Banking sicher verstehen</p><a class="button" href="#/module/online-banking">Lektion starten</a></article>
          <article class="card"><h2>Nächste Übung</h2><p>Sparkassen-Überweisung ohne echtes Geld.</p><a class="button secondary" href="#/banking">Üben</a></article>
        </div>
      </div>
    </section>
  `);
}

function learning() {
  layout("learning", `
    <section class="section soft">
      <div class="container">
        <h1>Lernbereich</h1>
        <p class="lead">Kurze Videos, einfache Beiträge, Schritt-für-Schritt-Anleitungen, Lernspiele, Quizfragen und Wiederholungen.</p>
        <div class="grid three">${lessons.map(lessonCard).join("")}</div>
      </div>
    </section>
  `);
}

function moduleDetail(id = "online-banking") {
  const lesson = lessons.find(item => item.id === id) || lessons[0];
  layout("learning", `
    <section class="section">
      <div class="container grid two">
        <div>
          <span class="eyebrow">${lesson.level} · ${lesson.duration}</span>
          <h1>${lesson.title}</h1>
          <p class="lead">${lesson.text}</p>
          <div class="actions">
            <button class="button">Lektion starten</button>
            <button class="ghost-button">Erst erklären lassen</button>
            <a class="button secondary" href="#/simulations">Üben ohne Risiko</a>
          </div>
        </div>
        <aside class="panel">
          <h2>Was Sie hier lernen</h2>
          <ul>
            <li>Woran Sie sichere Seiten erkennen.</li>
            <li>Welche Schritte wichtig sind.</li>
            <li>Wann Sie lieber Hilfe holen sollten.</li>
          </ul>
          <h3>Fortschritt</h3>
          <div class="progress"><span style="width:${lesson.progress}%"></span></div>
        </aside>
      </div>
    </section>
  `);
}

function simulations() {
  layout("simulations", `
    <section class="section soft">
      <div class="container">
        <h1>Üben ohne Risiko</h1>
        <p class="lead">Alle Bereiche sind deutlich als Übung gekennzeichnet. Es werden keine echten Daten übertragen.</p>
        <div class="grid three">
          ${simCard("🏦", "Sparkassen-Überweisung", "Empfänger, IBAN, Betrag, TAN und Abschlussmeldung üben.", "#/banking")}
          ${simCard("🚆", "Bahnbuchung", "Strecke, Verbindung, Sitzplatz und fiktive Zahlung ausprobieren.", "#/train")}
          ${simCard("🛒", "Online-Shopping", "Warenkorb, Adresse und sichere Zahlung erkennen.", "#/embedded")}
          ${simCard("✉️", "E-Mail-Postfach", "Nachrichten öffnen und gefährliche Links erkennen.", "#/embedded")}
          ${simCard("🛡️", "Phishing-Erkennung", "Warnzeichen in Nachrichten und Webseiten finden.", "#/embedded")}
          ${simCard("📹", "Videotelefonie", "Kamera und Mikrofon gefahrlos testen.", "#/embedded")}
        </div>
      </div>
    </section>
  `);
}

function banking() {
  simulationLayout("Sparkassen-Überweisung", [
    "Geben Sie einen fiktiven Empfänger ein.",
    "Prüfen Sie die Zusammenfassung.",
    "Die TAN ist hier nur eine Übung."
  ], `
    <form id="bankForm" class="fake-body">
      ${field("Empfänger", "empfaenger", "Seniorentreff Beispiel")}
      ${field("IBAN", "iban", "DE00 0000 0000 0000 0000 00")}
      ${field("Betrag", "betrag", "25,00 Euro")}
      ${field("Verwendungszweck", "zweck", "Kursgebühr Beispiel")}
      <button class="button" type="submit">Zusammenfassung anzeigen</button>
    </form>
    <div id="bankResult" class="fake-body"></div>
  `, "bankForm", "bankResult", "Dies war nur eine Übung. Es wurde kein Geld überwiesen.");
}

function train() {
  simulationLayout("Bahnbuchung", [
    "Wählen Sie Start, Ziel und Datum.",
    "Suchen Sie eine fiktive Verbindung aus.",
    "Die Zahlungsseite kauft kein echtes Ticket."
  ], `
    <form id="trainForm" class="fake-body">
      ${selectField("Startbahnhof", "start", ["Berlin Hbf", "Hamburg Hbf", "München Hbf"])}
      ${selectField("Zielbahnhof", "ziel", ["Köln Hbf", "Dresden Hbf", "Frankfurt Main Hbf"])}
      ${field("Datum", "datum", "15.07.2026")}
      ${selectField("Verbindung", "verbindung", ["09:12 Uhr · 1 Umstieg", "11:04 Uhr · Direkt", "14:20 Uhr · 1 Umstieg"])}
      ${selectField("Sitzplatz", "sitz", ["Kein Sitzplatz", "Fensterplatz", "Gangplatz"])}
      <button class="button" type="submit">Fiktive Zahlung anzeigen</button>
    </form>
    <div id="trainResult" class="fake-body"></div>
  `, "trainForm", "trainResult", "Dies war nur eine Übung. Es wurde kein Ticket gekauft.");
}

function simulationLayout(title, guideSteps, inner, formId, resultId, doneText) {
  layout("simulations", `
    <section class="section soft">
      <div class="container">
        <h1>${title}</h1>
        <p class="lead">Übungsumgebung: Es werden keine echten Daten übertragen.</p>
        <div class="steps">
          <aside class="panel guide">
            <h2>Anleitung</h2>
            ${guideSteps.map((step, index) => `<p><strong>Schritt ${index + 1}:</strong> ${step}</p>`).join("")}
            <p><strong>Wichtig:</strong> Nutzen Sie niemals echte PINs oder echte TANs in einer Übung.</p>
          </aside>
          <section class="fake-site">
            <div class="fake-header"><span>Übungsseite</span><span>Kein echtes Konto</span></div>
            ${inner}
          </section>
        </div>
      </div>
    </section>
  `);
  document.querySelector(`#${formId}`).addEventListener("submit", event => {
    event.preventDefault();
    document.querySelector(`#${resultId}`).innerHTML = `
      <div class="summary"><h2>Zusammenfassung</h2><p>Bitte prüfen Sie in echten Seiten immer Empfänger, Adresse der Webseite und Betrag ganz in Ruhe.</p></div>
      <div class="field"><label>Fiktive TAN</label><input value="123456" readonly /></div>
      <div class="summary"><strong>${doneText}</strong></div>
    `;
  });
}

function embedded() {
  layout("simulations", `
    <section class="section">
      <div class="container steps">
        <aside class="panel guide">
          <h2>Anleitung neben der Website</h2>
          <p><strong>Aktueller Schritt:</strong> Prüfen Sie zuerst die Internetadresse.</p>
          <p><strong>Warum?</strong> Betrugsseiten sehen oft echt aus, haben aber eine falsche Adresse.</p>
          <p><strong>Achten Sie auf:</strong> Druck, Drohungen, Schreibfehler und PIN-Abfragen.</p>
        </aside>
        <section class="fake-site">
          <div class="fake-header"><span>Simulierte Website</span><span>Übung</span></div>
          <div class="fake-body">
            <p>Willkommen auf einer Übungsseite. Klicken Sie auf den verdächtigen Link, um die Warnung zu sehen.</p>
            <button class="ghost-button" id="dangerLink">Konto sofort bestätigen</button>
            <div id="warn"></div>
          </div>
        </section>
      </div>
    </section>
  `);
  document.querySelector("#dangerLink").addEventListener("click", () => {
    document.querySelector("#warn").innerHTML = `<div class="alert">Achtung: Dieser Link sieht verdächtig aus. Prüfen Sie immer die Internetadresse und geben Sie niemals Ihre PIN auf unbekannten Seiten ein.</div>`;
  });
}

function forum() {
  layout("forum", `
    <section class="section soft">
      <div class="container">
        <h1>Forum für Fragen</h1>
        <p class="lead">Hier gibt es keine dummen Fragen. Andere Lernende und Helfer antworten freundlich.</p>
        <div class="grid three">
          ${["Online-Banking", "Smartphone", "Bahn und Reisen", "E-Mail", "Sicherheit", "Behördenportale"].map(topic => `<article class="card"><h2>${topic}</h2><p>Fragen stellen, Antworten lesen und Schritt für Schritt lernen.</p><button class="ghost-button">Thema öffnen</button></article>`).join("")}
        </div>
      </div>
    </section>
  `);
}

function chat() {
  layout("chat", `
    <section class="section">
      <div class="container grid two">
        <div>
          <h1>Chat und KI-Assistent</h1>
          <p class="lead">Der Assistent erklärt langsam, beruhigt bei Unsicherheit und empfiehlt passende Lektionen.</p>
          <button class="ghost-button" id="simpleExplain">Ich verstehe das nicht - bitte einfacher erklären</button>
        </div>
        <section class="panel">
          <div class="chat-window" id="chatWindow">
            <div class="message">Guten Tag. Wobei darf ich helfen?</div>
            <div class="message">Sie können mir schreiben: "Was ist eine TAN?" oder "Ist dieser Link sicher?"</div>
          </div>
          <form class="inline-actions" id="chatForm">
            <input id="chatInput" aria-label="Nachricht" placeholder="Ihre Frage eingeben" />
            <button class="button" type="submit">Senden</button>
          </form>
        </section>
      </div>
    </section>
  `);
  const addBot = text => {
    document.querySelector("#chatWindow").insertAdjacentHTML("beforeend", `<div class="message">${text}</div>`);
  };
  document.querySelector("#simpleExplain").addEventListener("click", () => addBot("Gern. Wir machen es langsam: Erst anschauen, dann prüfen, dann erst klicken. Sie müssen nichts sofort entscheiden."));
  document.querySelector("#chatForm").addEventListener("submit", event => {
    event.preventDefault();
    const input = document.querySelector("#chatInput");
    if (!input.value.trim()) return;
    document.querySelector("#chatWindow").insertAdjacentHTML("beforeend", `<div class="message user">${input.value}</div>`);
    addBot("Danke. Ich erkläre es Schritt für Schritt. Wenn es um Geld, PIN oder Passwort geht: Bitte erst prüfen und im Zweifel einen Helfer fragen.");
    input.value = "";
  });
}

function eventsPage() {
  layout("events", `
    <section class="section soft">
      <div class="container">
        <h1>Schulungen und Events</h1>
        <p class="lead">Kostenlose Termine mit viel Zeit zum Üben.</p>
        <div class="grid">${events.map(eventCard).join("")}</div>
      </div>
    </section>
  `);
}

function profile() {
  layout("profile", `
    <section class="section">
      <div class="container">
        <h1>Ihr Profil</h1>
        <div class="grid three">
          <article class="card"><h2>Lernfortschritt</h2><div class="progress"><span style="width:42%"></span></div><p>42 Prozent</p></article>
          <article class="card"><h2>Interessen</h2><p>Online-Banking, Bahnreisen, Betrug erkennen</p></article>
          <article class="card"><h2>Können-Level</h2><p>Anfänger mit ersten Erfolgen</p></article>
          <article class="card"><h2>Gespeicherte Lernziele</h2><p>Sicher überweisen, Bahnreise buchen, Videotelefonie lernen</p></article>
          <article class="card"><h2>Empfohlen</h2><p>Nächste Lektion: Betrug und falsche Nachrichten erkennen</p></article>
          <article class="card"><h2>Abgeschlossen</h2><p>2 Simulationen, 1 Event besucht</p></article>
        </div>
      </div>
    </section>
  `);
}

function lessonCard(lesson) {
  return `
    <article class="card">
      ${icon(lesson.icon)}
      <h3>${lesson.title}</h3>
      <div class="meta"><span class="pill">${lesson.level}</span><span class="pill">${lesson.duration}</span></div>
      <p>${lesson.text}</p>
      <div class="progress" aria-label="Fortschritt"><span style="width:${lesson.progress}%"></span></div>
      <div class="inline-actions">
        <a class="button" href="#/module/${lesson.id}">Lektion starten</a>
        <a class="ghost-button" href="#/module/${lesson.id}">Erst erklären lassen</a>
        <a class="button secondary" href="#/simulations">Üben ohne Risiko</a>
      </div>
    </article>
  `;
}

function eventCard(event) {
  return `<article class="card"><span class="pill">${event[0]}</span><h3>${event[1]}</h3><p>${event[2]}</p><button class="ghost-button">Platz vormerken</button></article>`;
}

function simCard(symbol, title, text, href) {
  return `<article class="card">${icon(symbol)}<h2>${title}</h2><p>${text}</p><a class="button secondary" href="${href}">Simulation starten</a></article>`;
}

function question(title, answers) {
  return `<fieldset class="question"><legend><strong>${title}</strong></legend><div class="options">${answers.map(answer => `<label class="choice"><input type="radio" name="${title}" value="${answer}" />${answer}</label>`).join("")}</div></fieldset>`;
}

function checkQuestion(title, answers) {
  return `<fieldset class="question"><legend><strong>${title}</strong></legend><div class="options">${answers.map(answer => `<label class="choice"><input type="checkbox" value="${answer}" />${answer}</label>`).join("")}</div></fieldset>`;
}

function field(label, id, value = "") {
  return `<div class="field"><label for="${id}">${label}</label><input id="${id}" value="${value}" /></div>`;
}

function selectField(label, id, options) {
  return `<div class="field"><label for="${id}">${label}</label><select id="${id}">${options.map(option => `<option>${option}</option>`).join("")}</select></div>`;
}

function router() {
  const parts = (location.hash.replace("#/", "") || "home").split("/");
  const page = parts[0];
  if (page === "onboarding") return onboarding();
  if (page === "dashboard") return dashboard();
  if (page === "learning") return learning();
  if (page === "module") return moduleDetail(parts[1]);
  if (page === "simulations") return simulations();
  if (page === "banking") return banking();
  if (page === "train") return train();
  if (page === "embedded") return embedded();
  if (page === "forum") return forum();
  if (page === "chat") return chat();
  if (page === "events") return eventsPage();
  if (page === "profile") return profile();
  return home();
}

window.addEventListener("hashchange", router);
router();
