var section = document.createElement('section');
  section.setAttribute("id", "middle-earth");
  body.appendChild(section);

  var article = document.createElement("article");
  section.appendChild(article);

  var h11 = document.createElement('h1');
  h11.textContent = "The Shire";
  article.appendChild(h11);

  var article = document.createElement("article");
  section.appendChild(article);

  var h12 = document.createElement("h1");
  h12.textContent = "Rivendell";
  article.appendChild(h12);

  var article = document.createElement("article");
  section.appendChild(article);

  var h13 = document.createElement('h1');
  h13.textContent = "Mordor";
  article.appendChild(h13);
