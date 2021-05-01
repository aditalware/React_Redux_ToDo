import React from 'react';
import { connect } from 'react-redux';
import { addItems } from '../actions';

const App = ({ qty, dispatch }) => {
    let input, item;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.value.trim()) { return }
        item = {
            text: input.value
        }
        dispatch(addItems(item));
        input.value = "";
    };

    return (
        <div className={'wrapper'}>
            <h1 >TODO'S</h1>
            <form onSubmit={handleSubmit} >
                <div className={'div-wrapper'}>
                    
                    <input type="text" name="name" placeholder="Add your ToDo's here" ref={node => (input = node)} />
                    <button type="submit" value="Add" className="but">
                       <i className="fa fa-plus" style={{fontSize:"15px"}}></i> 

                    </button>
                </div>
            </form>
        </div>
    )
}

export default connect()(App)