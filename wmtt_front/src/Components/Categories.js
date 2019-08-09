import React from 'react';
import './styles/Categories.css';
import axios from 'axios';
class Categories extends React.Component {
    constructor(){
        super();

        this.fetchArtists = this.fetchArtists.bind(this);
    }
    
    fetchArtists(idCategoria, element){
        var checkbox = document.getElementById(element);        
        if (checkbox.checked) {
            axios({
                url: `https://localhost:44376/api/ArtistCategory/getArtists/${idCategoria}`,
                method: `get`
            }).then(result => {
                console.log(result.data.list);
                this.props.newSearch(result.data);
            }).catch(error => {
            });
        }
    }

    fetchAllArtists(element){
        var checkbox = document.getElementById(element);        
        if (checkbox.checked) {
            axios({
                url: `https://localhost:44376/api/Artist`,
                method: `get`
            }).then(result => {
                console.log(result.data.list);
                this.props.newSearch(result.data);
            }).catch(error => {
            });
        }
    }

    render() {

        return (
            <div className="categoriesBox">
                <form className='categories' action="#">
                    <p>
                        <label>
                            <input name="group1" id='All' type="radio" defaultChecked onClick={() => this.fetchAllArtists("All")}/>
                            <span>TODAS</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" id="Realism" type="radio" onClick={() => this.fetchArtists(1, "Realism")}/>
                            <span>Realismo</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" id='Watercolor' type="radio" onClick={() => this.fetchArtists(2, "Watercolor")}/>
                            <span>Acuarela</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" id='Traditional' type="radio" onClick={() => this.fetchArtists(3, "Traditional")}/>
                            <span>Tradicional</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" id='Tribal'type="radio"  type="radio" onClick={() => this.fetchArtists(4, "Tribal")}/>
                            <span>Tribal</span>
                        </label>
                    </p>
                </form>
            </div>
        )


    }
}
export default Categories;