import React, { Component } from 'react';
import './MainContent.css';

import { Typography } from 'antd';
const { Title } = Typography;

class MainContent extends Component {
    render() {
        return (
            <div className="MainContent">
                <Title>Нажмите на кнопку для загрузки новостей</Title>
            </div>
        );
    }
}

export default MainContent;