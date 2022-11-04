<script>
export default {
  data() {
    return {
      message: 'Hey Emona'
    }
  }
}
</script>

<template>
   <!-- <h1>{{ message }}</h1> -->
    <header> 
      <button onclick="window.location.href='';">
          <h1>CMD MIDTERM</h1>
        </button>
      <nav class="navigation">
        <button onclick="window.location.href='https://emonasantiago.github.io/tech-stack/';">
          <a>Beoogde leerresultaten</a>
        </button>
          <a href="" class="">Onderwijsleeromgeving</a>
          <a href="" class="">Toetsing</a>
          <a href="" class="">Gerealiseerde leerresultaten</a>
        </nav>
      </header>

  

      <section id="hero-section">
        <h2>Communication and Multimedia Design Midterm</h2>
        <img>
      </section>
  
      <main>
        <section id="introduction">
          <div class="content">
            <h3>Midterm</h3>
            <p>De midterm review 2022 willen we graag inzetten om feedback te krijgen op ons onderwijs en met het panel te kijken naar de toekomst van het vakgebied en ontwerp-onderwijs. Deze website beschrijft het onderwijs bij CMD Amsterdam, onze kritische reflectie hierop en ambities voor de toekomst.

            CMD Amsterdam is een leergemeenschap waarbij studenten, docenten en medewerkers met en van elkaar leren. Deze site is daar ook een voorbeeld van: de inhoud is verzorgd door docenten en medewerkers (Diantha Kinkhouwers, Laura van der Vlies, David de Vries, Jos Kok, Arif Khan, Michel Alders, Tatjana Finke en Zuzana van Polen) en het ontwerp is gemaakt door studenten van CMD Agency (Alana Eastman, Ryan Zoeters, Nina Rijntjes en Pip Harsveld), de minor Web development (Fabienne van den Steen, Kai van Wezel en Nathan Bommezijn) van CMD Amsterdam en Justin Lung (AD Frontend Design en Development, HvA) onder begeleiding van Joost Faber (docent), alles overzien door onze hoofddocent Irene Kamp.

            We kijken uit naar de gesprekken op 4 oktober,

            Andre Neumann - opleidingsmanager</p>
          </div>
        </section>

        <section id="chapters">
          <div class="1.0">
            <h3>1.0 Beoogde leerresultaten</h3>
            <ul>
              <li>1.1 Humanity-centered digital designers</li>
              <li>1.2 Competenties</li>
              <li>1.3 Werkveld en maatschappij</li>
              <li>1.4 Ontwikkelingen</li>
              <li>1.5 Ambities en dilemma’s</li>
            </ul>
          </div>

          <div class="2.0">
            <h3>2.0 Onderwijsleeromgeving</h3>
            <ul>
              <li>2.1 Onderwijsvisie en didactiek</li>
              <li>2.2 Curriculumopbouw</li>
              <li>2.3 Borging onderwijskwaliteit</li>
              <li>2.4 Onderwijs en praktijk</li>
              <li>2.5 Onderwijs en onderzoek</li>
              <li>2.6 Internationalisering</li>
              <li>2.7 Studenten begeleiding</li>
              <li>2.8 Digitale en analoge voorzieningen</li>
              <li>2.9 Ambities en dilemma's</li>
            </ul>
          </div>

          <div class="3.0">
            <h3>3.0 Toetsing</h3>
            <ul>
              <li>3.1 Toetsbeleid en -plan</li>
              <li>3.2 Toetsprogramma en -praktijk</li>
              <li>3.3 Toetsing en feedback</li>
              <li>3.4 Borging en kwaliteit</li>
              <li>3.5 Ambities en dilemma's</li>
            </ul>
          </div>

          <div class="4.0">
            <h3>4.0 Gerealiseerde leerresultaten</h3>
            <ul>
              <li>4.1 Afstudeerproces</li>
              <li>4.2 Borging afstudeerniveau vanuit examencommissie</li>
              <li>4.3 Ambities en dilemma's</li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <section id="Footer">© 2022 CMD AMSTERDAM</section>

      </footer>
 

  

</template>
<style>

button {
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  }

  button:hover {
   border: 3px solid #fff021;
  }


  body{
    color: black;
  }

  header {
    border: 10px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .navigation h1 {
    float: left;
  }
 
  .navigation a {
    font-size: 18px;
    margin: 1em;
    /* float: right; */
  }

  .navigation {
    background-color: white;
    color: rgb(0, 0, 0);
  }

  main {
    /* background-color: #FFF021; */
    height: auto;
  }
  
  #hero-section {
    background-size: cover;
    background-position: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(./assets/images/hero-image.jpeg);
    height: 25rem;
    text-align: center;
    font-size: 2em;
    background-color: white;
  }

  #introduction {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    gap: 1rem;
    display: grid;
    grid-template-columns: 40em 30em ;
    grid-template-rows: auto;
    grid-template-areas: "main";
    background-color:  #FFF021;
    border: 10px solid black;
  }

  #introduction h3 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  
  #introduction p {
    margin-bottom: 1rem;
  }

  #chapters {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    gap: 3em;
    padding: 4rem 9rem;
  }

  #chapters div {
    display: flex;
    flex-direction: column;
    border-bottom: 10px solid #FFF021;
  }

  #Footer {
    background-color: black;
    color: white;
    text-align: center;
    padding: 3rem 0;
    position: relative;
  }

</style>

