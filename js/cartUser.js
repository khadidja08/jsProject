let linkLogoRegister = document.getElementById("linkLoginRegister");
let linkLogin = document.getElementById("linkLogin");
let linkRegister = document.getElementById("linkRegister")
let userInfo = document.getElementById("div-info");
let user = document.getElementById("user");

let logOut = document.getElementById("logout")

let hotels = [
    {
        id: 1,
        title: "CHAMBRES LUXURY",
        typeRooms: "CHAMBRES LUXURY - 26000",
        category: "bedroom",
        description: "With an area of 54m² overlooking the bay of Algiers",
        imageUrl: "images/4196.jpg",
        price:26000
    },
    {
        id: 2,
        title: "CHAMBRES EXECUTIVE FLOOR",
        typeRooms: "CHAMBRES EXECUTIVE FLOOR - 26000",
        category: "bedroom",
        description: "With an area of 58m² VIP floor",
        imageUrl: "images/20739.jpg",
        price:26000
    },
    {
        id: 3,
        title: "CHAMBRES STANDING",
        typeRooms: "CHAMBRES STANDING - 22000",
        category: "bedroom",
        description: "With an area of 48m² overlooking the garden",
        imageUrl: "images/6645.jpg",
        price:22000
    },
    {
        id: 4,
        title: "PRESIDENTIAL SUITE",
        typeRooms: "SUITE PRÉSIDENTIELLE - 285300",
        category: "sequel",
        description: "EL MAHROUSSA",
        imageUrl: "images/sequel/7865.jpg",
        price:26000
    },
    {
        id: 5,
        title: "JUNIOR SUITES",
        typeRooms: "SUITES JUNIORS - 39000",
        category: "sequel",
        description: "Suite with an area of ​​70m² overlooking the garden",
        imageUrl: "images/sequel/13433.jpg",
        price:26000
    },
    {
        id: 6,
        title: "SENIOR SUITES",
        typeRooms: "SUITES SENIOR - 65000",
        category: "sequel",
        description: "Suite with an area of ​​100m² overlooking the bay of Algiers",
        imageUrl: "images/sequel/31636.jpg",
        price:22000
    },
    {
        id: 7,
        title: "Bab El Mina",
        typeRooms: "SUITE EXÉCUTIVES - 153000",
        category: "executive suite",
        description: "Everywhere the eye falls, purity and harmony of the furniture are the key words.",
        imageUrl: "images/executivesuites/4079.jpg",
        price:26000
    },
    {
        id: 8,
        title: "Bab Ezzouar",
        typeRooms: "EXECUTIVE SUITE - 153000",
        category: "executive suite",
        description: "Everywhere the eye falls, purity and harmony of the furniture are the key words.",
        imageUrl: "images/executivesuites/10086.jpg",
        price:26000
    },
    {
        id: 9,
        title: "Bab Sidi Ramdhan",
        typeRooms: "EXECUTIVE SUITE - 153000",
        category: "executive suite",
        description: "Everywhere the eye falls, purity and harmony of the furniture are the key words.",
        imageUrl: "images/executivesuites/15616.jpg",
        price:26000
    },
    {
        id: 10,
        title: "Bab Dzira",
        typeRooms: "EXECUTIVE SUITE - 153000",
        category: "executive suite",
        description: "Everywhere the eye falls, purity and harmony of the furniture are the key words.",
        imageUrl: "images/executivesuites/6996.jpg",
        price:26000
    },
    {
        id: 11,
        title: "Bab El Djedid",
        typeRooms: "EXECUTIVE SUITE - 153000",
        category: "executive suite",
        description: "Partout où le regard se pose, pureté et harmonie du mobilier sont les maitres-mots.",
        imageUrl: "images/executivesuites/21761.jpg",
        price:26000
    },
    {
        id: 12,
        title: "Bab El Bahr",
        typeRooms: "EXECUTIVE SUITE - 153000",
        category: "executive suite",
        description: "Everywhere the eye falls, purity and harmony of the furniture are the key words.",
        imageUrl: "images/executivesuites/27389.jpg",
        price:26000
    },
    {
        id: 13,
        title: "Bab Azzoun",
        typeRooms: "EXECUTIVE SUITE - 153000",
        category: "executive suite",
        description: "Everywhere the eye falls, purity and harmony of the furniture are the key words.",
        imageUrl: "images/executivesuites/30930.jpg",
        price:26000
    },
    {
        id: 14,
        title: "Bab El Oued",
        typeRooms: "EXECUTIVE SUITE - 153000",
        category: "executive suite",
        description: "Everywhere the eye falls, purity and harmony of the furniture are the key words.",
        imageUrl: "images/executivesuites/6336.jpg",
        price:26000
    },
    {
        id: 15,
        title: "ALGERIAN RESTAURANT “EL DAQDAQ”",
        typeRooms: "",
        category: "restaurant lounge",
        description: "The syllables of this name take up the sounds of the copper knocker found on the doors of traditional houses in the casbah and in all the cities of Algeria and the Maghreb.",
        imageUrl: "images/restaurantslounges/23265.jpg",
        price:26000
    },
    {
        id: 16,
        title: "RESTAURANT LES TAGARINS",
        typeRooms: "",
        category: "restaurant lounge",
        description: "Tout le confort d'un haut lieu de gastronomie et une carte d'excellence ouverte sur le monde.",
        imageUrl: "images/restaurantslounges/19293.jpg",
        price:26000
    },
    {
        id: 17,
        title: "COFFEE SHOP RESTAURANT “DRIBA SHOP”",
        typeRooms: "",
        category: "restaurant lounge",
        description: "Hotel coffee shop with buffet, available at any time",
        imageUrl: "images/restaurantslounges/28279.png",
        price:26000
    },
    {
        id: 18,
        title: "“FIBONACCI” ITALIAN RESTAURANT.",
        typeRooms: "",
        category: "restaurant lounge",
        description: "With a team trained in Parma, discover, in the dining room or on the terrace, the Mediterranean subtleties and the inventive richness of Italian cuisine.",
        imageUrl: "images/restaurantslounges/28927.jpg",
        price:26000
    },
    {
        id: 19,
        title: "FOGGARA TEA",
        typeRooms: "",
        category: "restaurant lounge",
        description: "Along a pool evoking the irrigation channels of the Sahara, a tea room designed in the image of a small oasis at the entrance to the hotel.",
        imageUrl: "images/restaurantslounges/26143.jpg",
        price:26000
    },
    {
        id: 20,
        title: "QOM TARA",
        typeRooms: "",
        category: "restaurant lounge",
        description: "Winter Garden.",
        imageUrl: "images/restaurantslounges/25736.jpg",
        price:26000
    },
    {
        id: 21,
        title: "Seventy-Five",
        typeRooms: "",
        category: "restaurant lounge",
        description: "The comfort and cozy atmosphere of the seventy-five lounge.",
        imageUrl: "images/restaurantslounges/7707.jpg",
        price:26000
    },
    {
        id: 22,
        title: "Brasero",
        typeRooms: "",
        category: "restaurant lounge",
        description: "At the edge of the swimming pool, the meeting place for lovers of grilled meats on the embers, in the purest Algerian tradition.",
        imageUrl: "images/restaurantslounges/4557.jpg",
        price:26000
    },
    {
        id: 23,
        title: "EL MAWAKIF ROOM",
        typeRooms: "",
        category: "reception event",
        description: "“El Mawaqif” For your congresses, conferences and weddings.",
        imageUrl: "images/receptionevent/9730.jpg",
        price:26000
    },,
    {
        id: 24,
        title: "The EL AURASSI FIRST room",
        typeRooms: "",
        category: "reception event",
        description: "Provides a personalized welcome to VIP clients",
        imageUrl: "images/receptionevent/17020.jpg",
        price:26000
    },
    {
        id: 25,
        title: "The EL DJELSA SPACE",
        typeRooms: "",
        category: "reception event",
        description: "The name designates The Session, in Arabic, in connection with the activity of the committee rooms.",
        imageUrl: "images/receptionevent/2664.jpg",
        price:26000
    }
]


