/**
 * Created by S551 on 10/11/2016.
 */
console.log("in register handler");
$(document).ready(function () {
    $("#submit").click(function validate() {

        var emailpattern = /^([-a-z0-9~!$%^&*_=+}{\'?])+([-a-z0-9~!$%^&*_=+}{\'?.][-a-z0-9~!$%^&*_=+}{\'?])*@[a-z0-9_]([-a-z0-9_])*\.([-a-z0-9_])+/i;
        var numberpattern = /^(\+\d{1,3}[- ]?)?\d{10}$/i;
        var namepattern = /^[a-z0-9_-]{3,16}$/i;
        var passpattern = /^[a-zA-Z]\w{3,14}$/;
        var name = $('#username').val();
        var email = $('#email_add').val();
        var number = $('#number').val();
        var pass = $('#password').val();
        var bool = true;
        /*if (!namepattern.test(name) || !emailpattern.test(email) || !numberpattern.test(number)) {
         alert("complete the form please");
         bool = false;
         }*/
        if(!namepattern.test(name))
        {
            console.log("namenot");
            $("#uses").text("insert your username correctly");
            bool = false;
        }
        if(namepattern.test(name))
        {
            $("#uses").text("");
        }
        if(!emailpattern.test(email))
        {
            console.log("emailnot");
            $("#emails").text("insert your email correctly");
            bool = false;
        }
        if(emailpattern.test(email))
        {
            $("#emails").text("");
        }
        if(!numberpattern.test(number))
        {
            console.log("numbernot");
            $("#tels").text("insert your phone correctly");
            bool = false;
        }
        if(numberpattern.test(number))
        {
            $("#tels").text("");
        }
        if(!passpattern.test(pass))
        {
            console.log("passnot");
            $("#pass").text("insert your password correctly");
            bool = false;
        }
        if(passpattern.test(pass))
        {
            $("#pass").text("");
        }
        if( namepattern.test(name) && emailpattern.test(email) && numberpattern.test(number) && passpattern.test(pass)) {

            $('#restab').append('<tr>').append('<td>'+name+'</td>').append('<td>'+email+'</td>').append('<td>'+number+'</td>').append('</tr>');
        }
        return bool;
    })
})
