function fetchGithubAPIWithPath(path) {
    let headers = new Headers({
        "Authorization": `token your-token`
    })
    return fetch(`https://api.github.com${path}`, {headers}).then( res => res.json() )
}

export function fetchRepository(scopename) {
    return fetchGithubAPIWithPath(`/repos/${scopename}`)
}
