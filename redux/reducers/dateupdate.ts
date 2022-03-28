export const dateUpdate = (state = new Date().toISOString(), action) => {
    switch (action.type) {
        case 'UPDATE_DATE':
            return action.payload;
        default:
            return state;
    }
}