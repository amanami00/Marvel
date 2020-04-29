import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import api from '../api'
import md5 from 'md5'

class SearchModal extends Component {
    constructor(props) {
        super(props)
        // Create the ref
        this.inputRef = React.createRef()
    }

    state = {
        query: '',
        result: []
    }

    handleInputChange = e => {
        e.preventDefault()
        this.setState({
            query: this.inputRef.current.value
        })
        this.getSearchData();
    }

    getSearchData = async () => {
        const ts = new Date().getTime()
        const PRIVATEKEY = '43dd0ca283aca67728899ae3a56848828fd9d44e'
        const KEY = 'd9202c8cd3ee37634d9ec9bf58fc4298'
        const hash = md5(ts + PRIVATEKEY + KEY)

        const response = await api.get(`/characters`, {
            params: {
                apikey: 'd9202c8cd3ee37634d9ec9bf58fc4298',
                ts,
                hash,
                nameStartsWith: this.state.query
            }
        })
        this.setState({ result: response.data.data.results })
    }


    render() {
        return (ReactDOM.createPortal(
            <div class="ui icon input" style={{width:'100%'}}>
                <input type="text"
                    placeholder="Search your character"
                    ref={this.inputRef}
                    onChange={this.handleInputChange}
                />
                <i class="inverted circular search link icon"></i>
            </div>,
            document.querySelector('#modal')
        )
        )
    }

}

export default SearchModal;