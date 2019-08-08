import React from 'react';
import Artistimg from '../img/Grupo101.png';
import './styles/Artists.css'



class ArtistCard extends React.Component {
   render() {
      

      return (
         <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
               <img className="activator" src={Artistimg} ></img>
            </div>
            <div className="card-content">
               <span className="card-title activator grey-text text-darken-4">{this.props.FullName}<i className="material-icons right">more_vert</i></span>
               <p><a href="#">Page link</a></p>
            </div>
            <div className="card-reveal">
               <span className="card-title grey-text text-darken-4">{this.props.FullName}<i className="material-icons right">close</i></span>
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