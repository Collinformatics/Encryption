from flask import Flask, jsonify, render_template, request
from decrypt import Decryption


app = Flask(__name__)
decoder = Decryption()


@app.route('/')
def home():
    return render_template('AES.html') # ('decrypt.html') #

@app.route('/AES')
def encryptionAES():
    return render_template('AES.html')

@app.route('/decryption', methods=['POST'])
def decryption():
    encryptedText = request.json.get('encryptedText')
    key = request.json.get('key')
    data = decoder.decode(encryptedText, key)

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
