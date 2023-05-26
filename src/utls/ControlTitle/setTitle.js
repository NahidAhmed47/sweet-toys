const setTitle = (title)=>{
    if(title === 'Home'){
        document.title = 'Sweet Toys';
    }
    else{
        document.title = 'SToys | ' + title;
    }
}

export default setTitle;