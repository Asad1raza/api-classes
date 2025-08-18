const URL = "https://fakestoreapi.com/products";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("Getting Data...");
    let response = await fetch(URL);
    console.log(response);

    let data = await response.json();
    console.log(data); 
    factpara.innerText = data[0].title;
};


btn.addEventListener("click", getFacts);
