const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userAge = document.getElementById("userAge");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const userTableBody = document.getElementById("userTableBody");
const emptyMessage = document.getElementById("emptyMessage")

user = JSON.parse(localStorage.getItem("user")) ||[];
let idu = 1;

userTableBody.style.display = "none"

submitBtn.addEventListener("click",function(){
     id++;
     newuser = {
       id:idu,
       name:userName.value,
       email:userEmail.value,
       age:userAge.value
    };

    user.push(newuser)
    localStorage.setItem("user",JSON.stringify(newuser))
    affiche();
    emptyMessage.style.display = "none"
   userTableBody.style.display = "block"

})

function affiche(){

userTableBody.innerHTML = ""

  user.forEach((p,index) => {
    userTableBody.innerHTML += `
                          <tr>
                            <td>
                                <span class="user-name" data-bs-toggle="modal" data-bs-target="#userDetailModal">
                                    ${p.name}
                                </span>
                            </td>
                            <td> ${p.email}</td>
                            <td>${p.age}</td>
                            <td>
                                <button  class="btn btn-sm btn-danger w-100" data-index = ${index} onclick="Supprimer()" >Supprimer</button>
                            </td>
                        </tr>`

  });

}

affiche();

function Supprimer(){
    
    const supp = document.querySelectorAll("td button.btn")
    const idx = supp.dataset.index
  supp.addEventListener("click",function(){
    const filuser = user.filter( us => us.id  === user[idx].id)
    user.remove(filuser)
  })
}

