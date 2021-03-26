console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

window.addEventListener('DOMContentLoaded',()=>{

    viewImages()
    dogBreeds()
})

function viewImages(){
    fetch(imgUrl)
    .then(response =>response.json())
    .then(data =>{
        console.log(data)
        data.message.forEach(url=>{
            let newImage=document.createElement("img")
            let container=document.getElementById("dog-image-container")
            newImage.src= url;
            container.appendChild(newImage)
        })



    })
    }

    function dogBreeds(){
        fetch(breedUrl)
        .then(response =>response.json())
        .then(data =>{
            console.log(data)
            for(let i=0;i<data.message.length;i++){

            

            let newLi=document.createElement('li')
            let newBreed=document.getElementById("dog-breeds")
            newBreed.appendChild(newLi)
            newli.innerText=item
            
            
            
            }
        })
        
       

    }