# import graphene
# from graphene.relay import Node
# from graphene_mongo.tests.nodes import PlayerNode, ReporterNode
#
# from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
# # from models import Department as DepartmentModel
# # from models import Employee as EmployeeModel
# # from models import Role as RoleModel
# # from models import Task as TaskModel
#
# from models import Project as ProjectModel
# #
# # class Department(MongoengineObjectType):
# #     class Meta:
# #         model = DepartmentModel
# #         interfaces = (Node,)
# #
# #
# # class Role(MongoengineObjectType):
# #     class Meta:
# #         model = RoleModel
# #         interfaces = (Node,)
# #         filter_fields = {
# #             'name': ['exact', 'icontains', 'istartswith']
# #         }
# #
# #
# # class Task(MongoengineObjectType):
# #     class Meta:
# #         model = TaskModel
# #         interfaces = (Node,)
#
#
# class Project(MongoengineObjectType):
#     class Meta:
#         model = ProjectModel
#         interfaces = (Node,)
#         filter_fields = {
#             'name': ['exact', 'icontains', 'istartswith']
#         }
#
#
# class Query(graphene.ObjectType):
#     node = Node.Field()
#     all_projects = MongoengineConnectionField(Project)
#
#
#
# schema = graphene.Schema(query=Query, types=[Project])
