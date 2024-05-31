(function () {
    // ACTIVATION DU DATEPICKER 
    $('.datepicker').datepicker({
        clearBtn: true,
        format: "yyyy/mm/dd",
        language: "en-EN"
    });

});


let linkLogoRegister = document.getElementById("linkLoginRegister");
let linkLogin = document.getElementById("linkLogin");
let linkRegister = document.getElementById("linkRegister")
let userInfo = document.getElementById("div-info");
let user = document.getElementById("user");

let logOut = document.getElementById("logout")

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
        price:285300
    },
    {
        id: 5,
        title: "JUNIOR SUITES",
        typeRooms: "SUITES JUNIORS - 39000",
        category: "sequel",
        description: "Suite with an area of ​​70m² overlooking the garden",
        imageUrl: "images/sequel/13433.jpg",
        price:39000
    },
    {
        id: 6,
        title: "SENIOR SUITES",
        typeRooms: "SUITES SENIOR - 65000",
        category: "sequel",
        description: "Suite with an area of ​​100m² overlooking the bay of Algiers",
        imageUrl: "images/sequel/31636.jpg",
        price:65000
    },
    {
        id: 7,
        title: "Bab El Mina",
        typeRooms: "EXECUTIVE SUITE - 153000",
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

let dateArrival = document.getElementById("dateArrival");
let dateDeparture = document.getElementById("dateDeparture")
let typeNumberAdultsForm = document.getElementById("typeNumberAdultsForm")
let typeNumberChildrenForm = document.getElementById("typeNumberChildrenForm")
let typeRooms = document.getElementById("typeRooms")
let numberRooms = document.getElementById("numberRooms")
let payment = document.getElementById("payment")
let civility = document.getElementById("civility")
let firstNameForm = document.getElementById("firstNameForm")
let lastNameForm = document.getElementById("lastNameForm")
let emailForm = document.getElementById("emailForm")
let phone = document.getElementById("phone")
let inputAddress = document.getElementById("inputAddress")
let messageForm = document.getElementById("messageForm")
let gridCheck = document.getElementById("gridCheck")

let reserBtn = document.getElementById("reser-btnForm")

dateArrival.value = localStorage.getItem("reservationDateArrival")
dateDeparture.value = localStorage.getItem("reservationDateDeparture")
typeNumberAdultsForm.value = localStorage.getItem("numberAdults")
typeNumberChildrenForm.value = localStorage.getItem("numberChildren")
typeRooms.value = localStorage.getItem("typeRooms")


let cartUser = document.getElementById("cartUser-content");

let badge = document.querySelector(".badge");

var totalDays = 0

var totalPrice = 0

let addedForm = localStorage.getItem("reservationInCart") ? JSON.parse(localStorage.getItem("reservationInCart")): [];

let addedReservation = localStorage.getItem("fileReservation") ? JSON.parse(localStorage.getItem("fileReservation")): [];

//test if there is already a reservation

if (addedForm){
    addedForm.forEach(element => {
    totalDays += element.days
    totalPrice += element.price
    cartUser.innerHTML += `<p id="incReser">${element.typeRooms} : ${element.days} Days</p>
    `})
    if(localStorage.getItem("totalDays")>0){
        badge.style.display="block";
        badge.innerHTML=localStorage.getItem("totalDays");
        cartUser.innerHTML +=`<hr>
        <p>${totalPrice }</p>`
    }     
    }
    else{
        totalDays = 0 
        totalPrice = 0
    }

localStorage.setItem("totalDays",totalDays  )
localStorage.setItem("totalPrice",totalPrice  )
    
    

reserBtn.addEventListener("click", function(event){
    event.preventDefault();    
    if (firstNameForm.value === "" || lastNameForm.value==="" || phone.value==="" ){
        alert("Please Fill Data.");
        }
        else{
            if( gridCheck.checked !== true ){
                alert("Please Check the Grid");
            }else{                
            localStorage.setItem("reservationDateArrival", dateArrival.value);
            localStorage.setItem("reservationDateDeparture", dateDeparture.value);
            localStorage.setItem("numberAdults", typeNumberAdultsForm.value);
            localStorage.setItem("numberChildren", typeNumberChildrenForm.value);
            localStorage.setItem("typeRooms", typeRooms.value);
            localStorage.setItem("numberRooms", numberRooms.value);
            localStorage.setItem("payment", payment.value);
            localStorage.setItem("civility", civility.value);
            localStorage.setItem("firstNameForm", firstNameForm.value);
            localStorage.setItem("lastNameForm", lastNameForm.value);
            localStorage.setItem("emailForm", emailForm.value);
            localStorage.setItem("phone", phone.value);
            localStorage.setItem("inputAddress", inputAddress.value);
            localStorage.setItem("messageForm", messageForm.value);
            
            let reseritem=hotels.find((item) => item.typeRooms===localStorage.getItem("typeRooms"))
            // Calculate Number of Days
            let date1=localStorage.getItem("reservationDateArrival");
            let date2=localStorage.getItem("reservationDateDeparture");
            const dateOne = new Date(date1);
            const dateTwo = new Date(date2);
            const time = Math.abs(dateTwo-dateOne);
            const days = Math.ceil(time / (1000 * 60 * 60 * 24));
            localStorage.setItem("days",days)
            
            let price= reseritem.price*days;
            // localStorage.setItem("price",price)
            var num = Math.floor(Math.random()*100000)
            localStorage.setItem("nbr", num);

            addedForm = [...addedForm,{"nbr":num,
            "reservationDateArrival": dateArrival.value,
            "reservationDateDeparture": dateDeparture.value,
            "numberAdults": typeNumberAdultsForm.value,
            "numberChildren": typeNumberChildrenForm.value,
            "typeRooms": typeRooms.value,
            "numberRooms": numberRooms.value,
            "payment": payment.value,
            "civility": civility.value,
            "firstNameForm": firstNameForm.value,
            "lastNameForm": lastNameForm.value,
            "emailForm": emailForm.value,
            "phone": phone.value,
            "inputAddress": inputAddress.value,
            "messageForm": messageForm.value,
            "days": days,
            "price":price,
            }];
            
            localStorage.setItem("reservationInCart" , JSON.stringify(addedForm) )           

            addedReservation = [...addedReservation,reseritem]
            localStorage.setItem("fileReservation",JSON.stringify(addedReservation))
            
            totalDays+=days
            totalPrice+= price
        
            localStorage.setItem("totalDays",totalDays) 
            badge.style.display="block";
            badge.innerHTML=localStorage.getItem("totalDays"); 
            localStorage.setItem("totalPrice",totalPrice)        

            setTimeout( ()=>{
                window.location="cartUser.html"
                },1500)

            }            
            
        }
}

)

let cart = document.getElementById("cartUser");
let reservationCart = document.getElementById("reserCart")

reservationCart.addEventListener("click",function(){
    if(cartUser.innerHTML !=""){
        if(cart.style.display=="block"){
            cart.style.display="none"
        }else{cart.style.display="block"}
    }
})

