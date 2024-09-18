const product=[
    {
        id:0,
        image:'bed.jpg',
        title:'Large bed',
        price:100000,
    },
    {
        id:1,
        image:'chairr1.png',
        title:'chair',
        price:15000,
    },
    {
        id:3,
        image:'cupboard-2.png',
        title:'Cupboard',
        price:80000,
    },
    {
        id:4,
        image:'sofaa.png',
        title:'sofa',
        price:50000,
    },
    {
        id:5,
        image:'sofaset.jpg',
        title:'Sofaset',
        price:150000,
    },
    {
        id:6,
        image:'chair.jpg',
        title:'couch',
        price:150000,
    }

];
const categories = [...new Set (product.map((item)=>{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var{image,title,price} = item;
        return(
           `<div class='box'>
           <div class='img-box'>
           <img  class='images'src='${image}' ></img>
           </div>
           <div class='button'>
          <p>${title}</p>
           <h2>Rs ${price}</h2>`+"<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
           `</div>
           </div>`
        )

}).join('')

var cart= [];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j=0;
    let total = 0;
    document.getElementById("count").innerHTML=cart.length;
if(cart.length==0)
{
    document.getElementById('cartItem').innerHTML="your cart is empty!";
    document.getElementById("total").innerHTML  = "Rs"+ 0 +".00";
}
else
{
    document.getElementById('cartItem').innerHTML=cart.map((items)=>
    {
        var{image,title,price} = items;
        total=total+price;
        document.getElementById("total").innerHTML="Rs "+total+".00";
        return(
           `<div class='cart-items'>
           <div class='row-img'>
           <img  class='rowimg'src='${image}' ></img>
           </div>
           <p style='font-size:12px;'>${title}</p>
           <h2 style='font-size:15px;'>Rs ${price}.00</h2>`+
           "<i class='fa fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
        );
    }).join('');
} 
}

