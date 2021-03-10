let list = document.getElementById('list'), createform = document.getElementById('createform')

let createbtn = document.getElementById('createbtn'), savebtn = document.getElementById('savebtn')

let savetext = document.getElementById('savetext')

let values = {}

function del_item(item){
    delete values[item.childNodes[0].value]
    list.removeChild(item)
}
function swap_items(item1, item2){
    try{
        let temp = item1.childNodes[0].value
        item1.childNodes[0].value = item2.childNodes[0].value
        item2.childNodes[0].value = temp
        temp = item1.childNodes[1].value
        item1.childNodes[1].value = item2.childNodes[1].value
        item2.childNodes[1].value = temp
    }
    catch(ex){}
}
function item_up(item){
    swap_items(item, item.previousSibling)
}
function item_down(item){
    swap_items(item, item.nextSibling)
}
function add_item(key,val){
    if (values[key]) return

    let item = document.createElement('div'), keyin = document.createElement('input'), valin = document.createElement('input'),
        btnup = document.createElement('button'), btndown = document.createElement('button'), btndel = document.createElement('button')
    
    keyin.value = key
    valin.value = val
    keyin.disabled = valin.disabled = true
    btnup.innerHTML = "\u25B2"
    btndown.innerHTML = "\u25BC"
    btndel.innerHTML = "x"

    btnup.onclick = (e) => { item_up(e.target.parentNode) }
    btndown.onclick = (e) => { item_down(e.target.parentNode) }
    btndel.onclick = (e) => { del_item(e.target.parentNode) }

    for (i of [keyin, valin, btnup, btndown, btndel])
        item.appendChild(i)

    list.appendChild(item)

    values[key] = val
}

function toggleCreateForm(){
    createform.style.display = createform.style.display == 'none' ? 'block' : 'none'
}
toggleCreateForm()
createbtn.onclick = toggleCreateForm

createform.onsubmit = (e) => {
    add_item(e.target['key'].value, e.target['value'].value)
    e.preventDefault()
}

savebtn.onclick = (e) => {
    savetext.innerText = JSON.stringify(values)
}

add_item("key1", "val1")
add_item("key2", "val2")