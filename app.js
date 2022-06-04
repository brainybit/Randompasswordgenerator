function generatePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";//all the possible password characters
    var len = document.getElementById("n").value;
     var output = "" ;

    for(var i=0; i<len; i++) {
        var ran = Math.floor(Math.random() * chars.length);
        output += chars.substring(ran, ran+1);
    }

    document.getElementById("inipass").value = output;
}

