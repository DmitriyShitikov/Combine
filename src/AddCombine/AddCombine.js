import React, { Component } from 'react';
import './AddCombine.css';

class AddCombine extends Component {
    render(){
        return(
            <div className = 'addCombine'>
                <div> <input placeholder = 'Страна...' type="text"/>
                    <select>
                        <option>Украина</option>
                        <option>Казахстан</option>
                        <option>Белоруссия</option>
                        <option>Америка</option>
                    </select></div>
                <div> <input placeholder = 'Клиент...' type="text"/></div>
                <div> <input placeholder = 'Шахта...' type="text"/></div>
                <div> <input placeholder = 'Место установки...' type="text"/></div>
                <div> <input placeholder = 'Название комбайна...' type="text"/></div>
                <div> <input placeholder = 'Заводской номер...' type="text"/></div>
                <div> <input placeholder = 'Дата установки...' type="text"/></div>
                <div> <input placeholder = 'Условия гарантии...' type="text"/></div>
                <div> <input placeholder = 'Дата начала эксплуатации...' type="text"/></div>
            </div>
        )
    }
}

export default AddCombine;


