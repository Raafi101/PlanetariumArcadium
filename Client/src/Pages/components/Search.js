import React, {Fragment, useState} from 'react';
import './Search.css';

function Search() {

    const [name, setName] = useState("");
    const [bodies, setBodies] = useState([]);

    const URL = process.env.NODE_ENV === 'production' ? `/bodies/?name=${name}` : `http://localhost:5000/bodies/?name=${name}`

    const onSubmitForm = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch(`/bodies/?name=${name}`, {method: "GET"});

            const parseResponse = await response.json();

            setBodies(parseResponse);
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <div id='container'>
                <form className='d-flex' onSubmit={onSubmitForm}>
                    <input 
                        autocomplete='off'
                        type='text' 
                        name='name' 
                        placeholder='Search the Universe... (ex. "Earth", "Kepler-10", "Sun")' 
                        className='form-control'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <button id="searchBTN" class='btn success'>
                        <i className="icofont-search-2" />
                    </button>
                </form>
                    <table className='table my-5'>
                        <thead>
                            <tr>
                                <th>Star</th>
                                <th>Planet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bodies.map(body => (
                                    <tr>
                                        <td><a href={body.host_name}>{body.host_name}</a></td>
                                        <td>{body.planet_letter}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                {bodies.length === 0 && <p id='noResults'>No Results Found!</p>}
            </div>
        </Fragment>
    )
}

export default Search;