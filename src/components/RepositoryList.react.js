import React from 'react'
import RepositoryItem from './RepositoryItem.react'

class RepositoryList extends React.Component {
    render() {
        return (
            <section className="section">
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </section>
        )
    }
}

export default RepositoryList