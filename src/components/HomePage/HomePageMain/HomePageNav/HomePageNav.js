import React from 'react';
import "./HomePageNav.css";

class HomePageNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <nav id="home-nav-con">
              <img src="./logo.svg"/>
                <ul id="home-nav-items">
                    <li><i class="fas fa-bell"></i></li>
                    <li> <i class="fas fa-user-circle"></i></li>
                    <button>Appointments</button>

                </ul>
            </nav>

        )
    }
}

export default HomePageNav;