import React, { Component } from 'react'
import api from '../api'
import md5 from 'md5'
import Loader from '../layout/loader'
import SeriesComDetails from '../Character/seriesComDetails'

class ComicDetails extends Component {

    state = {
        comicsDetails: null
    }

    componentDidMount() {
        this.getComicList();
    }

    getComicList = async () => {
        const ts = new Date().getTime()
        const PRIVATEKEY = '43dd0ca283aca67728899ae3a56848828fd9d44e'
        const KEY = 'd9202c8cd3ee37634d9ec9bf58fc4298'
        const hash = md5(ts + PRIVATEKEY + KEY)

        api.get(`/characters/${this.props.match.params.charId}/comics?apikey=${KEY}&ts=${ts}&hash=${hash}`)
            .then(response => {
                this.setState({ comicsDetails: response.data.data.results })
                console.log(this.state.comicsDetails)
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (!this.state.comicsDetails) {
            return <Loader />
        }
        return (
            <div><SeriesComDetails details={this.state.comicsDetails}/></div>
        )
    }
}

export default ComicDetails