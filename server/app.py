#from database import init_db
from flask import Flask

app = Flask(__name__)
app.debug = True
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



if __name__ == "__main__":
    from database import  Database
    from classes.Refet import Refet
    from datetime import datetime
    db = Database()
    refet = Refet(db)
    j = refet.getProjectsJson()
    totalValue = refet.get_value(datetime.now())
    app.add_url_rule(
        "/projects", "projects", refet.getProjectsJson
    )
    app.run(port=59678)
