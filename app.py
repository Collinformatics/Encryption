from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/encrypt', methods=['POST'])
def encryptionAES():
    return render_template('AES.html')

if __name__ == '__main__':
    app.run(debug=True)
