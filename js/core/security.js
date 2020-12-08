function unauthorized(storage, value, pass) {
    if (localStorage.getItem(storage) !== null && localStorage.getItem(storage) === value) {
        window.location.href = pass;
    }
}

function authorized(storage, value, pass) {
    if (localStorage.getItem(storage) === null || localStorage.getItem(storage) !== value) {
        window.location.href = pass;

    }
}

function validToken(tokenValid) {

    if (tokenValid === "error on token") {
        localStorage.clear();
        window.location.href = '/auth.html';

    }
}

function runXHR(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.status !== 200) {
            $(".error_login_massege")
                .html(`<div class="alert alert-danger mt-5 text-center" role="alert">
                السيرفر الخاص بك لا يعمل تاكد من اتصال الكهرباء او الشبكة واعد المحاولة
                </div>`);
        } else {
            $(".error_login_massege")
                .html(`<div class="alert alert-success mt-5 text-center" role="alert">
السيرفر متصل الان
                </div>`);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
// function deleteAllCookies() {
//   var cookies = document.cookie.split(";");

//   for (var i = 0; i < cookies.length; i++) {
//       var cookie = cookies[i];
//       var eqPos = cookie.indexOf("=");
//       var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
//       document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
//   }
// }
// deleteAllCookies();


/**
 * gard version 
 * start with role
 * 2wf with token 
 * 
 */
// if (localStorage.getItem('roles') === null) { // check if the token is existed.
//   window.location.href = 'http://127.0.0.1:5501/Login.html';
// } else {
//   console.log("no")
//   console.log(localStorage.getItem('roles'))

/**
 * axois post
 * 
 * 
 */
// axios({
//         method: 'get',
//         url: '/admin/student/active/' + id,
//     }).then(function(response) {
//         confDlt.remove();
//         delete confDlt;
//         delete id;
//     })
//     .catch(function(error) {});

// }
// if (localStorage.getItem('token') === null) { // check if the token is existed.
//   window.location.href = 'http://127.0.0.1:5501/Login.html';
// } else {
//   console.log("no")
//   console.log(localStorage.getItem('token'))
/**
 *  axois post
 *
 */
// axios({
//         method: 'get',
//         url: '/admin/student/active/' + id,
//     }).then(function(response) {
//         confDlt.remove();
//         delete confDlt;
//         delete id;
//     })
//     .catch(function(error) {});


// }