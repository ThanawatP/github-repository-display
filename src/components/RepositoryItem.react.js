import React from 'react'
import * as api from 'api'

class RepositoryItem extends React.Component {
    state = {
        repository: {}
    }

    componentDidMount() {
        api.fetchRepository(this.props.repositoryName)
        .then(repository => {
            console.log(repository)
            this.setState({
                repository: repository
            })
        })
    }

    render() {
        const {
            full_name = "loading...",
            description,
            forks_count,
            stargazers_count,
            watchers_count,
            open_issues_count,
            organization = {}
        } = this.state.repository

        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={ organization.avatar_url } alt="Image" />
                    </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <h2>{ full_name }</h2>
                            <p>{ description }</p>
                        </div>
                    </div>
                </article>
                <hr/>
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">STARS</p>
                            <p className="title">{ stargazers_count }</p>
                        </div>
                        </div>
                        <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">OPEN ISSUES</p>
                            <p className="title">{ open_issues_count }</p>
                        </div>
                        </div>
                        <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">FORKS</p>
                            <p className="title">{ forks_count }</p>
                        </div>
                        </div>
                        <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">WATCHES</p>
                            <p className="title">{ watchers_count }</p>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default RepositoryItem