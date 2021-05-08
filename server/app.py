import os
import sys


# test
# test
sys.path.append(os.getcwd())
from flask import Flask, jsonify, request
from flask_cors import CORS
from database import Database
from classes.Refet import Refet
from datetime import timedelta
from classes.authentication import verifyUser, refetByUser
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

# from models import User
# u = User(username = 'sirkinolya@gmail.com', password = 'olya', name = 'olya', refet_id = "60179ba57269d409ab73c9a1")
# u.save()
# u = User(username = 'dennisborsh@gmail.com', password = 'dennis', name = 'dennis', refet_id = "60179ba57269d409ab73c9a1")
# u.save()

refet = Refet(db, app)

debug = False
if debug:
    valid, refet_id = verifyUser('sirkinolya@gmail.com', 'olya')
    refet.initFromDb(refet_id)


@app.route('/', methods=['GET'])
def health():
    return "ok", 200

@app.route('/api/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('email', None)
    password = request.json.get('password', None)
    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400
    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    valid, refet_id = verifyUser(username, password)
    if not valid:
        return jsonify({"msg": "Bad username or password"}), 401
    refet.initFromDb(refet_id)
    # Identity can be any data that is json serializable
    access_token = create_access_token(identity=username, expires_delta=timedelta(0))
    return jsonify(access_token=access_token), 200


@app.route("/api/projects", methods=['GET', 'POST', 'PUT'])
@jwt_required
def projects():
    current_user = get_jwt_identity()
    id = refetByUser(current_user)
    refet.initFromDb(id)
    if not refet.isValidUser(current_user):
        return jsonify({"msg": "Bad username or password"}), 401
    else:
        return refet.project()


@app.route("/api/stats", methods=['GET'])
@jwt_required
def stats():
    current_user = get_jwt_identity()
    id = refetByUser(current_user)
    refet.initFromDb(id)
    if not refet.isValidUser(current_user):
        return jsonify({"msg": "Bad username or password"}), 401
    else:
        return refet.stats()


# app.add_url_rule(
#          "/api/projects",  "project", refet.project,  methods=[ 'GET', 'POST', 'PUT']
#      )
# app.add_url_rule(
# "/api/stats", "stats", refet.stats, methods=['GET']
# )

if __name__ == '__main__':
    # from server.models import Project

    from datetime import datetime as d

    # client = pymongo.MongoClient(
    #     "mongodb+srv://dorefetuser:dorefetpass@clusterdev.ypvoi.mongodb.net/dorefet?retryWrites=true&w=majority")
    # db = client.test
    # p = Project(name = 'Ceva stocks', start_date = d(2021,2,4), end_date = d.max,
    #             start_equity = 1400*60, currency = 'USD', type='stocks', description = 'Single ceva stocks. Note increased tax on base equity. Puchase price is around 25 per share. Implement differently',
    #             operator="", irr = 0)
    # p.save()
    v = refet.get_value(d.now())
    app.run(port=59678)
