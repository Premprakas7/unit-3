function storeSearchterm(term) {
}

export default storeSearchterm

import { apiCall,appendArticles } from "./main.js"

let search_term=localStorage.getItem('search_term');

let res=await apiCall(`https://shrouded-earth-23381.herokuapp.com/api/search/?q=${search_term}`);
let articles=document.getElementById('main');
appendArticles(res,articles);