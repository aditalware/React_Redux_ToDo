let incrementId = 0;

export const addItems = item => ({
    type: 'ADD_ITEMS',
    id: incrementId++,
    text: item.text
});

export const updateItem = id => ({
    type: 'UPDATE_ITEM',
    id
});

export const deleteItem = id => ({
    type: 'DELETE_ITEM',
    id
});

export const editItem = (id,text) => {
    return({
        type: 'EDIT_ITEM',
        id,
        text
    });
}