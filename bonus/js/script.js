/* BONUS:
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

allMembersCard(teamMembers);


/************
* FUNCTIONS *
************/
const addBtn = document.getElementById('addMemberButton');
addBtn.addEventListener('click', addBtnClick);

// al click su add btn
function addBtnClick() {
    // prendere i dati dell'utente dal form
    const newMemberName = document.getElementById('name').value;
    const newMemberRole = document.getElementById('role').value;
    const newMemberImage = document.getElementById('image').value;

    // creare un oggetto che rappresenta un nuovo membro del team
    const newMember = {
        image: newMemberImage,
        name: newMemberName,
        role: newMemberRole
    };

    // pusharlo nell'array dei membri del team
    teamMembers.push(newMember);

    // chiamare la funzione che crea una nuova card e la aggiunge al dom
    singleMemberCard(newMember);

    // pulire il form
    document.getElementById('name').value = '';
    document.getElementById('role').value = '';
    document.getElementById('image').value = '';
}

// FUNZIONE CHE PER OGNI ELEMENTO DELL'ARRAY CHIAMA LA FUNZIONE CHE CREA LA CARD
// membersObjectArray -> array di oggetti, di cui ogni oggetto è un membro del team
function allMembersCard(membersObjectArray) {
    for(let i = 0; i < membersObjectArray.length; i++) {
        const thisMember = membersObjectArray[i];    
        
        // chiama la funzione che crea la card e la aggiunge al dom
        singleMemberCard(thisMember);
    }
}

// FUNZIONE CHE CREA LA CARD E LA AGGIUNGE AL DOM
function singleMemberCard(memberObject) {
    const teamContainer = document.querySelector('.team-container');
     
    // stampo una card
    const card = 
    `<div class="team-card">
        <div class="card-image">
        <img
            src="img/${memberObject.image}"
            alt="${memberObject.name}"
        />
        </div>
        <div class="card-text">
        <h3>${memberObject.name}</h3>
        <p>${memberObject.role}</p>
        </div>
    </div>`;

    // e la concateno a teamContainer
    teamContainer.innerHTML += card;
}
