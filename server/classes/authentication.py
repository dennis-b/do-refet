def verifyUser(username, password):
    from models import User

    for user in User.objects:
        if username == user.username and password == user.password:
            return True, user.refet_id
    return False, None


def refetByUser(username):
    from models import User

    for user in User.objects:
        if username == user.username:
            return user.refet_id
    return None
