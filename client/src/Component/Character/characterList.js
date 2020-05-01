import React, { Component } from "react";
import api from '../api';
import md5 from 'md5'
import { Grid } from 'semantic-ui-react'
import CharacterCard from './characterCard'
import Loader from '../layout/loader'
import { Link } from 'react-router-dom'
class CharacterList extends Component {

    constructor() {
        super()
        this.state = {
            characters: []
        }
    }

    fetchCharacterList = async () => {
        const ts = new Date().getTime()
        const PRIVATEKEY = '43dd0ca283aca67728899ae3a56848828fd9d44e'
        const KEY = 'd9202c8cd3ee37634d9ec9bf58fc4298'
        const hash = md5(ts + PRIVATEKEY + KEY)

        const response = await api.get(`/characters`, {
            params: {
                apikey: 'd9202c8cd3ee37634d9ec9bf58fc4298',
                ts,
                hash,
                offset: this.props.match.params.pageNo * 10,
                limit: 20
            }
        })
        this.setState({ characters: response.data.data.results })
    }
    componentDidMount() {
        this.fetchCharacterList()
    }

    showLayout = () => {
        return (
            <Grid columns='five' divided>
                <Grid.Row>
                    {
                        this.state.characters.map(hero => {
                            return (
                                <Grid.Column>
                                    <CharacterCard
                                        id={hero.id}
                                        name={hero.name}
                                        image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                                    />
                                </Grid.Column>
                            )
                        })
                    }
                </Grid.Row>
                }
            </Grid>
        )

    }

    render() {
        if (this.state.characters.length === 0) {
            return (<div><Loader /></div>)
        }
        return (
            <div>
                <div>
                    {this.showLayout()}
                </div>
                <Link to={`/marvel/page${this.props.match.params.pageNo * 1 - 1}`}>
                    <button className="ui button font navButton" onClick={() => {
                        this.props.match.params.pageNo = this.props.match.params.pageNo * 1 - 1
                        this.fetchCharacterList()
                    }}>previous</button>
                </Link>
                <Link to={`/marvel/page${this.props.match.params.pageNo * 1 + 1}`}>
                    <button className="ui button font navButton" style={{float: 'right'}} onClick={() => {
                        this.props.match.params.pageNo = this.props.match.params.pageNo * 1 + 1
                        this.fetchCharacterList()
                    }}>next</button>
                </Link>
                }
            </div>


        )
    }
}

export default CharacterList