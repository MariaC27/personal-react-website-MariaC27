
import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import {Button} from "../Button"

//the child component to the imageGallery
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }

    changePage = () => {
        if (this.props.currPage){
            this.props.seeGallery();
        }
        else{
            //this.props.seeMain();
        }
        
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                
                                <a target="_blank" className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })} 

                </ul>
               
                <Button onClick={this.changePage}>Gallery</Button>
                 
            </nav>
         
        )
    }
}

export default Navbar