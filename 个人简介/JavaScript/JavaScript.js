confirm("生日快乐~~")
var button = document.getElementsByTagName('button')[0],
    open = document.getElementsByClassName('open')[0],
    f = document.getElementsByClassName('f')[0];

    button.addEventListener('click',function() {
        open.style.animationName = 'open';
    })

    f.addEventListener('click', function () {
        open.style.animationName = '';
    })
    function showTime() {
        var date = new Date();

        // 年月日
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        // 时分秒
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        // 实时显示
        var element = document.getElementById('time');
        element.innerHTML = '<h1>' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    }

    setInterval('showTime()', 1000);


