import React from 'react';
import card1 from './assets/1.jpg';
import card2 from './assets/2.jpg';
import card3 from './assets/3.jpg';
import card4 from './assets/4.jpg';
import card5 from './assets/5.jpg';
import card6 from './assets/6.jpg';
import card7 from './assets/7.jpg';
import card8 from './assets/8.jpg';
import card9 from './assets/9.jpg';
function Content(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card-image">
                        <img src={card1}/>
                        </div>
                        <div className="card-info">
                        <div className="title">MacBook</div>
                            <div className="card-rating">*****</div>
                            <div className="price">100000 $</div>
                            <div className="card-button">добавить в корзину</div>
                        </div>

                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-image">
                        <img src={card2}/>
                        </div>
                        <div className="card-info">
                            <div className="title">Galaxy</div>
                            <div className="card-rating">****</div>
                            <div className="price">35999 $</div>
                            <div className="card-button">добавить в корзину</div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-image">
                        <img src={card3}/>
                        </div>
                        <div className="card-info">
                            <div className="title">Скутер</div>
                            <div className="card-rating">***</div>
                            <div className="price">65500 $</div>
                            <div className="card-button">добавить в корзину</div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-image">
                        <img src={card4}/>
                        </div>
                        <div className="card-info">
                            <div className="title">Монитор Samsung</div>
                            <div className="card-rating">*****</div>
                            <div className="price">90000 $</div>
                            <div className="card-button">добавить в корзину</div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-image">
                        <img src={card5}/>
                        </div>
                        <div className="card-info">
                            <div className="title">Респераторная маска
                            </div>
                            <div className="card-rating">*****</div>
                            <div className="price">100000 $</div>
                            <div className="card-button">добавить в корзину</div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-image">
                            <img src={card6}/>
                        </div>
                        <div className="card-info">
                            <div className="title">Стиральная машина
                            </div>
                            <div className="card-rating">*****</div>
                            <div className="price">100000 $</div>
                            <div className="card-button">добавить в корзину</div>
                        </div>

                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-image">
                            <img src={card7}/>
                        </div>
                        <div className="card-info">
                            <div className="title">Белый холодильник
                            </div>
                            <div className="card-rating">****</div>
                            <div className="price">43100 $</div>
                            <div className="card-button">добавить в корзину</div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-image">
                            <img src={card8}/>
                        </div>
                        <div className="card-info">
                            <div className="title">Колонка</div>
                            <div className="card-rating">**</div>
                            <div className="price">3000 $</div>
                            <div className="card-button">добавить в корзину</div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-image">
                            <img src={card9}/>
                        </div>
                        <div className="card-info">
                            <div className="title">Наушники</div>
                            <div className="card-rating">*****</div>
                            <div className="price">1000 $</div>
                            <div className="card-button">добавить в корзину</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Content;