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

let nomdujournal  = `<div class="navabar" id="navbar" >
         <h1>${nomprincipal}</h1>
    </div>`
    
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
 
      let mainArticle = 
                `<video id="hero-image" width="2100" height="850"
                class="hero-info" autoplay muted loop>
  <source src="assets/video/Introducing the Ferrari F80.mp4" type="video/mp4">
                              </video>
              <div class="hero-info">
                <h3 id="hero-titre">${titre}</h3>
                  <p id="hero-description">${body}</p>
                  <p id="hero-auteur">Par ${auteur} - ${date}</p>
                  <button class="read-article-btn">Lire l'article</button>
                </div>`;


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
 
      let cardArticle = `<div class="article-card">
          <img src="${cardImage}" alt="Image principale de l'article">

              <div class="article-content">
        <p class="theme-badge"> ${cardTheme}</p>
                <h3>${cardTitre}</h3>

                  <p>${cardDesc}</p>

                  <p class="article-author">Par ${cardAuteur} - ${cardDate}<p>

                  <button class="read-article-btn">Lire l'article</button>
                </div>
                </div>`

                console.log(cardArticle);

                lesDifferentsArticles.innerHTML += cardArticle;             
}


        journal.stories.forEach(stories => {
          createArticleCard(stories);
                });

      

/////////////////////////////
      // TODO 5: REMPLIR LES THEMES

function definirUnTheme(topic) {


    let nomtheme = topic.nom;
    let desctheme = topic.description;
    let emoji = topic.icon;

    let differentAuth = document.getElementById("themes-list");

    let nextTopic = `<div class="theme-item">
        <h3>${emoji}</h3>
        <h3>${nomtheme}</h3>
        <h4>${desctheme}</h4>
    </div>`;

    console.log(nextTopic);

    differentAuth.innerHTML += nextTopic;
}

journal.topics.forEach(topic => {
    definirUnTheme(topic);
});

///////////////////////////// 


  function createAuthorsCard(contributors) {


        let authorImage = contributors.image;
        let authorName = contributors.prenom;
        let authorExpertise = contributors.typeExperience;
        let authorBio = contributors.presentation;
 
 
        let authorContainer = document.getElementById("authors-list");
 
 
        let authorCard = `
                      <div class="author-card">
                        <img class="author-image" src="${authorImage}" alt="${authorName}">
                        <h3>${authorName}</h3>
                        <p class="author-role">${authorExpertise}</p>
                        <p class="author-bio">${authorBio}</p>
                        <div class="author-socials">
                          <a href="#">📷 Instagram</a>
                          <a href="#">🐦 Twitter</a>
                          <a href="#">💼 LinkedIn</a>
                        </div>
                      </div>
                    `;

        authorContainer.innerHTML += authorCard;
      }
 
      data.contributors.forEach(author => {
        createAuthorsCard(author);
      });


//////////////////////////////////////////////


      let ctaText = journal.cta.text;
      let ctaLabel = journal.cta.label;
 
      let ctaContainer = document.getElementById("call-to-action");
 
      // let ctaHTML = `
      // //                 <p>${ctaText}</p>
      // //                 <button id="cta-button"class="cta-button"><a href="https://carconfigurator.ferrari.com/fr_FR"></a>${ctaLabel}</button>
      // //               `;

                    let ctaHTML = `<p>${ctaText}</p>
                    <button id="cta-button" class="cta-button" onclick="window.location.href='https://carconfigurator.ferrari.com/fr_FR'">
            ${ctaLabel}
        </button>`
 
      ctaContainer.innerHTML = ctaHTML;



      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 
