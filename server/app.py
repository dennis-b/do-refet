#from database import init_db
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
from database import Database
from classes.Refet import Refet

def main():

  app = Flask(__name__)
  app.debug = True
  CORS(app)
  db = Database()
  refet = Refet(db, app)

  app.add_url_rule(
             "/api/projects",  "project", refet.project,  methods=[ 'GET', 'POST', 'PUT']
         )
  app.add_url_rule(
    "/api/stats", "stats", refet.stats, methods=['GET']
  )
  app.run(port=59678)

if __name__ == "__main__":
  main()


