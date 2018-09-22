function insert(num) {
    document.form.textview.value = document.form.textview.value+num   
}

function resultado() {
    let result = document.form.textview.value;
    if(result){
        document.form.textview.value = eval(result)
    }
}

function limpar() {
    document.form.textview.value = "";
}