const accesskey = " TbPbJU0n5GaN1d2_DL8lPIpGk2XNggztYT938d27tU0 "

const formE1 = document.querySelector ("form")
const inputE1 = document.getElementById("search-input")
const secresult = document.querySelector(".image-results")
const showmore = document.getElementById("load-buttons")

let inputData =" "
let page = 1;

async function imageAll(){
    inputData =inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}&per_page=9`;
    const response = await fetch(url);
    const data = await response.json();


    const results =data.results;

if (page==1){
    secresult.innerHTML = "";
}

results.map((result) =>{
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add("search-result");

    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target ="_blank";
    imageLink.textContent =result.alt_description;

   
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);  
    secresult.appendChild(imageWrapper);
  });


page++;
if (page>1){
    showmore.style.display ="block";
   }
} 

formE1.addEventListener("submit", (event) =>{
    event.preventDefault();
    page=1;
    imageAll();
});



showmore.addEventListener("click", () => {
    imageAll();
});

