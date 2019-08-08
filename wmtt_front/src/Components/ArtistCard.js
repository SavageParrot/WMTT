import React from 'react';
import Artistimg from '../img/cosplayer.png';
import './styles/Artists.css'



class ArtistCard extends React.Component {
   render() {
      

      return (
         <div className="card">
            <div className="card-image circle waves-effect waves-block waves-light">
               <img className="activator" src={Artistimg} ></img>
            </div>
            <div className="card-content">
               <span className="card-title activator">{this.props.FullName}<i className="material-icons right">add_circle_outline</i></span>
               <p><a href="#">Visitar Página</a></p>
            </div>
            <div className="card-reveal">
               <span className="card-title">{this.props.FullName}<i className="material-icons right">arrow_drop_down</i></span>
               <p className='cardinfo'>Born Date :</p><p> {this.props.BirthDate}</p>
               <p className='cardinfo'>Start Date :</p><p> {this.props.StartDate}</p>
               <p className='cardinfo'>Email :</p><p> {this.props.Email}</p>
               <p className='cardinfo'>Phone Number :</p><p> {this.props.PhoneNumber}</p>
               <p className='cardinfo'>Address :</p><p> {this.props.Address}</p>
            </div>
         </div>

      );
   }
}


export default ArtistCard;