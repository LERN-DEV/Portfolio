#Flask
from flask import Flask, render_template, redirect
app = Flask(__name__)

#rota
@app.route('/')
def index():
    return render_template('index.html')

# Executar app
if __name__ == '__main__':
    app.run(debug=True)