import React from 'react';
import { Row, Col, Layout } from 'antd';
import {  } from 'antd';
import "antd/dist/antd.css";
import './HeaderTop.css';

const { Header} = Layout;

const HeaderTop = (props) => {
    return (
        <Layout>
            <Header className="header">
                <div className="container">
                    <Row type="flex" justify="space-between">
                        <Col>
                            <a href="#" className="headerLogo">
                                NewsFeed
                            </a>
                        </Col>
                        <Col>
                            <div className="headerCounter">{props.counter}</div>
                        </Col>
                    </Row>
                </div>
            </Header>
        </Layout>
    );
};

export default HeaderTop; 