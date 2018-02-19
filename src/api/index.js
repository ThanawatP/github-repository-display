function fetchGithubAPIWithPath(path) {
    let headers = new Headers({
        "Authorization": `token 459c91f89836089f61d215dbdedf12653dc5f361`
    })
    return fetch(`https://api.github.com${path}`, {headers}).then( res => res.json() )
}

export function fetchRepository(scopename) {
    return fetchGithubAPIWithPath(`/repos/${scopename}`)
}