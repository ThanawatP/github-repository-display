function fetchGithubAPIWithPath(path) {
    let headers = new Headers({
        "Authorization": `token dfccae474f5ceb1df017a3b861e7fad0afc19fc4 `
    })
    return fetch(`https://api.github.com${path}`, {headers}).then( res => res.json() )
}

export function fetchRepository(scopename) {
    return fetchGithubAPIWithPath(`/repos/${scopename}`)
}