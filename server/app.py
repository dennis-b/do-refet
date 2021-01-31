from flask import Flask, jsonify, request
from flask_cors import CORS
from database import Database
from classes.Refet import Refet
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)


app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'super-secret'
jwt = JWTManager(app)
app.debug = True
CORS(app)
db = Database()
refet = Refet(db, app)

# @app.route('/protected', methods=['GET'])
# @jwt_required
# def protected():
#     # Access the identity of the current user with get_jwt_identity
#     current_user = get_jwt_identity()
#     return jsonify(logged_in_as=current_user), 200

@app.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    password = request.json.get('password', None)
    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400
    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    valid = refet.verify_user(username, password)
    if not valid:
        return jsonify({"msg": "Bad username or password"}), 401

    # Identity can be any data that is json serializable
    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token), 200



@app.route("/api/projects", methods=[ 'GET', 'POST', 'PUT' ])
@jwt_required
def projects():
    current_user = get_jwt_identity()
    if not refet.isValidUser(current_user):
        return jsonify({"msg": "Bad username or password"}), 401
    else:
        return refet.project()

@app.route("/api/stats", methods=[ 'GET' ])
@jwt_required
def stats():
    current_user = get_jwt_identity()
    if not refet.isValidUser(current_user):
        return jsonify({"msg": "Bad username or password"}), 401
    else:
        refet.stats()



# app.add_url_rule(
#          "/api/projects",  "project", refet.project,  methods=[ 'GET', 'POST', 'PUT']
#      )
# app.add_url_rule(
# "/api/stats", "stats", refet.stats, methods=['GET']
# )

if __name__ == '__main__':
    app.run(port=59678)



