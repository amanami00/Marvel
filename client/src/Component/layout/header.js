import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SearchModal from './searchModal'

class Header extends Component {
    // constructor(props) {
    //     super(props)

    //     // Create the ref
    //     this.inputRef = React.createRef()
    // }

    // state = {
    //     query: '',
    //     result: []
    // }

    // handleInputChange = e => {
    //     e.preventDefault()
    //     console.log(this.inputRef.current.value)
    //     this.setState({
    //         query: this.inputRef.current.value
    //     })
    //     this.getSearchData();
    // }

    // getSearchData = async () => {
    //     const ts = new Date().getTime()
    //     const PRIVATEKEY = '43dd0ca283aca67728899ae3a56848828fd9d44e'
    //     const KEY = 'd9202c8cd3ee37634d9ec9bf58fc4298'
    //     const hash = md5(ts + PRIVATEKEY + KEY)

    //     const response = await api.get(`/characters`, {
    //         params: {
    //             apikey: 'd9202c8cd3ee37634d9ec9bf58fc4298',
    //             ts,
    //             hash,
    //             nameStartsWith: this.state.query
    //         }
    //     })
    //     this.setState({ result: response.data.data.results })
    //     console.log(this.state.result, 'data')
    // }

    // searchListData = () => {
    //     return (
    //         this.state.result.map(character => {
    //             return (
    //                 <div class="ui celled list searchList font">
    //                     <div class="item">
    //                         <div class="content">
    //                             <div class="header">{character.name}</div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         })

    //     )
    // }

    render() {
        return (
            <div className='headerbar'>
                <Link to='/marvel/page0'>
                    <div className='logo font'>MARVEL</div>
                </Link>
            
                <div class="ui icon input searchBar">
                    <input type="text" 
                    placeholder="Search your character" 
                    // ref={this.inputRef}
                    // onChange={this.handleInputChange}
                    onClick={()=><SearchModal/>}
                    />
                        <i class="inverted circular search link icon"></i>
                    </div>
                    {/* {this.state.result.length > 0 ? this.searchListData() : null} */}
                </div>
        )
    }
}

export default Header