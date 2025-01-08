from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello from Vijay!'})

@app.route('/api/user', methods=['GET'])
def get_user():
    user = {'id':1,'name':"Vijay",'email':'Vijay@gmail.com'}
    return jsonify(user)

if __name__ == '__main__':
    app.run(debug=True)
