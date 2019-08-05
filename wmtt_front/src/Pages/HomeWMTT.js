import React from 'react';
import './styles/HomeWMTT.css'
import '../Components/styles/Artists.css'
import Navbar from '../Components/Navbar';
import Artists from '../Components/Artists';
import Categories from '../Components/Categories';
import 'materialize-css'

class HomeWMTT extends React.Component {
    render () {
        return (
            <div className=''>
                <Navbar />
                <div id='inicio' className='homeview'>
                    <div className='Homebox'>
                        <div className='Homeimg'>
                            <h1 className='Hometext'>We Make Tattoos!</h1>    
                        </div>
                    </div>
                    <div id='artistas' className='Artistsbox'>
                        <Artists />
                    </div>
                    <div id='categorias' className='Categoriesbox'>
                        <Categories />
                    </div>

                </div>
            </div>
        )
    }
}

export default HomeWMTT;