import base64
import urllib.parse

class Decryption:
    def __init__(self):
        self.encryptedText = ''
        self.data = {}

    def decode(self, encryptedText, key):
        self.encryptedText = encryptedText
        decryptedBase64 = Decryption.base64(self)
        decryptedHex = Decryption.hexadecimal(self)
        decryptedURL = Decryption.url(self)
        print(decryptedURL)

        # Make dictionary
        self.data['base64'] = decryptedBase64
        self.data['hex'] = decryptedHex
        self.data['url'] = decryptedURL

        return self.data


    def base64(self):
        # Base 64
        try:
            return base64.b64decode(self.encryptedText).decode('utf-8')
        except:
            return ''


    def hexadecimal(self):
        # Hexadecimal
        try:
            return bytes.fromhex(self.encryptedText).decode('utf-8')
        except:
            return ''

    def url(self):
        try:
            return urllib.parse.unquote(self.encryptedText)
        except:
            return ''

