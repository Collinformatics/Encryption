import base64

class Decryption:
    def __init__(self):
        self.encryptedText = ''
        self.data = {}

    def decode(self, encryptedText, key):
        self.encryptedText = encryptedText
        
        # Base 64
        print(f'Decode: Base64\n'
              f'Message: {self.encryptedText}\n')
        decryptedBase64 = Decryption.base64(self)

        # Hexadecimal
        decryptedHex = Decryption.hexadecimal(self)

        # Make dictionary
        self.data['base64'] = decryptedBase64
        self.data['hex'] = decryptedHex

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


