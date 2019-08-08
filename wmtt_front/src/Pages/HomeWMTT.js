import React from 'react';
import './styles/HomeWMTT.css'
import '../Components/styles/Artists.css'
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';
import 'materialize-css'
import ArtistCard from '../Components/ArtistCard';


class HomeWMTT extends React.Component {
    state = {
        loading: true,
        error: null,
        data: {
            idElement: null,
            errorMessage: null,
            succeed: true,
            response: null,
            list: [],
        },
        nextPage: 1
    };

    componentDidMount() {
        this.fetchArtists();
    }

    fetchArtists = async () => {
        this.setState({ loading: true, error: null });
        try {
            const response = await fetch(
                `https://localhost:44376/api/Artist`, { mode: 'cors' }
            );

            const dataReceived = await response.json();
            console.log(dataReceived);

            this.setState({
                loading: false,
                data: {
                    idElement: dataReceived.idElement,
                    errorMessage: dataReceived.errorMessage,
                    succeed: dataReceived.succeed,
                    response: dataReceived.response,
                    list: dataReceived.list,
                }
            });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        return (
            <div className='Background'>
                <Navbar />
                <div id='inicio' className='homeview'>
                    <div className='Homebox'>
                        <div className='Homeimg'>
                            <h1 className='Hometext'>We Make Tattoos!</h1>
                        </div>
                    </div>
                    <div className='Homespacer'></div>
                    <div id='artistas' className='Artistsback'>
                        <div className='tittle'>
                            <h1 className='Boxtittle'>Artistas</h1><br />
                        </div>
                        <div className='container'>
                            <Categories />
                        </div>
                        <div className='Flexbox'>
                            <ul className="row sidesPadding">
                                <li className="" >
                                    {this.state.data.list.map(Artist => (
                                        <div className='CardSize col s12 m4 l4'>
                                            <ArtistCard
                                                FullName={Artist.FullName}
                                                BirthDate={Artist.BirthDate}
                                                StartDate={Artist.StartDate}
                                                Email={Artist.Email}
                                                PhoneNumber={Artist.PhoneNumber}
                                                Address={Artist.Address}
                                            />
                                        </div>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='Homespacer'></div>
                    {/* <div id='categorias' className='Categoriesbox'>
                        <Categories />
                    </div> */}
                </div>
            </div>
        )
    }
}

export default HomeWMTT;