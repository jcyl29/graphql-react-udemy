import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList'

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;

    if (loading) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id}/>
      </div>
    )
  }
}

// How does fetchSong query get the $id variable?

// ReactRouter
//     ↓ (props via :id query param)
// graphql
//     ↓ (props)
// SongDetail

// props in options object the exact same as this.props in <SongDetail>
// notice reactRouter only passes the prop to <SongDetail>, not any of <SongDetail>'s child
// components, like <LyricCreate>
export default graphql(fetchSong, {
  options: (props) => {
    return {
      variables: { id: props.params.id }
    }
  }
})(SongDetail)