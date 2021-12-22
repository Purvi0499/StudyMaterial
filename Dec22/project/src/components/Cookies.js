// document.cookie = "name=" + escape("XYZ");  

// ////////////////cookie's lifetime by using the expires attribute
// document.cookie="username=XYZ;expires=Mon, 10 Aug 2040 12:00:00 UTC";    

// ////////////The lifetime of the following cookie is for 30 days.///////
// document.cookie="username=XYZ;max-age=" + (60*60*24*30) + ";"    

//Example to store cookies//
/*
    <script>    
    function setCookie()    
    {    
        if(document.myform.uname.value == ""){  
            alert("Required Name");  
            return;    
        }  
        value =  escape(document.myform.uname.value) + ";";    
        document.cookie = "name = " + value;  
        document.write ("Cookie: " + "name = " + value);    
         
    }    
      
    </script>        
*/

/////Reaading a cookie//////////////////////

// function getCookie() {  
//     var cookievalue  =  document.cookie;  
//     document.write ("Cookies : " + cookievalue );  
//     }  
//     // get all the pairs of cookies in an array  
//     arr = cookievalue.split(';');  
      
//     // take key-value pair out of this array  
//     for(var i = 0; i<arr.length; i++) // length is the array class method which returns array length.  
//     {   
//     name  =  arr[i].split('=')[0];  
//     value =  arr[i].split('=')[1];  
//     } 

///////////

// Creating the cookie  
document.cookie = "name=XYZ;path=/;max-age=" + 365*24*60*60;  
  
// Updating the cookie  
document.cookie = "name=ABC;path=/;max-age=" + 30*24*60*60;  


//Deleting a cookie
document.cookie = "name=value; expires= Thu, 21 Aug 2014 16:00:00 UTC; path=/ "  




