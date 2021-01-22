#from database import init_db
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.debug = True
CORS(app)
#
# default_query = """
# {
#   allProjects {
#     edges {
#       node {
#         id,
#         name,
#         department {
#           id,
#           name
#         },
#         roles {
#           edges {
#             node {
#               id,
#               name
#             }
#           }
#         },
#         leader {
#           id,
#           name
#         }
#         tasks {
#           edges {
#             node {
#               name,
#               deadline
#             }
#           }
#         }
#       }
#     }
#   }
# }""".strip()


# @app.route('/addproject', methods=[ 'POST'])
# def add_projectR():
#     print("")
#     if request.method == 'POST':
#         print("")
#     pass

from database import  Database
from classes.Refet import Refet
from datetime import datetime
db = Database()
refet = Refet(db)
j = refet.getProjectsJson()
totalValue = refet.get_value(datetime.now())

@app.route("/project", methods = ['POST'])
def helloWorld():
  return refet.project()

app.run(port=59678)

# if __name__ == "__main__":

#     app.add_url_rule(
#         "/project", "project", refet.project,  methods=[ 'GET', 'POST', 'PUT']
#     )

