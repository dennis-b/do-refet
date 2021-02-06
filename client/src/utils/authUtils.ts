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
