const searchbox= document.getElementById('search-box')
const searchfor= document.getElementById('searchfor')
searchfor.addEventListener('click', ()=>{
    window.find(searchbox.value)
    
})
const blogsearch= document.getElementById('blogsearch')
const blogsrch= document.getElementById('blogsrch')
blogsrch.addEventListener('click', ()=>{
    window.find(blogsearch.value)
    
})