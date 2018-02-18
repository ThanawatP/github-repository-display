import React from 'react'

class NewRepoForm extends React.Component {
    render() {
        return (
            <section class="section">
                <div className="field">
                    <label className="label">Add Repository</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Repository Name" />
                    </div>
                </div>
            </section>
        )
    }
}

export default NewRepoForm