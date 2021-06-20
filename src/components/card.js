import React from 'react';

class Card extends React.Component {
    render(){
        const props = this.props
        return (
            <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5 tc">
                <img src={`https://robohash.org/${props.name}?200x200`} alt={`${props.id}`} />
                <div className="tc" >
                    <h3>name: {props.name} </h3>
                    <p>email: {props.email} </p>
                </div>
            </div>
        )
    }
}

export default Card