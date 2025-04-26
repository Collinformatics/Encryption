from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html',
        black='#151515', white='#FFFFFF',
        colorBG='#303030', colorAccent='#454545',
        colorHeader='#23FF55', buttonHighlight='#1AD747',
        spacer=20, spacerMini=5,
        padSide=25, padTB=30, padInput=8,
        marginB=12, marginButton=12,
        fontSize=16,
        borderRad=5,
    )


if __name__ == '__main__':
    app.run(debug=True)
