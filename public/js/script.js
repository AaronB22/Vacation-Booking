document.getElementById("mainform").onsubmit = validate;
function validate(){

    clearErrors()
    console.log('best')
    let isValid=true;
    let location = document.getElementById("location").value;
    let date= document.getElementById('date').value
    let trav= document.getElementById('trav').value.trim()

    if(location === 'none' || !location){
        document.getElementById('derr').style.display='block'
        isValid=false;
    }
    if (!date) {
        isValid = false;
        document.getElementById('daerr').style.display ='block'
    }
    if (!trav) {
        document.getElementById('nerr').style.display = 'block'
        isValid = false;
    }

    return false;

}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}
