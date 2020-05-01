import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import SearchModal from './SearchModal';
import GoogleAuth from '../GoogleAuth.js'
import heart from '../../assets/heart.png'

class Header extends Component {
    state = {
        openModal: false
    }

    handleInputChange = (isOpen) => {
        this.setState({ openModal: isOpen })
    }

    render() {
        console.log(this.state.openModal, 'this.state.openModal')
        return (
            <div className='headerbar'>
                <Link to='/marvel/page0'>
                    <div className='logo font'>MARVEL</div>
                </Link>

                <div className="ui icon input searchBar">
                    <input type="text"
                        placeholder="Search your character"
                        ref={this.inputRef}
                        onChange={()=>this.handleInputChange(true)}
                    />
                    <i className="inverted circular search link icon"></i>
                </div>
                <Link to='/marvel/comments'>
                    <img alt="comments" className="heart" src={heart}></img>
                </Link>
                <GoogleAuth />
                {
                    this.state.openModal ? ReactDOM.createPortal(<Fragment>
                        <SearchModal
                            handlemodal={this.handleInputChange}
                        /></Fragment>, document.querySelector('#modal')) : null
                }
                {/* {this.state.result.length > 0 ? this.searchListData() : null} */}
            </div>
        )
    }
}

export default Header