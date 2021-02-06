export function getRequestOptions(url, method, requestBody) {
    const token = getUserToken()
    const authorization: any = token ? `Bearer ${token}` : null;
    return {
        headers: { Authorization: authorization }
    }
}

export function getUserToken(): string | null {
    return localStorage.getItem("token")
}


// mongodb+srv://dorefetuser:<password>@clusterdev.ypvoi.mongodb.net/<dbname>?retryWrites=true&w=majority
// mongodb+srv://dorefetuser:dorefetpass@clusterdev.ypvoi.mongodb.net/dorefet?retryWrites=true&w=majority
