import React from 'react'
import { connect } from 'react-redux'
import { updateItem ,deleteItem,editItem} from '../actions'
import Item from './Item';


const ItemsList = ({ items, updateItem ,deleteItem,editItem}) => (
    <ul className={'item-list'}>
        {items.map(item => (
            <Item key={ item.id } {...item} deleteItem={()=>{deleteItem(item.id)}} editItem={(text)=>{editItem(item.id,text)}} onClick={() => updateItem(item.id)}/>
        ))}
    </ul>
)

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    updateItem: id => dispatch(updateItem(id)),
    deleteItem: id => dispatch(deleteItem(id)),
    editItem: (id,text) => dispatch(editItem(id,text))

})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)