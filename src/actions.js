export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";




export const remove = (id) => {
  return { type: REMOVE, payload: { id } }
};
export const increase =  id =>  {
    return { type: INCREASE, payload: { id } }
};

export const decrease =  (id, amount) =>  {
  return { type: INCREASE, payload: { id } }
};


export const toggle =  (id, toggle) =>  {
  return { type: TOGGLE_AMOUNT, payload: { id, toggle } }
};

