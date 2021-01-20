export async function getDataAsync({data, timeout = 2000}: any) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), timeout)
    })
}

export async function getProjects() {
    return getDataAsync({
        data: [
            {
                id: 1,
                name: 'proj1',
                desc: 'proj1 desc',
                rri: 10
            },
            {
                id: 2,
                name: 'proj2',
                desc: 'proj2 desc',
                rri: 10
            },
            {
                id: 3,
                name: 'proj3',
                desc: 'proj3 desc',
                rri: 10
            },
            {
                id: 4,
                name: 'proj4',
                desc: 'proj4 desc',
                rri: 10
            },
            {
                id: 5,
                name: 'proj5',
                desc: 'proj5 desc',
                rri: 10
            },

        ]
    })
}