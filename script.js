const shoppingList = document.querySelector('.shopping-list');
const shoppingForm = document.querySelector('.shopping-form');
const filterButtons = document.querySelectorAll(".filter-buttons button")


document.addEventListener("DOMContentLoaded", function(){
shoppingForm.addEventListener('submit', submitFormHandler)
saveItem();

for(let button of filterButtons){
    button.addEventListener("click", handleFilterSelection)
}
})



function saveItem() {
    const items = [
        {
            id: 1,
            name: 'Apples',
            purchased: false
        },
        {
            id: 2,
            name: 'Bananas',
            purchased: true
        },
        {
            id: 3,
            name: 'Carrots',
            purchased: false
        }
    ];

    shoppingList.innerHtML = "";


    for (let item of items) {
    const li = createItem(item)
    shoppingList.appendChild(li)
    }


  /*  items.forEach(item =>{
        const li = createItem(item)
        shoppingList.appendChild(li)
    }) */
}

function addItem(input){
    const id = generatID()
    const newItem = createItem(
        {
            id: id,
            name: input.value,
            purchased:false
        }
    )

    shoppingList.prepend(newItem)

    input.value = ""
}

function generatID(){
    return Date.now().toString();
}

function submitFormHandler(event) {
    event.preventDefault(); //sayfanın yenilenmesini engeller

    const input = document.getElementById("item_name")

    if(input.value.trim().length === 0 ){
        alert("Input shouldn't be empty")
        return
    }

    addItem(input)
}

function createItem(item){
    //checkbox
    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("form-check-input");
    input.checked = item.purchased;
    input.addEventListener("change", toggleCompleted)

    //item
    const div = document.createElement("div")
    div.textContent = item.name
    div.classList.add("item-name")
    div.addEventListener("click", editModal)
    div.addEventListener("blur", closeModal)


    //delete icon
    const deleteIcon = document.createElement("span")
    deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon" //bir tane değil birkaç tane class olduğu için classname kullandık
    deleteIcon.addEventListener("click", removeItem)

    //li
    const li = document.createElement("li")
    li.className = "border rounded p-3 mb-1"
    li.toggleAttribute("item-purchased", item.purchased)

    li.appendChild(input)
    li.appendChild(div)
    li.appendChild(deleteIcon)

    return li;
}

function toggleCompleted(e){
   const li = e.target.parentElement;
   li.toggleAttribute("item-purchased")
}

function removeItem(e){
    const li = e.target.parentElement;
    shoppingList.removeChild(li);
}

function editModal(e){
    const li = e.target.parentElement;
    if(li.hasAttribute("item-purchased") == false){
        e.target.contentEditable = true;
    }
}

function closeModal(e){
    e.target.contentEditable = false;
}

function handleFilterSelection(e) {
    const filterBtn = e.target;

    for(let button of filterButtons) {
        button.classList.add("btn-secondary");
        button.classList.remove("btn-primary");
    }

    filterBtn.classList.add("btn-primary");
    filterBtn.classList.remove("btn-secondary");

}