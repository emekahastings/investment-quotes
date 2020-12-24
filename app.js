let quotes=[{
    writings: 'An investment in konwledge pays the best interest',
    author:'Benjamin Franklin'
},
{
    writings: 'Close the doors, Be greedy when others are careful and be careful when they are greedy ',
    author:'Warren Buffet'
},
{
    writings: 'With a good perspective on history, we can have a better understanding of the past and present and thus a clear vision of the future ',
    author:'Carlos Slim'
},
{
    writings:'In investing, whats profitable is rarely comfortable',
    author:' Robert Amott'
},
{
    writings: 'Millionaires are not made from investing in a savings account',
    author:' Robert Allen'
},
{
    writings:'Courage taught me that no matter how bad a crisis is, a sound investment will always pay off',
    author:'Carlos Slim'
},
{
    writings:'The biggest risk is doing nothing at all',
    author:'Melody Hubson'
},
{
    writings:'Its not how much money you make, ts how much money you have working for you and how many generations you are keeping it for',
    author:'Robert Kiyosaki'
},
{
    writings:'Wide diversification happens when an investor doesnt know what he is doing',
    author:'Warren Buffet'
}

]

let generate= document.getElementById('generate')
let text=document.getElementById('text')
let author= document.getElementById('author')

let currentText=0
console.log(quotes[currentText])

generate.addEventListener('click' , function next(){
   text.textContent= quotes[currentText].writings;
   author.innerHTML= quotes[currentText].author;
})

generate.addEventListener('click' , function next(){
    currentText++
    if(currentText>quotes.length){
        currentText=0
    }
})

// function next(){
//         text.textContent= quotes[currentText].writings;
//         author.innerHTML= quotes[currentText].author;
//         currentText++
//             if(currentText>quotes.length){
//             currentText=0
//      }
// }

// setInterval(next(), 3000);