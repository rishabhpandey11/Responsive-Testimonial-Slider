(function (){
const customerImage = document.querySelector('#customer-img')
const customerName = document.querySelector('#customer-name')
const customerText = document.querySelector('#customer-text')

const btn = document.querySelectorAll('.btn')
let index = 0
const customers = []


function Customer(img, name, text){
this.img = img
this.name = name
this.text = text


}

function createCustomer(img, name, text){
let Img= './img/${img}.jpg'
let customer= new Customer (Img, name, text)


customers.push(customer)
}


createCustomer(0, 'John', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book')
createCustomer(1, 'Sandy' , 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book')
createCustomer(2, 'Elton', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book')
createCustomer(3, 'Toby', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book')
createCustomer(4,'Tyrell', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book')


btn.forEach(function(button){
button.addEventListener('click', function(e){
    if (e.target.parentElement.classList.contains('prevbtn')){
        if(index == 0){
            index = customers.length
        }
        index--
        customerImage.src = customer[index].img
        customerName.textContent = customers[index].name
        customerText.textContent = customers[index].text

    }

    if (e.target.parentElement.classList.contains('nextbtn')){
        index ++
        if(index == customers.length){
            index = 0
        }
        index--
        customerImage.src = customer[index].img
        customerName.textContent = customers[index].name
        customerText.textContent = customers[index].text

    }
})

})

})()