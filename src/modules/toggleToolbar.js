const initialState = {
  toolbarIsOpen: true,
  jobsbarIsOpen: true,
  topmenuIsOpen: false,
  tbCoord: {x:0, y:0},
  jbCoord: {x:0, y:0},
  toolbarTransition: 'none',
  jobsbarTransition: 'none',
  topmenuTransition: 'all ease .5s'
}

const TB_TOGGLE_OPEN = 'toolbar/TB_TOGGLE_OPEN'
const TB_TOGGLE_CLOSE = 'toolbar/TB_TOGGLE_CLOSE'
const CHANGE_TB_COORD = 'toolbar/CHANGE_TB_COORD'
const JB_TOGGLE_OPEN = 'jobsbar/JB_TOGGLE_OPEN'
const JB_TOGGLE_CLOSE = 'jobsbar/JB_TOGGLE_CLOSE'
const CHANGE_JB_COORD = 'jobsbar/CHANGE_JB_COORD'
// const TM_TOGGLE_OPEN = 'topmenu/TM_TOGGLE_OPEN'
// const TM_TOGGLE_CLOSE = 'topmenu/TM_TOGGLE_CLOSE'
// const CHANGE_TM_COORD = 'topmenu/CHANGE_TM_COORD'

export const tbOpen = () => ({
  type: TB_TOGGLE_OPEN
});

export const tbClose = () => ({
  type: TB_TOGGLE_CLOSE
})

export const changeTBcoord = (tbCoord) => ({
  type: CHANGE_TB_COORD,
  tbCoord
})

export const jbOpen = () => ({
  type: JB_TOGGLE_OPEN
})

export const jbClose = () => ({
  type: JB_TOGGLE_CLOSE
})

export const changeJBcoord = (jbCoord) => ({
  type: CHANGE_JB_COORD,
  jbCoord
})

// export const tmOpen = () => ({
//   type: TM_TOGGLE_OPEN
// })
//
// export const tmClose = () => ({
//   type: TM_TOGGLE_CLOSE
// })
//
// export const changeTMcoord = (tmCoord) => ({
//   type: CHANGE_TM_COORD
// })


export default function toggleToolbar(state = initialState, action) {
  switch (action.type) {
    case TB_TOGGLE_OPEN:
      return {...state, toolbarIsOpen: true, tbCoord: {x: 0, y:0}, toolbarTransition: 'all ease .5s'};
    case TB_TOGGLE_CLOSE:
      return {...state, toolbarIsOpen: false, tbCoord: {x:-320, y:0}, toolbarTransition: 'all ease .5s'}
    case CHANGE_TB_COORD:
      return {...state, tbCoord: action.tbCoord, toolbarTransition: 'none'}
    case JB_TOGGLE_OPEN:
      return {...state, jobsbarIsOpen: true, jbCoord: {x: 0, y:0}, jobsbarTransition: 'all ease .5s'};
    case JB_TOGGLE_CLOSE:
      return {...state, jobsbarIsOpen: false, jbCoord: {x: 320, y:0}, jobsbarTransition: 'all ease .5s'};
    case CHANGE_JB_COORD:
      return {...state, jbCoord: action.jbCoord, jobsbarTransition: 'none'}
    // case TM_TOGGLE_OPEN:
    //   return {...state, topmenuIsOpen: false}
    default:
      return state;
  }
}