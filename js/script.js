const $getPostsBtn = document.querySelector('.getPostsBtn');
const $cardsContainer = document.querySelector('.cardsContainer');


const getPostData = (cb) =>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    xhr.addEventListener('load',()=>{
        const responses = JSON.parse(xhr.response);
        cb(responses)
    })

    xhr.addEventListener('error', err=>{
        console.log('Что - то пошло не так');
        console.log(err);
    })

    xhr.send();
}

$getPostsBtn.addEventListener('click', e=>{
    e.preventDefault()

    getPostData(responses =>{
        const template = responses.map(item => postsTemplate(item)).join('');
        $cardsContainer.innerHTML = template;
    })
});

function postsTemplate({title, body}){
    return`
    <div class="col-lg-3 mt-3">
        <div class="card">
            <div class="card-header">
                <h5>${title}</h5>
            </div>
            <div class="card-body">
                <p>${body}</p>
            </div>
        </div>
    </div>
    `
}

// Получить комментарию

const getCommentData = (com) =>{
    const cmt = new XMLHttpRequest();

    cmt.open('GET', 'https://jsonplaceholder.typicode.com/comments')

    cmt.addEventListener('load',()=>{
        const response1 = JSON.parse(cmt.response);
        com(response1)
    })

    cmt.addEventListener('error', err=>{
        console.log('Что - то пошло не так');
        console.log(err);
    })

    cmt.send()
}

const $getCommentsBtn = document.querySelector('.getCommentsBtn');

$getCommentsBtn.addEventListener('click', e=>{
    e.preventDefault()

    getCommentData(response1 =>{
        const templates = response1.map((item) => commentTemplate(item)).join('');
        $cardsContainer.innerHTML = templates;
    })

});

function commentTemplate(item){
    return`
    <div class="col-lg-3 mt-3">
        <div class="card">
            <div class="card-header">
                <h3>${item.name}</h3>
            </div>
            <div class="card-body">
                <p>${item.body}</p>
            </div>
            <div class="card-footer">
                <h5><a href="#" style="text-decoration:none">${item.email}</a></h5>
            </div>
        </div>
    </div>
    `
}

// Получить Альбом

const getAlbumDate = abm =>{
    const alb = new XMLHttpRequest();

    alb.open('GET', 'https://jsonplaceholder.typicode.com/albums')

    alb.addEventListener('load', () =>{
        const response2 = JSON.parse(alb.response);
        abm(response2)
    })

    alb.addEventListener('error', err =>{
        console.log('Что - то пашло не так');
        console.log(err);
    })

    alb.send()
}


const $getAlbumBtn = document.querySelector('.getAlbumsBtn');

$getAlbumBtn.addEventListener('click', e=>{
    e.preventDefault()

    getAlbumDate(response2 =>{
        const templates1 = response2.map(item => albumTemplate(item)).join('');
        $cardsContainer.innerHTML = templates1;
    })
});

function albumTemplate({title}){
    return`
    <div class="col-lg-3 mt-3">
        <div class="card">
            <div class="card-body">
                <p>${title}</p>
            </div>
        </div>
    </div>
    `
}

// Получить Фотографии

const getPhotoData = ph =>{
    const pht = new XMLHttpRequest();

    pht.open('GET' , "https://jsonplaceholder.typicode.com/photos")

    pht.addEventListener('load', () =>{
        const response3 = JSON.parse(pht.response)
        ph(response3)
    })

    pht.addEventListener('error' , err=>{
        console.log('Что - то пашло не так');
        console.log(err);
    })

    pht.send()
}

const $getPhotosBtn = document.querySelector('.getPhotosBtn');

$getPhotosBtn.addEventListener('click', e=>{
    e.preventDefault()

    getPhotoData(responses3 =>{
        const templates2 = responses3.map(item => photoTemplate(item)).join('');
        $cardsContainer.innerHTML = templates2;
    })
});


