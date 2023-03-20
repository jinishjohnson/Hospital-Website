function regID()
{
    var Uname=document.getElementById("username");
    var pwd=document.getElementById("passwrd");

    if(Uname.value=="")
    {
        alert("Enter a Valid Username");
        document.formname.username.focus();
        return false;
    }
    if(pwd.value=="")
    {
        alert("Enter valid Password");
        document.formname.passwrd.focus();
        return false();
    }
}
function NewID()
{
    
    var fname=document.getElementById("firstname");
    var lname=document.getElementById("lastname");
    var paswd=document.getElementById("password");
    var usrnm=document.getElementById("Rusrname");
    var cpwd=document.getElementById("cpassword");
    var ads=document.getElementById("address");
    var dt=document.getElementById("date");
   // var spl=document.getElementById("spcial");

    if(fname.value=="")
    {
        alert("Enter firstname ");
        document.fform.firstname.focus();
        return false();
    }
    if(lname.value=="")
    {
        alert("Enter lastname ");
        document.fform.lastname.focus();
        return false();
    }
    if(paswd.value=="")
    {
        alert("Enter password ");
        document.fform.passwrd.focus();
        return false();
    }
   if(usrnm.value=="")
    {
        alert("Enter a valid Username ");
        document.fform.Rusrname.focus();
        return false();
    }
    if(cpwd.value=="")
    {
        alert("Retype the Password ");
        document.fform.cpwd.focus();
        return false();

    }
    if(ads.value=="")
    {
        alert("Enter the address ");
        document.fform.address.focus();
        return false();
    }
    if(dt.value=="")
    {
        alert("Enter date ");
        document.fform.date.focus();
        return false();
    }
    //if(spl.value=="")
    //{
      //  alert("Enter which specialisation");
        //document.fform.spl.focus();
        //return false();
    //}
    else{
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
        }

}