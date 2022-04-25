import React from 'react'

function EmptySearchResults({ searchText }) {
    return (
        <p>{searchText} not found :(</p>
    )
}

export { EmptySearchResults }