import React, { Component } from 'react';
import {UserContext} from '../UserContext';
import axios from 'axios';
import './Main.css';

class Main extends Component {
    static contextType = UserContext;
    render(){
        return(
            <div className = 'mainContainer'>
                <button className='btn_logout' type="submit" onClick={this.context.onLogout}>ВЫХОД</button>
                <div className = 'Search'>
                    <input className = "input-search" type="text" placeholder = 'Search ...'/>
                    <button className = 'btnAddCombine'>Добавить Комбайн</button>
                </div>
                <div className = 'titleTable'>
                    <div className = 'column'>Страна</div>
                    <div className = 'column'>Клиент</div>
                    <div className = 'column'>Шахта</div>
                    <div className = 'column'>Место установки</div>
                    <div className = 'column'>Название комбайна</div>
                    <div className = 'column'>Заводской номер</div>
                    <div className = 'column'>Дата установки</div>
                    <div className = 'column'>Условия гарантии</div>
                    <div className = 'column'>Дата начала эксплуатации</div>
                    <div className = 'column'>Мониторинг</div>
                    <div className = 'column'>Сервис</div>
                </div>
                <div className = 'rawTable'>
                    <div className = 'column'>Украина</div>
                    <div className = 'column'>"ДТЭК"</div>
                    <div className = 'column'>"Засядько"</div>
                    <div className = 'column'>"Забой № 5"</div>
                    <div className = 'column'>"П-110-01"</div>
                    <div className = 'column'>4111145</div>
                    <div className = 'column'>27.10.2015</div>
                    <div className = 'column'>Гарантийное соглашение форма 1</div>
                    <div className = 'column'>1.11.2015</div>
                    <div className = 'column'><button>Мониторинг</button></div>
                    <div className = 'column'><button>Сервис</button></div>
                </div>
                <div className = 'rawTable'>
                    <div className = 'column'>Казахстан</div>
                    <div className = 'column'>"ВОСТОК"</div>
                    <div className = 'column'>"Калинина"</div>
                    <div className = 'column'>"Забой № 5"</div>
                    <div className = 'column'>"П-110-01"</div>
                    <div className = 'column'>4111145</div>
                    <div className = 'column'>27.10.2015</div>
                    <div className = 'column'>Гарантийное соглашение форма 1</div>
                    <div className = 'column'>1.11.2015</div>
                    <div className = 'column'><button>Мониторинг</button></div>
                    <div className = 'column'><button>Сервис</button></div>
                </div>
            <div className = 'rawTable'>
                <div className = 'column'>Белорусия</div>
                <div className = 'column'>"АГНО"</div>
                <div className = 'column'>"Алексеевка"</div>
                <div className = 'column'>"Забой № 5"</div>
                <div className = 'column'>"П-110-01"</div>
                <div className = 'column'>4111145</div>
                <div className = 'column'>27.10.2015</div>
                <div className = 'column'>Гарантийное соглашение форма 1</div>
                <div className = 'column'>1.11.2015</div>
                <div className = 'column'><button>Мониторинг</button></div>
                <div className = 'column'><button>Сервис</button></div>
            </div>
            <div className = 'rawTable'>
                <div className = 'column'>Китай</div>
                <div className = 'column'>"ОПАК"</div>
                <div className = 'column'>"Старобельск"</div>
                <div className = 'column'>"Забой № 5"</div>
                <div className = 'column'>"П-110-01"</div>
                <div className = 'column'>4111145</div>
                <div className = 'column'>27.10.2015</div>
                <div className = 'column'>Гарантийное соглашение форма 1</div>
                <div className = 'column'>1.11.2015</div>
                <div className = 'column'><button>Мониторинг</button></div>
                <div className = 'column'><button>Сервис</button></div>
            </div>
                <div className = 'rawTable'>
                    <div className = 'column'>Белорусия</div>
                    <div className = 'column'>"АГНО"</div>
                    <div className = 'column'>"Алексеевка"</div>
                    <div className = 'column'>"Забой № 5"</div>
                    <div className = 'column'>"П-110-01"</div>
                    <div className = 'column'>4111145</div>
                    <div className = 'column'>27.10.2015</div>
                    <div className = 'column'>Гарантийное соглашение форма 1</div>
                    <div className = 'column'>1.11.2015</div>
                    <div className = 'column'><button>Мониторинг</button></div>
                    <div className = 'column'><button>Сервис</button></div>
                </div>
                <div className = 'rawTable'>
                    <div className = 'column'>Китай</div>
                    <div className = 'column'>"ОПАК"</div>
                    <div className = 'column'>"Старобельск"</div>
                    <div className = 'column'>"Забой № 5"</div>
                    <div className = 'column'>"П-110-01"</div>
                    <div className = 'column'>4111145</div>
                    <div className = 'column'>27.10.2015</div>
                    <div className = 'column'>Гарантийное соглашение форма 1</div>
                    <div className = 'column'>1.11.2015</div>
                    <div className = 'column'><button>Мониторинг</button></div>
                    <div className = 'column'><button>Сервис</button></div>
                </div>

            </div>
        )
    }
}

export default Main;