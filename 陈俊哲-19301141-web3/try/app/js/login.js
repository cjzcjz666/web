$(function () {
    $("#login").click(function () {
        if ($('#username').val() == 'cjz' && $('#password').val() == 'cjz121720') {
            window.event.returnValue = false;
            alert('登陆成功！');
            window.setTimeout("window.location='index.html'", 500);

            return true;
        } else {
            $('#username').val(''); //清空输入框
            $('#password').val('');
            alert('登陆失败！');

            return false;
        }
    });
});