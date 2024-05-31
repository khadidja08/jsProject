$(function () {
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

linkLogin.addEventListener("click", function(){
   
    localStorage.setItem("processing","login")

})

linkRegister.addEventListener("click", function(){
    
    localStorage.setItem("processing","register")

})

logOut.addEventListener("click", function(){
    localStorage.clear();
    setTimeout( ()=>{
        window.location="loginregister.html"
        },1500)
    localStorage.setItem("processing","login")

})


if(localStorage.getItem("email")){
    linkLogoRegister.remove();
    userInfo.style.display="block";
    user.innerHTML=localStorage.getItem("firstName") +" " + localStorage.getItem("lastName")
    
}

let allBedrooms = document.querySelector(".items")
let bedrooms = [
    {
        id:1,
        title:"CHAMBRES LUXURY",
        typeRooms:"CHAMBRES LUXURY - 26000",
        description:"With an area of 54m² overlooking the bay of Algiers",
        imageUrl:"images/4196.jpg",
        price:26000
    },
    {
        id:2,
        title:"CHAMBRES EXECUTIVE FLOOR",
        typeRooms:"CHAMBRES EXECUTIVE FLOOR - 26000",
        description:"With an area of 58m² VIP floor",
        imageUrl:"images/20739.jpg",
        price:26000
    },
    {
        id:3,
        title:"CHAMBRES STANDING",
        typeRooms:"CHAMBRES STANDING - 22000",
        description:"With an area of 48m² overlooking the garden",
        imageUrl:"images/6645.jpg",
        price:22000
    }
]

let cartUser = document.getElementById("cartUser-content");
let badge = document.querySelector(".badge");

var totalDays = 0

var totalPrice = 0

var totalFavorite = 0

let addedForm = localStorage.getItem("reservationInCart") ? JSON.parse(localStorage.getItem("reservationInCart")): [];

let addedReservation = localStorage.getItem("fileReservation") ? JSON.parse(localStorage.getItem("fileReservation")): [];

let addedFavorite = localStorage.getItem("fileFavorite") ? JSON.parse(localStorage.getItem("fileFavorite")): [];

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
        <p>${totalPrice } DZD</p>`
    }     
    }
    else{
        totalDays = 0 
        totalPrice = 0
    }

localStorage.setItem("totalDays",totalDays  )
localStorage.setItem("totalPrice",totalPrice  )  

function drawItems(){
    let y = bedrooms.map((element) => {
        if (element.id %  2 != 0){
        return(`
        <div class="item d-lg-flex" style="background-color: var(--background-color);">
                <div class="photos-item w-50 ps-lg-4">
                    <img class="w-100" src="${element.imageUrl}" alt="Bedrooms">
                </div>
                <div class="infos-item w-50 d-flex flex-column justify-content-center align-items-center my-5">
                    <h3 class="antic-slab-regular fst-italic mb-4" style="color: var(--main-color);">${element.title}</h3>
                    <p class="antic-slab-regular-fs">${element.description}</p>
                    <p class="antic-slab-regular-fs">Price : ${element.price} DZD / Night</p>
                    <div class="action-item d-flex align-items-center justify-content-center mb-5">
                        <button type="submit" class="btn btn-outline-secondary btn-rounded antic-slab-regular-fs text-uppercase px-4 mt-2 me-2" data-mdb-ripple-init  data-mdb-ripple-color="dark">Discover</button>
                        <button type="submit" class="btn btn-outline-secondary btn-rounded antic-slab-regular-fs text-uppercase px-3 mt-2 me-2" onClick="reservationBedroom(${element.id})" data-mdb-ripple-init  data-mdb-ripple-color="dark">Reservation</button>
                        <button type="submit" class="btn btn-outline-none" onClick="favoriteBedrooms(${element.id})"><i class="defavorite fa-solid fa-heart  mt-1" ></i><i class="favorite fa-solid fa-heart  mt-1"style="color:#B89E4A" ></i></button>
                    </div>                    
                </div>
            </div>
            `
    )}else{
        return(`
        <div class="item d-lg-flex">
              <div class="infos-item w-50 d-flex flex-column justify-content-center align-items-center my-5">
                  <h3 class="antic-slab-regular fst-italic mb-4" style="color: var(--main-color);">${element.title}</h3>
                  <p class="antic-slab-regular-fs">${element.description}</p>
                  <p class="antic-slab-regular-fs">Price : ${element.price} DZD / Night</p>
                  <div class="action-item d-flex align-items-center justify-content-center">
                      <button type="submit" class="btn btn-outline-secondary btn-rounded antic-slab-regular-fs text-uppercase px-4 mt-2 me-2"  data-mdb-ripple-init  data-mdb-ripple-color="dark">Discover</button>
                      <button type="submit" class="btn btn-outline-secondary btn-rounded antic-slab-regular-fs text-uppercase px-3 mt-2 me-2" onClick="reservationBedroom(${element.id})" data-mdb-ripple-init  data-mdb-ripple-color="dark">Reservation</button>
                      <button type="submit" class="btn btn-outline-none" onClick="favoriteBedrooms(${element.id})"><i class="defavorite fa-solid fa-heart  mt-1" ></i><i class="favorite fa-solid fa-heart  mt-1"style="color:#B89E4A" ></i></button>
                  </div>                   
              </div>
              <div class="photos-item w-50">
                <img class="w-100" src="${element.imageUrl}" alt="Bedrooms">
              </div>
            </div>`
    )

    }}).join("")
    allBedrooms.innerHTML = y    
}

drawItems();


    function reservationBedroom(id)
    {    
        if(localStorage.getItem("email")){
            let reseritem=bedrooms.find((item) => item.id===id)

    
            localStorage.setItem("typeRooms",reseritem.typeRooms); 
            setTimeout( ()=>{
                window.location="reservation.html"
                },1500)

        }else{
            setTimeout( ()=>{
                window.location="loginregister.html"
                },1500)
            localStorage.setItem("processing","login")
        }
    }

let cart = document.getElementById("cartUser");
let reservationCart = document.getElementById("reserCart")

reservationCart.addEventListener("click",function(){
    if(cartUser.innerHTML !=""){
        if(cart.style.display=="block"){
            cart.style.display="none"
        }else{cart.style.display="block"}

    }
})

let favorite = document.querySelectorAll(".fa-heart")

if (addedFavorite){
        
    addedFavorite.forEach(element => {
        if(element.id==1){
            favorite[0].style.display="none"
            favorite[1].style.display="block"
        }else if(element.id==2){
            favorite[2].style.display="none"
            favorite[3].style.display="block"

        }else if(element.id==3){
            favorite[4].style.display="none"
            favorite[5].style.display="block"
        }
        
    })
        
    }

    localStorage.setItem("totalFavotite",totalFavorite  ) 

function favoriteBedrooms(id){
    let favitem=bedrooms.find((item) => item.id===id)
    
    let elementSelected = favorite  
    console.log(elementSelected.length)      
    if(elementSelected.length/id==6){
        if(elementSelected[0].style.display!="none"){
            elementSelected[0].style.display="none"
            elementSelected[1].style.display="block"            
    
            addedFavorite = [...addedFavorite,favitem]

        }else{
            elementSelected[0].style.display="block"
            elementSelected[1].style.display="none"            
            let index = addedFavorite.findIndex((item) => item.id===favitem.id)            
            addedFavorite.splice(index,1)           
        }
        
    }else if(elementSelected.length/id==3){
        if(elementSelected[2].style.display!="none"){
            elementSelected[2].style.display="none"
            elementSelected[3].style.display="block"
                
            addedFavorite = [...addedFavorite,favitem]

        }else{
            elementSelected[2].style.display="block"
            elementSelected[3].style.display="none"
            let index = addedFavorite.findIndex((item) => item.id===favitem.id)            
            addedFavorite.splice(index,1) 
        }
        }else if(elementSelected.length/id==2){
            if(elementSelected[4].style.display!="none"){
                elementSelected[4].style.display="none"
                elementSelected[5].style.display="block"
        
                addedFavorite = [...addedFavorite,favitem]                
            }else{
                elementSelected[4].style.display="block"
                elementSelected[5].style.display="none"
                let index = addedFavorite.findIndex((item) => item.id===favitem.id)            
                addedFavorite.splice(index,1) 
            }
    }  

   
    localStorage.setItem("fileFavorite",JSON.stringify(addedFavorite))
}


////////////////////////////

function incrementReservation(){
    let datenew = new Date(localStorage.getItem("reservationDateDeparture"));
    let incrementedDate = addDays(datenew, 1);
    let newdays = localStorage.getItem("days");
    let newtotalDays = localStorage.getItem("totalDays");
    newdays = parseInt(newdays)+1;
    newtotalDays = parseInt(newtotalDays)+1;
    localStorage.setItem("reservationDateDeparture",incrementedDate);
    localStorage.setItem("days",newdays)
    localStorage.setItem("totalDays",newtotalDays)
    // dateDeparture.value = localStorage.getItem("reservationDateDeparture").trim()
    let daysreser = document.querySelector(".cartUser-element p")
    let reseritem=bedrooms.find((item) => item.typeRooms===localStorage.getItem("typeRooms"))
    daysreser.innerHTML = `${reseritem.title} : ${localStorage.getItem("days")} Days`
    badge.innerHTML = localStorage.getItem("totalDays")
 }
 
 
 function addDays(date, days) {
    
     // Function to add Days
     var result = new Date(date);
     result.setDate(result.getDate() + days);
     return result;
  }
 
  function decrementReservation(){
     let datenew = new Date(localStorage.getItem("reservationDateDeparture"));
     let incrementedDate = disDays(datenew, 1);
     let newdays = localStorage.getItem("days");
     let newtotalDays = localStorage.getItem("totalDays");
     newdays = parseInt(newdays)-1;
     newtotalDays = parseInt(newtotalDays)-1;
     localStorage.setItem("reservationDateDeparture",incrementedDate);
     localStorage.setItem("days",newdays)
     localStorage.setItem("totalDays",newtotalDays)
    //  dateDeparture.value = localStorage.getItem("reservationDateDeparture").trim()
     let daysreser = document.querySelector(".cartUser-element p")
     let reseritem=bedrooms.find((item) => item.typeRooms===localStorage.getItem("typeRooms"))
     daysreser.innerHTML = `${reseritem.title} : ${localStorage.getItem("days")} Days`
     badge.innerHTML = localStorage.getItem("totalDays")
  }

  
 
 function disDays(date, days) {
    
    // Function to discount Days
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
 }

  
    