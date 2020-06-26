import React, { Component } from "react";

import img from '../../assets/comingsoon/comingsoonfood.gif'

class ComingSoonFood extends Component {
    render() {
        return (

            <div className="container m-10 p-0 ruby" >
                <div className="row">
                    <div className="col" style={{paddingLeft:"250px"}}>
                        <div >
                        <img src={img} style={{height:"550px"}}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ComingSoonFood;