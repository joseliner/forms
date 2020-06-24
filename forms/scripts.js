localStorage.setItem('name', 'Bob') 
console.log(localStorage.getItem('name')) 

sessionStorage.setItem('name', 'Billy')
console.log(sessionStorage.getItem('name'))

document.cookie = 'name=kyle; expires=' + new Date(2020, 0, 1).toUTCString()

