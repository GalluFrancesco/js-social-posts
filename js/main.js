//creo una funzione per che cicla l'array con i post
//che inseriamo come argomento, cra l'html e lo mette
//nel container, anche questo inserito come argomento

function output(container, listPost){
    for(let i=0; i < listPost.length; i++){
        container.innerHTML+= ` <div class="post">
                                    <div class="post__header">
                                        <div class="post-meta">                    
                                            <div class="post-meta__icon">
                                                <img class="profile-pic" src="${listPost[i].picAutore}" alt="${listPost[i].autore}">                    
                                            </div>
                                            <div class="post-meta__data">
                                                <div class="post-meta__author">${listPost[i].autore}</div>
                                                <div class="post-meta__time">${listPost[i].dataPost}</div>
                                            </div>                    
                                        </div>
                                    </div>
                                    <div class="post__text">${listPost[i].txtPost}</div>
                                    <div class="post__image">
                                        <img src="${listPost[i].imgPost}" alt="">
                                    </div>
                                    <div class="post__footer">
                                        <div class="likes js-likes">
                                            <div class="likes__cta">
                                                <a class="like-button  js-like-button" href="#" data-postid="${listPost[i].id}">
                                                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                    <span class="like-button__label">Mi Piace</span>
                                                </a>
                                            </div>
                                            <div class="likes__counter">
                                                Piace a <b id="like-counter-${listPost[i].id}" class="js-likes-counter">${listPost[i].counterLike}</b> persone
                                            </div>
                                        </div> 
                                    </div>            
                                </div>`
        

    }
}

//creo un array di post
const posts = [

    {
        id: 1,
        autore: "Tizio",
        picAutore: "https://unsplash.it/300/300?image=100",
        dataPost: "12-22-2020",
        txtPost: "Testo scritto da Tizio.",
        imgPost:"https://unsplash.it/300/300?image=70",
        counterLike: 70
    },
    {
        id: 2,
        autore: "Caio",
        picAutore: "https://unsplash.it/300/300?image=200",
        dataPost: "12-22-2020",
        txtPost: "Testo scritto da Caio.",
        imgPost:"https://unsplash.it/300/300?image=80",
        counterLike: 80
    },
    {
        id: 3,
        autore: "Sempronio",
        picAutore: "https://unsplash.it/300/300?image=300",
        dataPost: "12-22-2020",
        txtPost: "Testo scritto da Sempronio.",
        imgPost:"https://unsplash.it/300/300?image=90",
        counterLike: 90
    }
]

let container=document.querySelector('.posts-list');
output(container, posts);

//prendo tutti i like button dall'html creato
const btn=document.querySelectorAll('.like-button');

let counter=0;

//ciclo l'array di bottoni e ci aggiungo l'evento click
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        counter++;
        //sfrutto il fatto che l'array di bottoni like e quello dei post siano corrispondenti
        //cos?? da prendere il il post con l'id corretto e modificarne il contenuto
        const htmlLike=document.getElementById(`like-counter-${posts[i].id}`);
        
        if(counter % 2===0){
            posts[i].counterLike--;
        }else{
            posts[i].counterLike++; 
            }

        htmlLike.innerHTML=`${posts[i].counterLike}`;
        btn[i].classList.toggle('like-button--liked');
    })
}