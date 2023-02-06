const TB_TOGGLE_OPEN = 'toolbar/TB_TOGGLE_OPEN'
const TB_TOGGLE_CLOSE = 'toolbar/TB_TOGGLE_CLOSE'
const CHANGE_TB_COORD = 'toolbar/CHANGE_TB_COORD'
const JB_TOGGLE_OPEN = 'jobsbar/JB_TOGGLE_OPEN'
const JB_TOGGLE_CLOSE = 'jobsbar/JB_TOGGLE_CLOSE'
const CHANGE_JB_COORD = 'toolbar/CHANGE_JB_COORD'

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
  type: CHANGE_TB_COORD,
  jbCoord
})



const initialState = {
  toolbarIsOpen: true,
  jobsbarIsOpen: true,
  tbCoord: {x:0, y:0},
  jbCoord: {x:0, y:0},
  toolbarTransition: 'none',
  jobsbarTransition: 'none'
}

export default function toggleToolbar(state = initialState, action) {
  switch (action.type) {
    case TB_TOGGLE_OPEN:
      return {...state, toolbarIsOpen: true, tbCoord: {x: 0, y:0}, toolbarTransition: 'all ease .5s'};
    case TB_TOGGLE_CLOSE:
      return {...state, toolbarIsOpen: false, tbCoord: {x:-320, y:0}, toolbarTransition: 'all ease .5s'}
    case CHANGE_TB_COORD:
      return {...state, tbCoord: action.tbCoord, toolbarTransition: 'none'}
    case JB_TOGGLE_OPEN:
      return {...state, jobsbarIsOpen: !state.jobsbarIsOpen, jbCoord: {x: !state.jobsbarIsOpen ? 320 : 0, y:0}, jobsbarTransition: 'all ease .5s'};
    default:
      return state;
  }
}