function validateBasic() {   
    var name1 = document.basic.name.value;   
    var qual1 = document.basic.qual.value;               
    var phone1 = document.basic.phone.value;    
    var id = document.basic.em.value;     

    if (name1 == "") {   
     alert("Name required");  
        return false;     
    }   
    if(name1.length<5){  
        alert("Username should be atleast 5 characters");  
        return false;  
    }  

    at = id.indexOf("@");      
 dot = id.lastIndexOf(".");      
   
 if (at < 1 || ( dot - at < 2 )) {         
    alert("Incorrect Email-ID")           
    return false;      
 }       

    if (qual1 == "") {   
     alert("Qualification required");  
        return false;     
    }   

    if (phone1 == "") {   
     alert("Mobile number is required");  
        return false;     
    }   
    if(phone1.length<10 || phone1.length>10){  
        alert("Mobile number should be of 10 digits");  
        return false;  
    }  

}   