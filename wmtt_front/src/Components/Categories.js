import React from 'react';
import './styles/Categories.css';
import M from 'materialize-css';

class Categories extends React.Component {
    render() {

        return (
            <div class="categoriesBox">
                <form className='categories' action="#">
                    <p>
                        <label>
                            <input type="checkbox"/>
                            <span>TODAS</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Realismo</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Acuarela</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Tradicional</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Tribal</span>
                        </label>
                    </p>
                </form>
            </div>
        )


    }
}
export default Categories;