function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {       
      /// EXAM: COMPLÉTEZ LE CODE ICI ! 
      const journal = data;
      console.log(journal);

      // TODO 1: REMPLIR LE HEADER

///////////////////////////////////////////////////////

      let nomjournal = document.getElementById("nom-journal") 
       let nomprincipal = journal.magTitle;

        console.log(nomprincipal);

let nomdujournal  = `<div class="nav" id="nav" >
         <h1>${nomprincipal}</h1>
    </div> `
    
    console.log(nomdujournal);

    nomjournal.insertAdjacentHTML("beforeend", 
    nomdujournal)


      let nomdescription = document.getElementById("phrase-accroche") 
       let descriptionnom = journal.slogan;

        console.log(descriptionnom);

let slogan  = `<p>${descriptionnom}</p>`
    
    console.log(slogan);

    nomdescription.insertAdjacentHTML("beforeend", 
    slogan)

//////////////////////////////////////////////////////

      // TODO 2: REMPLIR LA NAVIGATION

   let navbar = document.getElementById("themes-nav");
      let topics = journal.topics;
 
      function CreeDesBoutons(topic) {
        let navTitle = topic.nom;
        let navIcon = topic.icon;
        let navButton = `<button class="nav-theme-btn">
              <span class="nav-icon">${navIcon}</span>${navTitle}
            </button>`;

        navbar.innerHTML += navButton;
      }

      topics.forEach(topic => {
        CreeDesBoutons(topic);
      });


///////////////////////////////////////

      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL


     let image = journal.cover.imageHero;
      let titre = journal.cover.titre;
      let body = journal.cover.description;
      let auteur = journal.cover.auteur;
      let date = journal.cover.date;
 
      let articlePrincipal = document.getElementById("article-principal");
 
      let mainArticle = `
          <img id="hero-image" src="${image}" alt="Image principale de l'article">
              <div class="hero-info">
                <h3 id="hero-titre">${titre}</h3>
                  <p id="hero-description">${body}</p>
                  <p id="hero-auteur">Par ${auteur} - ${date}</p>
                  <button class="read-article-btn">Lire l'article</button>
                </div>
`;
      articlePrincipal.innerHTML = mainArticle;
  

      /////////////////
      // ////////////////// 

function createArticleCard(stories) {
    let cardTheme = stories.theme;
      let cardImage = stories.image;
       let cardTitre = stories.titre;
        let cardDesc = stories.description;
         let cardAuteur = stories.auteur;
          let cardDate = stories.date;
        
   


      
      let lesDifferentsArticles = document.getElementById("articles-grid");
 
      let cardArticle = `<div class"article-card">
          <img src="${cardImage}" alt="Image principale de l'article">

              <div class="article-content">
        <p class="theme-badge"> ${cardTheme}</p>
                <h3>${cardTitre}</h3>

                  <p>${cardDesc}</p>

                  <p class="article-author">Par ${cardAuteur} - ${cardDate}</p>

                  <button class="read-article-btn">Lire l'article</button>
                </div>
                </div>`

                console.log(cardArticle);

                lesDifferentsArticles.innerHTML += cardArticle;
                
}

        journal.stories.forEach(stories => {
          createArticleCard(stories);
                });

                




  








   


  






      // TODO 4: REMPLIR LA GRILLE D'ARTICLES

      // TODO 5: REMPLIR LES THEMES

      // TODO 6: REMPLIR LES AUTEURS

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION


      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 