function photoTemplate({title, url, thumbnailUrl}){
    return`
    <div class="col-lg-3 mt-3">
        <div class="card">
            <div class="card-header">
                <p>${title}</p>
            </div>
            <div class="card-body">
                <image style="width:100%" src="${url}">
            </div>
            <div class="card-body">               
                <image style="width:100%" src="${thumbnailUrl}">
             </div>
        </div>
    </div>
    `
}

// Получить Тодошки

const getTodosData = td =>{
    const tds = new XMLHttpRequest();

    tds.open('GET', 'https://jsonplaceholder.typicode.com/todos')

    tds.addEventListener('load', ()=>{
        const response4 = JSON.parse(tds.response);
        td(response4);
    })

    tds.addEventListener('error', err=>{
        console.log('Что - то пашло не так');
        console.log(err);
    })

    tds.send()
}

const $getTodosBtn = document.querySelector('.getTodosBtn')

$getTodosBtn.addEventListener('click', e=>{
    e.preventDefault()

    getTodosData(responses4 =>{
        const templates3 = responses4.map(item => todosTemplate(item)).join('');
        $cardsContainer.innerHTML = templates3;
    })
});

function todosTemplate({title, id, userId, completed}){
    return`
    <div class="col-lg-3 mt-3">
        <div class="card">
            <div class="card-header text-center">
                <p text-center>${id} end ${userId}</p>
            </div>
            <div class="card-body">
                <p>${title}</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-success m-1">${completed}</button>
            </div>
            
        </div>
    </div>
    `
}

// Получить Пользователей

const getUserData = us =>{
    const usr = new XMLHttpRequest();

    usr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    usr.addEventListener('load', () =>{
        const response5 = JSON.parse(usr.response);
        us(response5)
    })

    usr.addEventListener('error', err=>{
        console.log('Что - то пашло не так');
        console.log(err);
    })

    usr.send();
}

const $getUsersBtn = document.querySelector('.getUsersBtn');

$getUsersBtn.addEventListener('click', e =>{
    e.preventDefault();

    getUserData(response5 =>{
        const templates4 = response5.map(item => userTemplate(item)).join('');
        $cardsContainer.innerHTML = templates4;
    })
})

function userTemplate({userName, email, "address":{street, suite, city, zipcode,  "geo":{lat, lng}}, phone, website, "company":{name, catchPhrase, bs}}){
    return`
    <div class="col-lg-3 mt-3">
        <div class="card">
            <div class="card-header text-center">
                <p text-center>${name}${userName}</p>
                <p><a style="text-decoration: none" href="#">${email}</a></p>
            </div>
            <div class="card-body row text-center">
            <a style="text-decoration:none;" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Address</a>
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                    <ul style="list-style: none;">
                        <li><strong>Улица: </strong>  <p>${street}</p></li>
                        <li><strong>После:</strong>  <p>${suite}</p></li>
                        <li><strong>Город:</strong>  <p>${city}</p></li>
                        <li><strong>ЗипКод:</strong>  <p>${zipcode}</p></li>
                        <li><a style="text-decoration:none;" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">Geo</a>
                            <div class="collapse multi-collapse" id="multiCollapseExample2">
                                <ul style="list-style: none;">
                                    <li><strong>Локации:</strong> <p>${lat}</p></li>
                                    <li<strong>Локации:</strong> <p>${lng}</p></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <a style="text-decoration:none;" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">Company</a>
                <div class="collapse multi-collapse" id="multiCollapseExample3">
                    <ul style="list-style: none;">
                        <li><strong>Имя Компании:</strong> <p>${name}</p></li>
                        <li><strong>Фраза:</strong><p>${catchPhrase}</p></li>
                        <li><strong>Мысли:</strong> <p>${bs}</p></li>
                    </ul>
                </div>
            </div>
            <div class="card-footer text-center">
                <p>${phone}</p>
                <p><a style="text-decoration: none" href="#">${website}</a></p>
            </div>
            
        </div>
    </div>
    `
}