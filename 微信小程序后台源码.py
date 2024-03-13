"""
author: syn

"""

# !/usr/bin/python
# coding=utf8
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
from os import curdir, sep
import cgi
import logging
import time
import MySQLdb
import socket
import ssl
import datetime
import time
import json

PORT_NUMBER = 443
RES_FILE_DIR = "."


class myHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        logging.warning(self.headers)
        form = cgi.FieldStorage(
            fp=self.rfile,
            headers=self.headers,
            environ={'REQUEST_METHOD': 'POST',
                     'CONTENT_TYPE': self.headers['Content-Type'],
                     })
        id = form.getvalue("name", "")
        value = form.getvalue("addr", "")
        value2 = form.getvalue("addr2", "")
        paihang = form.getvalue("paihang", "")
        if value != "":
            # 连接
            conn = MySQLdb.connect(host="localhost", user="word", passwd="sunyinan", db="word", charset="utf8")
            cursor = conn.cursor()
            dt = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            biao = "student"
            # 创建
            sql = "create table if not exists " + biao + "(ID char(15),word int(2),word2 int(2),timenow char(50))"
            cursor.execute(sql)

            # 写入
            sql = "insert into " + biao + " values('" + id + "','" + value + "','" + value2 + "','" + str(dt) + "')"
            cursor.execute(sql)

            # 提交
            conn.commit()
            # 关闭
            conn.close()
            self.send_response(200)
            self.end_headers()
        elif paihang == '1':
            # 连接
            conn = MySQLdb.connect(host="localhost", user="word", passwd="sunyinan", db="word", charset="utf8")
            cursor = conn.cursor()
            # print id
            sql_query1 = 'SELECT * FROM student ORDER BY word DESC'
            # print sql_query1
            cursor.execute(sql_query1)  # 固定格式,记住
            values = cursor.fetchall()  # 符合条件的所有数据，全部赋值给values
            # print('all datas', values)
            ans = ""
            values = list(values)
            values = values[0:10]
            for i in range(len(values)):
                SID = int(values[i][0])
                a = int(values[i][1])
                b = int(values[i][2])
                c = str(values[i][3])
                c = c[5:len(c) - 3]

                if a + b == 0:
                    b = 1
                d = a * 100 / (a + b)
                d = round(d, 3)

                s1 = str(SID) + "," + str(a) + "," + str(d) + "%," + str(c) + ";"
                ans += s1
            # 关闭
            self.send_response(200)
            self.end_headers()
            self.wfile.write(str(ans))
        else:
            # 连接
            conn = MySQLdb.connect(host="localhost", user="word", passwd="sunyinan", db="word", charset="utf8")
            cursor = conn.cursor()
            # print id
            sql_query1 = 'SELECT word,word2,timenow FROM student WHERE ID = "' + str(id) + '"'
            # print sql_query1
            cursor.execute(sql_query1)  # 固定格式,记住
            values = cursor.fetchall()  # 符合条件的所有数据，全部赋值给values
            # print('all datas', values)
            ans = ""
            values = list(values)
            values.reverse()
            cnt = range(len(values))
            for i in range(len(values)):
                # print i,values[i][0],values[i][1]
                if i >= 5:
                    break
                a = int(values[i][0])
                b = int(values[i][1])
                if a + b == 0:
                    b = 1
                c = a * 100 / (a + b)
                c = round(c, 3)
                d = str(values[i][2])
                d = d[5:len(d) - 3]
                s1 = str(values[i][0]) + "," + str(values[i][1]) + "," + str(c) + "%," + str(d) + ";"
                ans += s1
            # 关闭
            self.send_response(200)
            self.end_headers()
            self.wfile.write(str(ans))

    def do_GET(self):
        return


try:
    server = HTTPServer(('', PORT_NUMBER), myHandler)
    print 'Started httpserver on port ', PORT_NUMBER
    server.socket = ssl.wrap_socket(server.socket, certfile='./https_svr_key.pem', server_side=True)
    server.serve_forever()

except KeyboardInterrupt:
    print '^C received, shutting down the web server'
    server.socket.close()

