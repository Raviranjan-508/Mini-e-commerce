
//ACTION
export const GET_PRODUCTS = "GET_PRODUCTS";


//ACTION CREATORS
export const getProducts = () => async (dispatch) => {
    let data = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=100"
    );
    data = await data.json();
    console.log(data.data)
    dispatch({
      type: GET_PRODUCTS,
      payload: data.data,
    });
  };