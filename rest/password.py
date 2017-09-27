from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
import ast

class PortalHandler(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

    def do_POST( self ):
        '''Expected output \{"fname":"Arvind","lname":"Dwarakanath","uname":"adwaraka25","password":"Test@123"\}'''
        content_len = int(self.headers.getheader('content-length', 0))
        post_data = self.rfile.read(content_len)
        password_details = ast.literal_eval(post_data)
        if password_details is None:
            self.send_response(500)
        else:
            print password_details
            self._set_headers()

def run():
    server_address = ('127.0.0.1', 3001)
    httpd = HTTPServer(server_address, PortalHandler)
    print "Password server is running....."
    httpd.serve_forever()
    
if __name__=='__main__':
    run()