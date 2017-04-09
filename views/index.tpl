<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Python Websockets Chat</title>
    <link rel="stylesheet" href="static/css/main.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&amp;subset=cyrillic" rel="stylesheet">
</head>

<body>
    <div id="page-header">
        <div id="top-menu">
            <div id="logo"></div>
            <div id="user-menu">
                <p></p>
                <img src="https://lorempixel.com/28/28/cats/" alt="" class="avatar">
                <img src="static/imgs/arrow.png" alt="" id="arrow">
            </div>
        </div>
    </div>
    <div id="content">
        <div id="left-col">
            <div id="search">
                <img src="static/imgs/search.png" alt="" id="search-ico">
                <input type="text" placeholder="Поиск..." />
                <div id="fav">
                    <img src="static/imgs/fav.png" alt="">
                    <span>0</span>
                </div>
            </div>
            <div id="dialogs" class="baron baron__root _dialog">
                <div id="dialogs-list" class="baron__scroller">
                    <ul>
                    <!-- List of dialogs here -->
                    </ul>
                    <div class="baron__track">
                        <div class="baron__free">
                            <div id="scroller-bar" class="baron__bar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="dialogs-menu">
                <img src="static/imgs/add.png" >
                <span>Начать новую беседу</span>
                <img src="static/imgs/bell.png" alt="" id="sound-ico">
            </div>
        </div>
        <div id="right-col">
            <div id="dialog-info">
                <p class="user"><b>Python Websockets Chat using Bottle.py </b><span class="last-online">Beta</span></p>
                <div id="more-button">
                    <img src="static/imgs/more.png" alt="">
                </div>
                <div id="search-button">
                    <img src="static/imgs/search-icon.png" alt="">
                </div>
            </div>
            <div id="messages" class="baron baron__root _msg">
                <div id="messages-list" class="baron__scroller">
                    <ul>
                        <li>
                            <div class="msg to-me">
                                <p class="text"><b>Bot:</b><br />Добро пожаловать в чат системных инженеров :) Для входа напишите любое сообщение. Приятного общения!</p>
                                <p class="time">
                                    <script>
                                        date = new Date();
                                        h = date.getHours();
                                        m = date.getMinutes();
                                        document.write((h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m));
                                    </script>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div class="baron__track">
                        <div class="baron__free">
                            <div id="msg-scroller-bar" class="baron__bar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="input-area">
                <img src="https://lorempixel.com/54/54/cats/" alt="" class="avatar online">
                <div id="user-input">
                    <textarea id="input-msg" placeholder="Введите Ваше сообщение..." rows="2"></textarea>
                    <div id="smile-ico"></div>
                    <div id="mic-ico"></div>
                    <div id="attach-icons">
                        <div id="photo-ico"></div>
                        <div id="music-ico"></div>
                        <div id="video-ico"></div>
                        <div id="document-ico"></div>
                    </div>
                    <p id="send-button">Отправить</p>
                </div>
                <img src="https://lorempixel.com/54/54/cats/" alt="" class="avatar offline">
            </div>
        </div>
    </div>
    <!-- JS -->
    <script src="static/js/jquery-3.2.0.min.js"></script>
    <script>
        function setPageHeight () {
                var h = document.documentElement.clientHeight - 70;
                if (document.documentElement.clientHeight > 368) {
                    $('#left-col').height(h);
                    $('#right-col').height(h);
                    $('body').css({'overflow': 'hidden'});
                } else {
                    $('body').css({'overflow': 'scroll'});
                };
        }
        window.onload = function () {
            textAreaInit();
            baron({
                root: '#dialogs',
                scroller: '#dialogs-list',
                bar: '#scroller-bar',
                cssGuru: 'true',
                scrollingCls: '_scrolling',
            });
            baron({
                root: '#messages',
                scroller: '#messages-list',
                bar: '#msg-scroller-bar',
                cssGuru: 'true',
                scrollingCls: '_scrolling',
            });
        }
        $(document).ready(function () {
            setPageHeight ()
        });
        $(window).resize(function () {
            setPageHeight ()
        });
    </script>
    <script src="static/js/baron.min.js"></script>
    <script src="static/js/textarea.js"></script>
    <script src="static/js/chat.js?"></script>
</body>
</html>