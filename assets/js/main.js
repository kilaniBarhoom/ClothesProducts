let products = [
    {
        "name" : "Red Butdown",
        "image" : "butdown1.jpg" ,
        "price" : 30
    },
    {
        "name" : "Blue Butdown",
        "image" : "butdown2.jpg",
        "price" : 20
    },
    {
        "name" : "Teal Hoodie",
        "image" : "Hoodie1.jpg",
        "price" : 19
    },
    {
        "name" : "Teal Hoodie",
        "image" : "Hoodie1.jpg",
        "price" : 60 
    },
    {
        "name" : "Black Hoodie",
        "image" : "Hoodie2.jpg",
        "price" : 22 
    },
    {
        "name" : "Teal Hoodie",
        "image" : "Hoodie1.jpg",
        "price" : 38 
    },
    {
        "name" : "Black Carrow Pijamas",
        "image" : "pijamas1.jpg",
        "price" : 25 
    },
    {
        "name" : "Grey Pijamas",
        "image" : "pijamas2.jpg",
        "price" : 45 
    },
    {
        "name" : "Black Tshirt",
        "image" : "T-shirt1.jpg",
        "price" : 33 
    },
    {
        "name" : "Red Tshirt",
        "image" : "T-shirt2.jpg",
        "price" : 28 
    },
    
    {
        "name" : "Red Tshirt",
        "image" : "T-shirt2.jpg",
        "price" : 20 
    },
    
    {
        "name" : "Red Tshirt",
        "image" : "T-shirt2.jpg",
        "price" : 17 
    }
    
]

let matchingIndexes = products

updateProducts(matchingIndexes)
let items = document.querySelectorAll('.item');
showCardInfo(items)
function updateProducts(matchingIndexes)
{
    let UpdatedItems ="";
for(item of matchingIndexes)
    {
         UpdatedItems += `
            <div class="item">
                <div class="product-image">
                    <img  src=" assets/images/${item.image}" alt = "Not found" width="50px" height = "50px">
                </div>
                <div class="name-price">
                    <div class="product-name">
                        <span>${item.name}</span> 
                    </div>
                    <div class="product-price">
                        <span>${item.price} $</span> 
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('products').innerHTML = UpdatedItems
}

let input = document.getElementById('searchForProduct');
  input.addEventListener('input', function() {
    let searchTerm = input.value;
    let indexesToCopy = products
    .map((obj, index) => new RegExp(searchTerm, 'i').test(obj.name) ? index : -1)
    .filter(index => index !== -1);

     matchingIndexes = indexesToCopy.map(index => ({ ...products[index] }));
     updateProducts(matchingIndexes)
     items = document.querySelectorAll('.item');
     showCardInfo(items)
  });

function showCardInfo(items)
{
    items.forEach( (item, ind) => {
        item.addEventListener('click', () =>{
            document.querySelector('.cardInfo').style.transform = 'translate(70vh,17vh) scale(1)'
            document.querySelector('.overlay').style.display ='block'
    
            let cardProdImg = document.getElementById('card-image');
            let cardProdName = document.getElementById('product-card-name');
            let cardProdPrice = document.getElementById('product-card-price');
    
            cardProdImg.innerHTML = 
            `
                <img id="card-image" src="assets/images/${matchingIndexes[ind].image}" alt="">
            `
    
            cardProdName.innerHTML = matchingIndexes[ind].name
            cardProdPrice.innerHTML = matchingIndexes[ind].price + ' $'
    
            let date = new Date()
            document.getElementById('card-update-date').innerHTML = date.getDate() + ' / ' + date.getMonth() + ' / ' + date.getFullYear()
        })
    });
}

function closeCard()
{
    document.querySelector('.cardInfo').style.transform = 'translate(70vh,17vh) scale(0)'
    document.querySelector('.overlay').style.display ='none'
    let size = document.querySelectorAll('.sizes span')
    for(let i = 0; i < size.length; i++)
    {
             size[i].style.background ='#EEE',
             size[i].style.border ='none'
    }
    document.getElementById('size').innerHTML = ""
}

document.getElementById('prev').addEventListener('click', (e) =>{
    e.preventDefault()
})


let sizesTypes = ["Small","Medium","Large","X Large"] 

function chooseSize(ind){
    ind--;
    let size = document.querySelectorAll('.sizes span')
    size[ind].style.backgroundColor ='#d9d9d9'
    size[ind].style.border ='solid 2px rgba(0, 0, 0, 0.5)'
    document.getElementById('size').innerHTML = sizesTypes[ind]

    for(let i = 0; i < size.length; i++)
    {
        if(i != ind)
             size[i].style.background ='#EEE',
             size[i].style.border ='none'
    }
}
// create a new array of products that updates with searching