import React from 'react'

class RepositoryItem extends React.Component {
    render() {
        return (
            
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                    </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <h2>React</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                        </div>
                    </div>
                </article>
                <hr/>
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">STARS</p>
                            <p className="title">3,456</p>
                        </div>
                        </div>
                        <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">OPEN ISSUES</p>
                            <p className="title">123</p>
                        </div>
                        </div>
                        <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">FORKS</p>
                            <p className="title">456K</p>
                        </div>
                        </div>
                        <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">WATCHES</p>
                            <p className="title">789</p>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default RepositoryItem