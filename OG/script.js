const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const cartItem = document.querySelector('.cart-items-container');
const cartBtn = document.querySelector('#cart-btn')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')
const itemsArr = document.getElementsByClassName('cart-item');
let count = 0;
const menubox = document.getElementById('menubox').querySelectorAll('.box');
let cartArr=[]
menubox.forEach((box) => {

    const boxA = box.querySelector('a');

    boxA.addEventListener('click', () => {

        var cartArr = JSON.parse(localStorage.getItem('cartArr'));
        let obj = {
            name: box.querySelector('h3').innerText,
            img: box.querySelector('img').src
        }
        if (cartArr == null) {
            cartArr = []

            cartArr.push(obj);
            localStorage.setItem('cartArr', JSON.stringify(cartArr));
        }
        else {
            cartArr.push(obj);
            localStorage.setItem('cartArr', JSON.stringify(cartArr));
        }


    })
})


searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    document.addEventListener('click', (e) => {
        if (!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)) {
            searchForm.classList.remove('active');
        }
    })
})

cartBtn.addEventListener('click', () => {
    cartItem.classList.toggle('active');
    loadCart();
    document.addEventListener('click', (e) => {
        if (!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem)) {
            cartItem.classList.remove('active');
        }
    })
})

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    document.addEventListener('click', (e) => {
        if (!e.composedPath().includes(navbar) && !e.composedPath().includes(menuBtn)) {
            navbar.classList.remove('active');
        }
    })
})


// 

var navbarA = navbar.querySelectorAll('a');
navbarA.forEach((a) => {
    a.addEventListener('click', () => {
        // navbarA.forEach((b) => {
        //     b.classList.remove('active');
        // })
        a.classList.add('active')
    })

}
)

function loadCart() {
    var cartArr = JSON.parse(localStorage.getItem('cartArr'));
    var temp = "";
    if (cartArr == null) {
        cartArr = []
    }
    cartArr.forEach((item) => {
        temp += `
        <div class="cart-item">
                <i class="fas fa-times" id="${count}" onclick="delNote(this.id)"></i>
                <img src="${item.img}" alt="menu">
                <div class="content">
                    <h3>${item.name}</h3>
                    <div class="price">$15.99 </div>
                </div>
            </div>
        `

    })
    count+=1;
    cartItem.innerHTML = temp;
}

const deleteItem = (idx) => {
    var cartArr = JSON.parse(localStorage.getItem('cartArr'));
    cartArr.splice(idx, 1);
    localStorage.setItem('cartArr', JSON.stringify(cartArr));
    loadCart()
}
loadCart()

// Array.from(itemsArr).forEach((item) => {

//     item.querySelector('i').addEventListener('click', () => {
//         var idx = Array.from(itemsArr).indexOf(item);
//         console.log(idx)
//         deleteItem(idx);
//     })

// })

function delNote(index){
    console.log(index)
    noteshtml.splice(index,1)
    localStorage.setItem('notes', JSON.stringify(noteshtml))
    displaychanges()
    count--
    
}

