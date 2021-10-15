import React from "react";
import './GifCard.css';

    class CardHeader extends React.Component {
        render() {
        const { image } = this.props;
        let style = { 
            backgroundImage: 'url(' + image + ')',
        };
        return (
            <header style={style} id={image} className="card-header">
            <h4 className="cardTitle">Character Name</h4>
            </header>
        )
        }
    }
    
    class Button extends React.Component {
        render() {
        return (
            <button className="button button-primary">
            <i className="fa fa-chevron-right"></i> Find out more
            </button>
        )
        }
    }
    
    class CardBody extends React.Component {
        render() {
        return (
            <div className="card-body">
            <p className="date">March 20 2015</p>
            <h2>{this.props.title}</h2>
            <p className="body-content">{this.props.text}</p>
            <Button />
            </div>
        )
        }
    }
    
    class GifCard extends React.Component {
        render() {
        return (
            <article className="card">
            <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
            <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
            </article>
        )
        }
    }


export default GifCard;