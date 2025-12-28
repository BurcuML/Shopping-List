const shoppingList = document.querySelector('.shopping-list');

saveItem();

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

function createItem(item){
    //checkbox
    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("form-check-input");
    input.checked = item.purchased;

    //item
    const div = document.createElement("div")
    div.textContent = item.name
    div.classList.add("item-name")
    
    //delete icon
    const deleteIcon = document.createElement("span")
    deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon" //bir tane değil birkaç tane class olduğu için classname kullandık

    //li
    const li = document.createElement("li")
    li.className = "border rounded p-3 mb-1"

    li.appendChild(input)
    li.appendChild(div)
    li.appendChild(deleteIcon)

    return li;
}