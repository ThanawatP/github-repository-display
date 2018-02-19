import React from 'react'
import RepositoryItem from 'components/RepositoryItem.react'

class RepositoryList extends React.Component {
    state = {
        repositoryNames: [
            "facebook/react",
            "vuejs/vue",
            "angular/angular"
        ]
    }
    render() {
        const repositoryItems = this.state.repositoryNames.map( (name) => {
            return <RepositoryItem repositoryName={name} key={name} />
        })
        return (
            <section className="section">
                { repositoryItems }
            </section>
        )
    }
}

export default RepositoryList