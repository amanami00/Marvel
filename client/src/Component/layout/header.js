import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SearchModal from './searchModal';
import GoogleAuth from '../GoogleAuth.js'
import heart from '../../assets/heart.png'

class Header extends Component {
    render() {
        return (
            <div className='headerbar'>
                <Link to='/marvel/page0'>
                    <div className='logo font'>MARVEL</div>
                </Link>

                <div className="ui icon input searchBar">
                    <input type="text"
                        placeholder="Search your character"
                        ref={this.inputRef}
                        onChange={this.handleInputChange}
                        onClick={() => <SearchModal />}
                    />
                    <i className="inverted circular search link icon"></i>
                </div>
                <Link to='/marvel/comments'>
                    <img alt="comments" className="heart" src={heart}></img>
                </Link>
                <GoogleAuth/>
                {/* {this.state.result.length > 0 ? this.searchListData() : null} */}
            </div>
        )
    }
}

export default Header