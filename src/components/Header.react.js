import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section className="section">
                <h1 className="title">
                    Github Repository Display
                </h1>
                <p className="subtitle">
                    Powered by <strong>Bulma</strong>!
                </p>
            </section>
        )
    }
}

export default Header