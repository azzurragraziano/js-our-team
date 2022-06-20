/* Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
*/

// array di oggetti contentente le informazioni dei membri del team
const teamMembers = [
    // Wayne Barnett
    {
        image: 'wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        role: 'Founder & CEO'
    },

    // Angela Caroll
    {
        image: 'angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        role: 'Chief Editor'
    },

    // Walter Gordon
    {
        image: 'walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        role: 'Office Manager'
    },

    // Angela Lopez
    {
        image: 'angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        role: 'Social Media Manager'
    },

    // Scott Estrada
    {
        image: 'scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        role: 'Developer'
    },

    // Barbara Ramos
    {
        image: 'barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        role: 'Graphic Designer'
    }
];

const teamContainer = document.querySelector('.team-container');

// per ogni membro presente nell'array
for(let i = 0; i < teamMembers.length; i++) {
    const thisMember = teamMembers[i];

    // stampo una card
    const card = `
    <div class="team-card">
        <div class="card-image">
            <img
            src="img/${thisMember.image}"
            alt="${thisMember.name}"
            />
        </div>
        <div class="card-text">
            <h3>${thisMember.name}</h3>
            <p>${thisMember.role}</p>
        </div>
        </div>
    `;

    // e la concateno a teamContainer
    teamContainer.innerHTML += card;
}
