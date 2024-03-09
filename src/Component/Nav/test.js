
$(document).ready(function () {

    $("#signupForm").submit(function (event) {
        event.preventDefault();
        

        var name = $("#f-name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        

        var userData = {
            name: name,
            email: email,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(userData));


        window.location.href = 'login.html';
    });
});




$(document).ready(function () {
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        

        var loginEmail = $("#log-email").val();
        var loginPassword = $("#log-password").val();


        var getUserdata = JSON.parse(localStorage.getItem('user'));


        if (getUserdata && loginEmail === getUserdata.email && loginPassword === getUserdata.password) {

            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password');
        }
    });
});

$(document).ready(function () {

    var isLoggedIn = localStorage.getItem('user');


    if (isLoggedIn) {
        $("#login-signup-buttons").hide();
        $("#searchForm").show();
    }

});


