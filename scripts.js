const food = document.querySelector('ul')
const buttonShowAll = document.querySelector('.buttonShowAll')
const buttonDiscount = document.querySelector('.buttonDiscount')
const sumpriceTotal = document.querySelector('.buttonPriceTotal')
const buttonFilter = document.querySelector('.buttonFilter')


function formatCurrency(value) {

    const newValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return newValue
}



function showAll(productsArray) {
    food.innerHTML = ''
    productsArray.forEach(products => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        img.src = products.src
        const p = document.createElement('p')
        p.textContent = products.name
        const p2 = document.createElement('p')
        p2.innerHTML = `<p class="item-price">${formatCurrency(products.price)}</p>`



        food.appendChild(li)
        li.appendChild(img)
        li.appendChild(p)
        li.appendChild(p2)

    })


}


function discount() {



    const options = menuOptions.map((product) => ({

        ...product,//spread Operator 
        price: product.price * 0.9,

    }))


    showAll(options)
}



function allPrice() {
    food.innerHTML = ''
    let total = menuOptions.reduce((acc,product)=> acc + product.price,0)
    
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerHTML = `<p> O valor total dos itens é ${formatCurrency(total)}</p>`

    food.appendChild(li)
    li.appendChild(p)
}

function foodVegan(){
    

    let total = menuOptions.filter(productVegan => productVegan.vegan === true)
    
    showAll(total)

}

buttonShowAll.addEventListener('click',()=> showAll(menuOptions))
buttonDiscount.addEventListener('click', discount)
sumpriceTotal.addEventListener('click', allPrice)   
buttonFilter.addEventListener('click', foodVegan)