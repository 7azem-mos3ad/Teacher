function login() {
    user = document.getElementById("userlogininput").value;
    password = document.getElementById("password").value;
    if (user == "" || password == "") {
        $(".error_login_massege")
            .html(`<div class="alert alert-danger mt-5 text-center" role="alert">
حقل رقم الهاتف و او كلمة السر لا يمكن ان يكون فارغا
</div>`);
        return;
    }
    const params = new URLSearchParams();
    params.append("user", String(user));
    params.append("password", String(password));

    axios({
            method: "post",
            url: baseURL + "/login",
            data: params,
        })
        .then(function(response) {
            rsp = response.data;
            if (rsp.msg == "login sucssfully") {
                localStorage.setItem('login', 'true');
                localStorage.setItem('id', rsp.data.id);
                localStorage.setItem('user', rsp.data.user);
                localStorage.setItem('role', rsp.data.role);
                localStorage.setItem('token', rsp.token);
                window.location.href = '/HomePage.html';
            } else {
                $(".error_login_massege")
                    .html(`<div class="alert alert-danger mt-5 text-center" role="alert">
خطأ في رقم الهاتف او كلمة السر
</div>`);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}