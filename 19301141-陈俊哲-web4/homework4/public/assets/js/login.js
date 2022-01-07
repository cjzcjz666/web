var userid;
var password;
$(function () {
    $("#login").click(function () {
        userid = $('#username').val();
        password = $('#password').val();
        judge();
    });
});

async function judge() {
    var params = {
        username: userid,
        password: password
    };
    var status = 0;
    await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(params)
        })
        .then(response => response.json())
        .then(data => {
            status = data.status;
            // jQuery("#mcontent").text(data.name);
            // article = data;
            console.log(status); // Prints result from `response.json()` in getRequest
            if (status == 200) {
                token = data.token;
                window.token = token;
                window.location = 'index.html?token=' + token + '';
                alert("登陆成功");
            } else {
                $('#username').val(''); //清空输入框
                $('#password').val('');
                alert('登陆失败！');
            }
        })
        .catch(error => console.error(error))
}