if(localStorage.getItem("email")){
    linkLogoRegister.remove();
    userInfo.style.display="block";
    user.innerHTML=localStorage.getItem("firstName") +" " + localStorage.getItem("lastName")
}

/// Processing Login Out
logOut.addEventListener("click", function(){
    localStorage.clear();
    setTimeout( ()=>{
        window.location="loginregister.html"
        },1500)
    localStorage.setItem("processing","login")

})

let reservationInCart = localStorage.getItem("reservationInCart")
let favUser = localStorage.getItem("fileFavorite")
let allRooms = document.querySelector(".items")
let allFavorite = document.querySelector(".items-Favorite")

let form = JSON.parse(reservationInCart);
drawBedroomUser(form)

if(favUser){
    let fav = JSON.parse(favUser);
    drawfavoriteUser(fav)
}


function drawBedroomUser(form){    
    let y = form.map((element) => {        
        let lien=hotels.find((item) => item.typeRooms===element.typeRooms)
        return (`
        <div class="item d-lg-flex" style="background-color: var(--background-color);">
                <div class="photos-item w-50 ps-lg-4">
                    <img class="w-100" src="${lien.imageUrl}" alt="Bedrooms">
                </div>
                <div class="infos-item w-50 d-flex flex-column justify-content-center align-items-center my-5">           
                    
                    <h3 class="antic-slab-regular fst-italic mb-4" style="color: var(--main-color);">${lien.title}</h3>
                    <p class="antic-slab-regular-fs">${lien.description}</p>
                    <p class="extendprice antic-slab-regular-fs">${element.price} DA </p>
                    <p class="extenddays antic-slab-regular-fs">${element.days} : Days </p>
                    <div class="action-item d-flex align-items-center justify-content-center mb-5">
                        <button type="submit" class="btn btn-outline-secondary btn-rounded antic-slab-regular-fs text-uppercase px-4 mt-2 me-2" onClick="extend(${[element.nbr]})" data-mdb-ripple-init  data-mdb-ripple-color="dark">Extend</button>
                        <button type="submit" class="btn btn-outline-secondary btn-rounded antic-slab-regular-fs text-uppercase px-3 mt-2 me-2" onClick="discount(${[element.nbr]})" data-mdb-ripple-init  data-mdb-ripple-color="dark">Discount</button>
                        <button type="submit" class="btn btn-outline-secondary btn-rounded antic-slab-regular-fs text-uppercase px-3 mt-2 me-2" onClick="concellation(${[element.nbr]})" data-mdb-ripple-init  data-mdb-ripple-color="dark">cancellation</button>
                    </div>                    
                </div>
            </div>
            `)        
        }).join("");
    allRooms.innerHTML = y    
}

