import base64
from cryptography.fernet import Fernet
import urllib.parse

class Decryption:
    def __init__(self):
        self.encryptedText = ''
        self.key = ''
        self.data = {}

    def decode(self, encryptedText, key):
        self.encryptedText = encryptedText
        self.key = key

        decryptedBase64 = Decryption.base64(self)
        decryptedFernet = Decryption.fernet(self)
        decryptedHex = Decryption.hexadecimal(self)
        decryptedURL = Decryption.url(self)

        # Make dictionary
        self.data['base64'] = decryptedBase64
        self.data['fernet'] = decryptedFernet
        self.data['hex'] = decryptedHex
        self.data['url'] = decryptedURL

        return self.data



    def base64(self):
        # Base 64
        try:
            return base64.b64decode(self.encryptedText).decode('utf-8')
        except Exception as exc:
            print(exc)
            return ''



    def fernet(self):
        try:
            cipher = Fernet(self.key)
            return cipher.decrypt(self.encryptedText.encode()).decode()
        except Exception as exc:
            print(exc)
            return ''



    def hexadecimal(self):
        # Hexadecimal
        try:
            return bytes.fromhex(self.encryptedText).decode('utf-8')
        except Exception as exc:
            print(exc)
            return ''



    def url(self):
        try:
            return urllib.parse.unquote(self.encryptedText)
        except Exception as exc:
            print(exc)
            return ''
