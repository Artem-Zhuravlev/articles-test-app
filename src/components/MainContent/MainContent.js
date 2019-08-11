import React, { Component } from 'react';
import './MainContent.css';
import Article from '../Article/Article';
 
import { Typography, Layout, Col, Button } from 'antd';
const { Title } = Typography;

class MainContent extends Component {
    state = {
        iconLoading: false,
        articles: [],
        counter: 0
        
    }

    getData = () => {
        this.setState({
            iconLoading: true
        });
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=4e7121529a4c455da11f2be532d1042f')
            .then(res=>{
                return res.json();
            }).then((item)=>{
                this.setState({
                    iconLoading: false,
                    articles: item.articles
                });
                console.log(item);
            }).catch(error => {
                console.log(error, 'error boundary');
        });
    }

    handleClick = () => {  
        this.setState({
            iconLoading: true,
        });

        setTimeout(() => {
            this.setState({iconLoading: false,});
        }, 1000);

        this.getData();
    }

    render() {
        return (
            <Layout className="MainContent">
                <div className="container">
                    <Col span={24}>
                        {this.state.articles.length === 0 ? 
                            <>
                            <Title className="MainContent__title">
                                Нажмите на кнопку для загрузки новостей
                            </Title>
                            <Button 
                                className="MainContent__btn"
                                shape="round" 
                                icon="download" 
                                size="large"
                                loading={this.state.iconLoading}
                                onClick = {this.getData}
                                >Загрузить</Button>
                            </>

                            : 

                            <div className="Articles">
                                {
                                    this.state.articles.map((item, i)=>{
                                        return (
                                            <Article 
                                                pic={item.urlToImage} 
                                                title={item.title} 
                                                desc={item.content}/>
                                        )
                                    })
                                }
                            </div>
                        }
                        
                    </Col>

                   
                </div>
            </Layout>
        );
    }
}

export default MainContent;