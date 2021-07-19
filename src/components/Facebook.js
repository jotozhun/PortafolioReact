import { Component, Fragment } from 'react'
import "../assets/css/facebook.css";
import FbHeader from './FbHeader';
import FbPublications from './FbPublications';
import { TeamOutlined} from '@ant-design/icons';

class Facebook extends Component {
    render() {
        return (
            <Fragment>
                <FbHeader />
                <hr/>
            <div className="bodyFb">
                <div className="body20 left-body">
                    <div>
                        
                        <p>Joel Torres</p>
                    </div>
                    <div>
                        <p>COVID-19 Information Center</p>
                    </div>
                    <div>
                        <p>Friends</p>
                    </div>
                    <div>
                        <p>Saved</p>
                    </div>
                    <div>
                        <p>Most Recent</p>
                    </div>
                    <div>
                        <p>Recent Ad Activity</p>
                    </div>
                    <div>
                        <p>Groups</p>
                    </div>
                    <div>
                        <p>Marketplace</p>
                    </div>
                    <div>
                        <p>Watch</p>
                    </div>
                    <div>
                        <p>Events</p>
                    </div>
                     
                </div>
                <div className="body39">
                    <FbPublications/>
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
                </div>
                <div className="body24">
                    <div className="flex space-between stretch20">
                        <h3>Contacts</h3>
                        <div className="flex">
                            <TeamOutlined/>
                            <TeamOutlined/>
                            <TeamOutlined/>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <TeamOutlined/>
                            <p>Nombre de Usuario</p>
                        </li>
                        <li>
                            <TeamOutlined/>
                            <p>Nombre de Usuario</p>
                        </li>
                        <li>
                            <TeamOutlined/>
                            <p>Nombre de Usuario</p>
                        </li>
                        <li>
                            <TeamOutlined/>
                            <p>Nombre de Usuario</p>
                        </li>
                        <li>
                            <TeamOutlined/>
                            <p>Nombre de Usuario</p>
                        </li>
                        <li>
                            <TeamOutlined/>
                            <p>Nombre de Usuario</p>
                        </li>
                        <li>
                            <TeamOutlined/>
                            <p>Nombre de Usuario</p>
                        </li>
                        <li>
                            <TeamOutlined/>
                            <p>Nombre de Usuario</p>
                        </li>
                        <li>
                            <TeamOutlined/>
                            <p>Nombre de Usuario</p>
                        </li>
                    </ul>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Facebook;