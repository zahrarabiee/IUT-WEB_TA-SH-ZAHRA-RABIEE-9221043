/**
 * Created by S551 on 10/11/2016.
 */
console.log("in register handler");
$(document).ready(function () {
    $("#submit").click(function validate() {

        var emailpattern = /^([-a-z0-9~!$%^&*_=+}{\'?])+([-a-z0-9~!$%^&*_=+}{\'?.][-a-z0-9~!$%^&*_=+}{\'?])*@[a-z0-9_]([-a-z0-9_])*\.([-a-z0-9_])+/i;
        var numberpattern = /^(\+\d{1,3}[- ]?)?\d{10}$/i;
        var namepattern = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i;
        var passpattern = /((?=.*[a-z])(?=.*d)(?=.*[@#$%])(?=.*[A-Z]).{6,16})/;
        var name = $('#username').val();
        var email = $('#email_add').val();
        var number = $('#number').val();
        var pass = $('#password').val();
        if (!namepattern.test(name) || !emailpattern.test(email) || !numberpattern.test(number)) {
            alert("complete the form please");
            return false;
        }
        if(!namepattern.test(name))
        {
            var namespan = $('#uses').val();
            namespan.innerText = 'inset your username correctly';
            return false;
        }
        if(!emailpattern.test(email))
        {
            var emailspan = $('#emails').val();
            emailspan.innerText = 'inset your email correctly';
            return false;
        }
        if(!numberpattern.test(number))
        {
            var numberspan = $('#tels').val();
            numberspan.innerText = 'inset your phone correctly';
            return false;
        }
        if(!passpattern.test(pass))
        {
            var passspan = $('#pass').val();
            passspan.innerText = 'inset your password correctly';
            return false;
        }
        if (namepattern.test(name) && emailpattern.test(email) && numberpattern.test(number) && passpattern.test(pass)) {
            $('#restab').append('<tr>').append('<td>'+name+'</td>').append('<td>'+email+'</td>').append('<td>'+number+'</td>').append('</tr>');
            return true;
        }
    })
})
