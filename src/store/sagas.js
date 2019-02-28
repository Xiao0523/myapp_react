function* mySaga() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
  }
  
  export default mySaga;