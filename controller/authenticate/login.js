const login = (username, password) => {


    if ( username === "zobo@gmail.com" && password === "zobo"){
        return true;
    }else{
        return false;
    }
}

module.exports = login;