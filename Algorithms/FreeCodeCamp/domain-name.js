function domain_name(url){
    let regex = /(?<=www\.).+(?=\.com)/g
    return url.match(regex);
}


console.log(domain_name("http://www.zombie-bites.com"))