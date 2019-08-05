import React from 'react';
import './styles/Categories.css'

class Categories extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col s3'>
                        <div className="collection center">
                            <h4 className='Boxtittle'>Categorias</h4>
                            <a href="#!" className="collection-item itemText">Realismo</a>
                            <a href="#!" className="collection-item itemText">Tradicional</a>
                            <a href="#!" className="collection-item itemText">Acuarela</a>
                            <a href="#!" className="collection-item itemText">Tribal</a>
                        </div>
                    </div>
                    <div className='col s9'>
                        <div className='row'>
                            <div className="col s6">
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img src="https://lorempixel.com/100/190/nature/6">
                                        </img>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img src="https://lorempixel.com/100/190/nature/6">
                                        </img>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col s6">
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img src="https://lorempixel.com/100/190/nature/6">
                                        </img>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img src="https://lorempixel.com/100/190/nature/6">
                                        </img>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Categories;