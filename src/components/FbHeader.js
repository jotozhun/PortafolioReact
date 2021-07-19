import { Component } from 'react';
import logofb from '../assets/images/logofb.png';
import 'antd/dist/antd.css';
import {
    HomeOutlined,
    TeamOutlined,
    GlobalOutlined,
    AppstoreOutlined,
    MessageFilled,
    BellFilled
} from '@ant-design/icons';

class FbHeader extends Component {
    render() {
        return (
            <header className="navbar">
                <div className="searcher">
                    <img className="logo" src={logofb} />
                    <input type="search" placeholder="Search Facebook" />
                </div>
                <div className="options">
                    <div>
                        <HomeOutlined className="navIcon" />
                    </div>
                    <div>
                        <TeamOutlined className="navIcon" />
                    </div>
                    <div>
                        <GlobalOutlined className="navIcon" />
                    </div>
                </div>
                <div className="config">
                    <div>
                        <AppstoreOutlined className="navIcon" />
                    </div>
                    <div>
                        <MessageFilled className="navIcon" />
                    </div>
                    <div>
                        <BellFilled className="navIcon" />
                    </div>
                </div>
            </header>
        );
    }
}

export default FbHeader;