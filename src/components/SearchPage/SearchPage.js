import React, { Component } from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom'
import PropTypes from 'prop-types'
import './SearchPage.css';
import { Link } from 'react-router-dom'


const searchClient = algoliasearch('Q025FPI1GF', '2ce991b632f218f61a2912c522587216');

class SearchPage extends Component {
  render() {
    return (
        <div className="container">
            <h2>Select your favorite meme</h2>
            <InstantSearch searchClient={searchClient} indexName="memes">
                <div className="search-panel">
                    <div className="search-panel__results">
                        <SearchBox
                        className="searchbox"
                        translations={{
                            placeholder: 'cat',

                        }}
                        />
                        <Hits hitComponent={Hit} />

                        <div className="pagination">
                        <Pagination />
                        </div>
                    </div>
                </div>
          </InstantSearch>
        </div>
    )
  }
}

function Hit(props) {
  return (
    <article className='memeResult'>
        <img className='hit-img' src={props.hit.url} alt={props.hit.name}/>
        <p>{props.hit.name}</p>
        <Link className='editButton' to={`/memes/${props.hit.id}`}>
            <i className="far fa-edit"></i>
        </Link>
    </article>
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
}

export default SearchPage