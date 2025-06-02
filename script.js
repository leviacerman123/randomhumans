
let randomUser = async function () {
    let users = await fetch('https://randomuser.me/api/')
    let resulet = await users.json()
    let info = resulet.results

    info.forEach((e) => {
        let img = document.querySelector('.profile-img').src = e.picture.large
        let name = document.querySelector('.name').innerHTML = `${e.name.first} ${e.name.last}`
        
        let phone = document.querySelector('.phone').innerHTML = e.phone   
    })



}




