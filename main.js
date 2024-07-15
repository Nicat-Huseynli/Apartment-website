// Side Menu 

const burgerMenu = document.querySelector(".fa-bars")
const sideBar = document.querySelector(".side-bar")
const closebtn = document.querySelector(".fa-x")
const overlay = document.querySelector(".overlay")

burgerMenu.addEventListener("click", function(){
    sideBar.style.display = 'flex'
    overlay.style.display = 'flex'
})

closebtn.addEventListener("click", function(){
    sideBar.style.display = "none";
    overlay.style.display = 'none'
})

overlay.addEventListener("click", function(){
    sideBar.style.display = "none";
    overlay.style.display = 'none'
})


// Change rooms

const rooms = document.querySelectorAll(".room");
const roomSelects = document.querySelectorAll(".room-select");

const livingRoom = document.querySelector(".living-room")
const diningRoom = document.querySelector(".dining-room")
const bedRoom = document.querySelector(".bed-room")
const livingRoom2 = document.querySelector(".living-room-2")

const livingRoomSelect = document.querySelector(".living-room-select")
const diningRoomSelect = document.querySelector(".dining-room-select")
const bedRoomSelect = document.querySelector(".bed-room-select")
const livingRoom2Select = document.querySelector(".living-room-2-select")

roomSelects.forEach(select => select.addEventListener("click", function(){
    
    rooms.forEach(room => room.style.display="none" )
    roomSelects.forEach(selectedRoom => selectedRoom.style.opacity = 0.6)

    if(select.classList.contains("living-room-select")){
        livingRoom.style.display = "block"
        livingRoomSelect.style.opacity = 1
    } else if(select.classList.contains("dining-room-select")){
        diningRoom.style.display = "block"
        diningRoomSelect.style.opacity = 1
    } else if(select.classList.contains("bed-room-select")){
        bedRoom.style.display = "block"
        bedRoomSelect.style.opacity = 1
    } else{
        livingRoom2.style.display = "block"
        livingRoom2Select.style.opacity = 1
    }
}))


// Modal window

const subscribeBtn = document.querySelector(".subscribe-btn")
const subscribeOverlay = document.querySelector(".subscribe-overlay")
const subscribeModal = document.querySelector(".subscribe-modal")
const subscribeClose = document.querySelector(".subscribe-close")

subscribeBtn.addEventListener("click", function(){
    subscribeOverlay.style.display = "block"
    subscribeModal.style.display = "block"
})

subscribeClose.addEventListener("click", function(){
    subscribeModal.style.display = "none"
    subscribeOverlay.style.display = "none";
})

subscribeOverlay.addEventListener("click", function(){
    subscribeModal.style.display = "none"
    subscribeOverlay.style.display = "none"
})

// Error

const checkError = document.querySelectorAll(".check-error")
const searchBtn = document.querySelector(".search")

const contactError = document.querySelectorAll(".contact-error")
const sendBtn = document.querySelector(".send-btn") 

searchBtn.addEventListener("click", function(){
    checkError.forEach(check => check.style.display = "inline")
})

sendBtn.addEventListener("click", function(){
    contactError.forEach(contact => contact.style.display = "inline")
})

