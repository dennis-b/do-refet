def verifyUser(username, password):
    from models import User

    for user in User.objects:
        if user == user.username and password == user.password:
            return True, user.refet_id
    return False, None