function drawfavoriteUser(fav){
    let y = fav.map((element) => {          
        let lien=hotels.find((item) => item.typeRooms===element.typeRooms)
        return (`
        <div class="item d-lg-flex" style="background-color: var(--background-color);">
                <div class="photos-item w-50 ps-lg-4">
                    <img class="w-100" src="${lien.imageUrl}" alt="Bedrooms">
                </div>
                <div class="infos-item w-50 d-flex flex-column justify-content-center align-items-center my-5">           
                    
                    <h3 class="antic-slab-regular fst-italic mb-4" style="color: var(--main-color);">${lien.title}</h3>
                    <p class="antic-slab-regular-fs">${lien.description}</p>
                    
                                        
                </div>
            </div>
            `)}).join("");
            allFavorite.innerHTML = y    
}

function extend(nbr) {     
    let lien=form.find((item) => item.nbr===nbr)
    let room=hotels.find((item) => item.typeRooms===lien.typeRooms)

    lien.days++
    // form.days=lien.days
    lien.price += +(room.price)
    let totalDays = localStorage.getItem("totalDays") 
    totalDays++
    localStorage.setItem("totalDays" ,totalDays )
    let totalPrice = localStorage.getItem("totalPrice") 
    totalPrice=parseInt(totalPrice) + parseInt(room.price)
    localStorage.setItem("totalPrice" ,totalPrice ) 
    
    let extenddays=document.querySelector(".extenddays")
    extenddays.innerHTML = lien.days + " : Days"
    let extendprice=document.querySelector(".extendprice")
    extendprice.innerHTML = lien.price + " : DA"
    
    localStorage.setItem("reservationInCart" , JSON.stringify(form) ) 
}

function discount(nbr) {     
    let lien=form.find((item) => item.nbr===nbr)
    let room=hotels.find((item) => item.typeRooms===lien.typeRooms)

    lien.days--
    // form.days=lien.days
    lien.price = lien.price-room.price

    let totalDays = localStorage.getItem("totalDays") 
    totalDays--
    localStorage.setItem("totalDays" ,totalDays ) 

    let totalPrice = localStorage.getItem("totalPrice") 
    totalPrice= totalPrice- room.price
    localStorage.setItem("totalPrice" ,totalPrice )
    
    let extenddays=document.querySelector(".extenddays")
    extenddays.innerHTML = lien.days + " : Days"
    let extendprice=document.querySelector(".extendprice")
    extendprice.innerHTML = lien.price + " : DA"
    
    localStorage.setItem("reservationInCart" , JSON.stringify(form) ) 
}

function concellation(nbr) {   
    if(confirm("Do You Want Concellation Your Reservation?")){
        
    
     
    let room=form.find((item) => item.nbr===nbr)

    let totalDays = localStorage.getItem("totalDays")
    totalDays=totalDays-room.days
    localStorage.setItem("totalDays" ,totalDays ) 

    let totalPrice = localStorage.getItem("totalPrice") 
    totalPrice= totalPrice- room.price
    localStorage.setItem("totalPrice" ,totalPrice )

    let lien=form.findIndex((item) => item.nbr===nbr)
    form.splice(lien,1)

    
    
    let days=document.querySelector(".extenddays")
    days.style.display="none"
    let price=document.querySelector(".extendprice")
    price.style.display="none"

    
    localStorage.setItem("reservationInCart" , JSON.stringify(form) ) 

             


    }
           
}



