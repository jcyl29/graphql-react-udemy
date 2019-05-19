import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'; // the glue layer between React and the datasource from Apollo
import { Link } from 'react-router';
import arbitraryQueryName from '../queries/fetchSongs'

class SongList extends Component {
  onSongDelete(id) {
    this.props.mutate({ variables: { id } })
      .then(() => {
        // refetch re-runs all the queries associated with the SongList component
        // in this case, it is fetchSongs
        this.props.data.refetch();
      });
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>{title}</Link>

          <i className="material-icons" onClick={() => this.onSongDelete(id)}>delete</i>
        </li>
      )
    })
  }

  render() {
    // this.props.data is provided by react-apollo.graphql
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

// this defines a query only
// it is not executed
const songTitlequery = gql`
  {
    songs {
      id
      title
    }
  }
`;

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(arbitraryQueryName)(SongList)
)