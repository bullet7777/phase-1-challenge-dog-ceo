console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded',()=>{
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
            for(const item in data.message){

            let newLi=document.createElement('li')
            let newBreed=document.getElementById("dog-breeds")
            newBreed.appendChild(newLi)
            newLi.innerText=item
            newLi.addEventListener('click',changeColor)
            
            }
            let dropDown=document.getElementById("breed-dropdown")
            dropDown.addEventListener('change',selectDropDown)
        })
        
    }
    

    function changeColor(event){
        if(event.target.style.color==='red'){
           event.target.style.color='black'
        }
        else{
            event.target.style.color="red"
        }
       

    }

    function selectDropDown(event){
        let selectedLetter=event.target.value
        let allBreeds=document.getElementById("dog-breeds").getElementsByTagName('li')
        console.log(allBreeds)
        for(let i=0;i<allBreeds.length;i++){
            let selectedLi=allBreeds[i]
            let breed=selectedLi.innerText[0]
            if(breed===selectedLetter){
            selectedLi.style.display='block'
        }
        else{
            selectedLi.style.display='none'
        }
}


}

