import React, { Component, Fragment } from "react";
import api from '../api'
import md5 from 'md5'
import Loader from '../layout/loader'
import { Link } from 'react-router-dom'

class CharacterDetails extends Component {

    state = {
        characterDetails: null
    }

    fetchCharacterDetail = async () => {
        const ts = new Date().getTime()
        const PRIVATEKEY = '43dd0ca283aca67728899ae3a56848828fd9d44e'
        const KEY = 'd9202c8cd3ee37634d9ec9bf58fc4298'
        const hash = md5(ts + PRIVATEKEY + KEY)

        const response = await api.get(`/characters/${this.props.match.params.charId}`, {
            params: {
                apikey: 'd9202c8cd3ee37634d9ec9bf58fc4298',
                ts,
                hash,
            }
        })
        const { id, name, description, thumbnail } = response.data.data.results[0]
        this.setState({
            characterDetails: { id, name, description, imgSrc: `${thumbnail.path}.${thumbnail.extension}` }
        })
    }

    componentDidMount() {
        this.fetchCharacterDetail();
    }

    componentDidUpdate(prevProps) {
        if (this.state.characterDetails !== prevProps.characterDetails) {
            this.fetchCharacterDetail();
        }
      }

    showCharacterDetails = () => {
        if (!this.state.characterDetails) {
            return (<div><Loader /></div>)
        }
        return (
            <Fragment>
                <div className='ui grid'>
                    <div className='ten wide column'>
                        <img alt={this.state.characterDetails.name} src={this.state.characterDetails.imgSrc} style={{ height: '500px', width: '100%' }}></img>
                    </div>
                    <div className='six wide column'>
                        <div className="font title">{this.state.characterDetails.name}</div>
                        {this.state.characterDetails.description ? <div className='description font'>{this.state.characterDetails.description}</div> : <div className='description font'>No description provided for this Marvel Character</div>}
                    </div>
                </div>
                <Link to={`/marvel/character/movie${this.state.characterDetails.id}`}>
                    <div className='customBtn font'>LIST OF SERIES / MOVIES</div>
                </Link>
                <Link to={`/marvel/character/comic${this.state.characterDetails.id}`}>
                    <div className='customBtn font'>LIST OF COMICS</div>
                </Link>
            </Fragment>
        )
    }

    render() {
        return (
            <div>{this.showCharacterDetails()}</div>
        )
    }
}

export default CharacterDetails