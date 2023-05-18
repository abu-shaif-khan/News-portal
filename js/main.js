// data fetching for news categories
let fetchingCategory = async() => {
    let url = `https://openapi.programming-hero.com/api/news/categories`;
    try{
        let response = await fetch(url);
        let data = await response.json();
        displayCategory(data.data.news_category);
        
       }
    catch(error){
         console.log(error); 
       }  
}

let displayCategory = (categoryNews) => {
    console.log(categoryNews);
    let listCategory = document.getElementById('list-categroy');
    categoryNews.forEach(element => {
        let categoryItem = document.createElement('li');
        categoryItem.classList.add('nav-item');
        categoryItem.innerHTML = `
        <a class="nav-link active" aria-current="page" href="#" onclick="loadRelevantNews('${element.category_id}')">${element.category_name}</a>
        `;
        listCategory.appendChild(categoryItem);
    });
    
}

let loadRelevantNews = async(categoryId) => {
    console.log(categoryId);
    let url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        
       }
    catch(error){
         console.log(error); 
       }
    
}

fetchingCategory ();