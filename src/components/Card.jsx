import React, { Fragment } from 'react'

function Card({ booksResults }) {
    return (
        <Fragment>
            {booksResults?.map(book => (
                <div className="card" key={book.accessInfo.id}>
                    <div className="card__image">
                        <img src={book.volumeInfo.imageLinks.thumbnail} className="card__image" alt="book caver" />
                    </div>
                    <div className="card__body">
                        <h4 className="card__title">{book.volumeInfo.title}</h4>
                        <p className="card__description">{book.volumeInfo.description}</p>
                    </div>
                </div>
            ))}

        </Fragment>
    )
}

export default Card