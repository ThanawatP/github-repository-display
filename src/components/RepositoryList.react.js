import React from 'react'
import RepositoryItem from 'components/RepositoryItem.react'

class RepositoryList extends React.Component {
    render() {
        return (
            <section className="section">
                <RepositoryItem repositoryName="facebook/react" />
                <RepositoryItem repositoryName="vuejs/vue" />
                <RepositoryItem repositoryName="angular/angular" />
            </section>
        )
    }
}

export default RepositoryList