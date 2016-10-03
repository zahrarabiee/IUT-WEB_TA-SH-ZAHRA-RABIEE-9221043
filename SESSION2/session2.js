$(document).ready(function () {
    $("#submit").click(function () {

        var emailpattern = /^([-a-z0-9~!$%^&*_=+}{\'?])+([-a-z0-9~!$%^&*_=+}{\'?.][-a-z0-9~!$%^&*_=+}{\'?])*@[a-z0-9_]([-a-z0-9_])*\.([-a-z0-9_])+/i;
        var numberpattern = /^\d{10}$/i;
        var namepattern = /[^/s]/i;
        var name = $('#fullname').val();
        var email = $('#email_add').val();
        var number = $('#number').val();
        var tmp = "     ";
        if (!namepattern.test(name) || !emailpattern.test(email) || !numberpattern.test(number)) {
            alert("Insert the correct form");
        }
        if (namepattern.test(name) && emailpattern.test(email) && numberpattern.test(number)) {
            $('#restab').append('<tr>').append('<td>'+name+'</td>').append('<td>'+tmp+'</td>').append('<td>'+email+'</td>').append('<td>'+tmp+'</td>').append('<td>'+number+'</td>').append('</tr>');
        }
    })
})