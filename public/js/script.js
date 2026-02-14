document.getElementById("mainform").onsubmit = validate;
function validate(){

    clearErrors()
    let isValid=true;
    let location = document.getElementById("location").value;
    let date= document.getElementById('date').value
    let trav= document.getElementById('trav').value.trim()

    if(location === 'none' || !location){
        document.getElementById('derr').style.display='block'
        isValid=false;
    }
    const dateCheck = new Date(date);
    if (!date || dateCheck<new Date()) {
        isValid = false;
        document.getElementById('daerr').style.display ='block'
    }

    if (!trav) {
        document.getElementById('nerr').style.display = 'block'
        isValid = false;
    }
    if(trav<=0&& trav){
        document.getElementById('nberr').style.display = 'block'
        isValid = false;
    }

    return isValid;

}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}
