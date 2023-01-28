export default {
    SHOW_BAR_SEARCH (state) {
      return (state.showBar = !state.showBar)
    },
    ACTIVE_REV_INNER (state) {
      return (
        (state.revInner = !state.revInner),
        (state.revInnerTwo = false)
      )
    },
    ACTIVE_REV_INNER_TWO (state) {
      return (
        (state.revInnerTwo = !state.revInnerTwo),
        (state.revInner = false)
      )
    },
    ACTIVE_REV_INNER_THREE (state) {
      return (
        (state.revInnerThree = !state.revInnerThree),
        (state.revInner = false)
      )
    },
    SHOW_BAR_SEARCH_MAIN_NAV (state) {
      return (state.showbarMain = !state.showbarMain)
    },
  
    // Object Load
    UPDATE_VALUE (state, payload) {
      // .id3 && .id4 set state value changing
      const left = payload.id3
      const right = payload.id4
      // .id1 || .id2 set new values
      state[left] = payload.id1
      state[right] = payload.id2
    },
    UPDATE_CANVAS_VALUE (state, payload) {
      // .id2 set state value changing
      const newWidth = payload.id2
      // .id1  new values
      state[newWidth] = payload.id1
    }
  }
  