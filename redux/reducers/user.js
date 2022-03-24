const initialState = {
  isError: false,
  isLoading: false,
  token: null,
  errMessage: null,
  dataUser: {},
  editProfile: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE': {
      const newState = {
        dataUser: action.payload
      }
      return { ...state, ...newState }
    }
    case 'EDIT_PROFILE': {
      state.editProfile = true;
      return { ...state };
    }
    case 'USER_ERROR': {
      return { ...state, isError: true, errMessage: action.payload }
    }
    case 'USER_CLEAR_STATE': {
      return {
        isError: false,
        isLoading: false,
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default user;
