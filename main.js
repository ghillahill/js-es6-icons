const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

//Milestone 3

//Creo array con tre colori da assegnare alle icone a seconda del tipo
const colori = ['red', 'green', 'blue'];

//Creo array che conterrà i type delle varie icone
const icons_types = [];

//Scorro array icons per verificare il type e pusharlo dentro l'array icons_types in caso un type non è presente.
icons.forEach((icon) => {

    //destrutturo ogni oggetto di icons prendendo soltanto la chiave type.
    const {type} = icon;

    //Se l'array contiene già uno dei tre tipi non pushare, altrimenti pusha.
    if (!icons_types.includes(type)) {

        //Pusho nell'array icons_types i tre type.
        icons_types.push(type)
    }
});

//console.log(icons_types);

icons_types.forEach((element) => {
    $('.icons-filtro').append(`
        <option value="${element}">${element}</option>
        `);
});

$('.icons-filtro').change(() => {
    const type_selected = $('.icons-filtro').val();
});


//Scorro elementi dell'array icons
icons.forEach((element) => {

    //destrutturo element per utilizzare solamente le key che mi servono
    const {prefix, name, family, type} = element;

    //Recupero index type di ogni oggetto.
    const index_type = icons_types.indexOf(type);

    //Associo colore a seconda del type. E vado ad aggiungere nel template literal lo style color: ${icon_color}.
    const icon_color = colori[index_type];

    //Utilizzo un template literal per visualizzare in pagina le icone.
    $('#container-icons').append(`
        <div class="pref-icon">
            <i class="${family} ${prefix}${name} fa-2x" style="color: ${icon_color}"></i>
            <p>${name}</p>
        </div>
    `);

});
