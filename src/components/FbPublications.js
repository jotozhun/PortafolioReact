import { Component, Fragment } from 'react';

class FbPublications extends Component{

    render()
    {
        return (
            <Fragment>
                <form className="flex form-publication">
                    <textarea placeholder="What's on your mind, Joel?"></textarea>
                    <input type="submit"/>
                </form>
                <div className="publication">
                        <div>
                            Usuario
                        </div>
                        <div>
                            <p>Publicacion mas bergas xd</p>
                        </div>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSt9xMHox47dLwQKVaOJjCnzivYyZkWrCIw&usqp=CAU" alt="el bicho"/>
                        </div>
                    </div>
            </Fragment>
        );
    }
}

export default FbPublications;