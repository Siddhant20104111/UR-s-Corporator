/*const form = document.querySelector("form"),
   nextBTn = form.querySelector(".nextBtn"),
   allInput = form.querySelector(".first input");

nextBTn.addEventListener("click",()=>{
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }
        else{
            form.classList.remove('secActive');
        
        }

    })
})
backBtn.addEventListener("click",() => form.classList.remove('secActive'));*/

function register(){
    var nam=document.forms["reg"]["nam"].value;
    var dob=document.forms.reg.dob.value;
    var emal=document.forms.reg.emal.value;
    var mobno=document.forms.reg.mobno.value;
    var gen=document.forms.reg.gen.value;
    var pwd=document.forms.reg.pwd.value;
    var add=document.forms.reg.add.value;
    var street=document.forms.reg.street.value;
    var pinco=document.forms.reg.pinco.value;
    var state=document.forms.reg.state.value;
    var dist=document.forms.reg.dist.value;
    var wardno=document.forms.reg.wardno.value;
    /*alert("please Enter all entries")*/
    
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/g;
    var regPhone = /^\d{10}$/;
    var regpassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var regpincode = /^\d{6}$/; 
    var regwardno = /^\d{8}$/;
    

    if (nam=="" && dob=="" && emal=="" && gen=="" && mobno=="" && pwd=="" && add=="" && street=="" && pinco=="" && state=="" && dist=="" && wardno==""){
        window.alert("Please enter all the fields");
        document.reg.dob.focus();
        return false;
    }
    
    if (nam=="" ){
        window.alert("Please enter your Name");
        document.reg.nam.focus();
        return false;
    }
    
 
    if (!(isNaN(nam)) ){
        window.alert("Please use only characters in name field");
        document.reg.nam.focus();
        return false;
    }
    if (dob=="" ){
        window.alert("Please enter your Date of Birth");
        document.reg.dob.focus();
        return false;
    }
    if (emal=="" ){
        window.alert("Please enter your Email Address");
        document.reg.emal.focus();
        return false;
    }
    
    if( !regEmail.test(emal)){
        window.alert("Please Enter valid Email Address Example: siddhantdarekar1010@gmail.com ");
        document.reg.emal.focus();
        return false;
    }
    if (gen=="" ){
        window.alert("Please enter your Gender");
        document.reg.gen.focus();
        return false;
    }

    if( !regPhone.test(mobno)){
        window.alert("Please Enter 10 digit Mobile Number");
        document.reg.mobno.focus();
        return false;
    }
    if(pwd==""){
        window.alert("Please Enter Password");
        document.reg.pwd.focus();
        return false;
    }
    if(pwd.length<=7 || pwd.length>=15 || !regpassword.test(pwd)){
        window.alert("Please Enter having 7 and 15 cahracters which contains atleast one special character and atleast one digit ");
        document.reg.pwd.focus();
        return false;
    }
    if(add==""){
        window.alert("Please Enter your address");
        document.reg.add.focus();
        return false;
    }
    if( street==""){
        window.alert("Please Enter your street");
        document.reg.street.focus();
        return false;
    }
    if( pinco==""){
        window.alert("Please Enter your pincode");
        document.reg.pinco.focus();
        return false;
    }
    if(!regpincode.test(pinco) ){
        window.alert("Please Enter valid pincode");
        document.reg.pinco.focus();
        return false;
    }
    if( state==""){
        window.alert("Please Enter your state");
        document.reg.state.focus();
        return false;
    }
    if( dist==""){
        window.alert("Please Enter your District");
        document.reg.dist.focus();
        return false;
    }
    if( wardno==""){
        window.alert("Please Enter your ward number");
        document.reg.wardno.focus();
        return false;
    }
    if(!regwardno.test(wardno) ){
        window.alert("Please Enter valid Ward number");
        document.reg.wardno.focus();
        return false;
    }

}