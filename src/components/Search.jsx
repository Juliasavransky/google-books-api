import React, { Fragment } from 'react';



function Search({
    handleChange,
    handleSubmit,
    book, }) {


    return (
        <Fragment>
            <form
                onSubmit={handleSubmit}
                className="form"
            >
                <input
                    className="form-input"
                    onChange={handleChange}
                    required
                    autoComplete='off'
                    type="text"
                    placeholder="Search for a Book"
                    id="search"
                    value={book}
                />
                <button id="search" type="submit" className="form-btn">Search</button>
            </form>
        </Fragment>
    )
}

export default Search