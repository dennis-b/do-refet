from database import init_db
from flask import Flask
from flask_graphql import GraphQLView
from schema import schema

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

app.add_url_rule(
    "/graphql", view_func=GraphQLView.as_view("graphql", schema=schema, graphiql=True)
)

if __name__ == "__main__":
    from database import  Database
    from classes.Refet import Refet
    from datetime import datetime
    db = Database()
    refet = Refet(db)
    totalValue = refet.get_value(datetime.now())
    app.run()
