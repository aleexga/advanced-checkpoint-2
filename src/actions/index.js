export const LOAD_TEST = "LOAD_TEST";

export function loadMyTest() {
  return (dispatch) => {
    dispatch({
      type: LOAD_TEST,
    });
    fetch("/")
    .then((response) => {
      return response.json();
    })
    .then((movies) => {
      dispatch(someTest(movies));
    })
    .catch((err) =>
      dispatch("Error :", err)
    );
  };
}
