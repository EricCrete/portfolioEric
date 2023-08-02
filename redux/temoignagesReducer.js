// redux/temoignagesReducer.js
const initialState = {
    temoignages: [],
  };
  
  const temoignagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'AJOUTER_TEMOIGNAGE':
        return {
          ...state,
          temoignages: [...state.temoignages, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default temoignagesReducer;