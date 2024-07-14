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


// const names = document.querySelector(".names")
// const livingRoomName = document.querySelector(".living-room-name")
// const diningRoomName = document.querySelector(".dining-room-name")
// const bedRoomName = document.querySelector(".bed-room-name")
// const livingRoom2Name = document.querySelector(".living-room-2-name")

roomSelects.forEach(select => select.addEventListener("click", function(){
    
    rooms.forEach(room => room.style.display="none" )
    roomSelects.forEach(selectedRoom => selectedRoom.style.opacity = 0.6)
    // names.forEach(name => name.style.display = "none")

    if(select.classList.contains("living-room-select")){
        livingRoom.style.display = "block"
        // livingRoomName.style.display = "block"
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

