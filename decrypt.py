# import base64
# import base58
# import base91
# from Crypto.Cipher import AES, DES, Blowfish, ARC4
# from Crypto.Util.Padding import unpad
from cryptography.fernet import Fernet
import urllib.parse




class Decryption:
    def __init__(self):
        self.encryptedText = ''
        self.key = ''
        self.data = {}

    def decode(self, encryptedText, key, iv):
        self.encryptedText = encryptedText
        self.key = key
        self.iv = iv

        decryptedAES = Decryption.AES(self)
        decryptedBase64 = Decryption.base64(self)
        decryptedFernet = Decryption.fernet(self)
        decryptedHex = Decryption.hexadecimal(self)
        decryptedURL = Decryption.url(self)

        # Make dictionary
        self.data['aes'] = decryptedAES
        self.data['base64'] = decryptedBase64
        self.data['fernet'] = decryptedFernet
        self.data['hex'] = decryptedHex
        self.data['url'] = decryptedURL

        return self.data


    def AES(self):
        cipher = AES.new(key, AES.MODE_CBC, iv)
        decrypted = cipher.decrypt(ciphertext)
        try:
            return unpad(decrypted, AES.block_size).decode('utf-8')
        except:
            return ''


    def DES(self):
        cipher = DES.new(key, DES.MODE_CBC, iv)
        decrypted = cipher.decrypt(ciphertext)
        try:
            return unpad(decrypted, AES.block_size).decode('utf-8')
        except:
            return ''



    def base32(self):
        try:
            return base64.b32decode(self.encryptedText).decode('utf-8')
        except Exception as exc:
            print(exc)
            return ''

    def base64(self):
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
