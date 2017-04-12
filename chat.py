# -*- coding: utf-8 -*-
import json
from bottle import Bottle, request, abort, static_file, template
from gevent.pywsgi import WSGIServer
from geventwebsocket import WebSocketError
from geventwebsocket.handler import WebSocketHandler


chat = Bottle()
clients = list()


@chat.route('/static/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root='static')


@chat.route('/')
def index():
    return template('index')


@chat.route('/websocket')
def handle_websocket():
    wsock = request.environ.get('wsgi.websocket')
    if not wsock:
        abort(400, 'Expected WebSocket request!')
    while True:
        try:
            msg = json.loads(wsock.receive())
            if wsock in clients:
                clients.remove(wsock)
            clients.append(wsock)
            for wsock in clients:
                try:
                    answer = json.dumps({
                        'user': msg['user'],
                        'text': msg['text']
                        })
                    wsock.send(answer)
                except Exception:
                    pass
        except WebSocketError:
            break

server = WSGIServer(("0.0.0.0", 8080), chat, handler_class=WebSocketHandler)
server.serve_forever()
