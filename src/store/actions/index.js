export const USER_LOAD = 'USER_LOAD'
export const SUBJECT_SELECTED = 'SUBJECT_SELECTED'
export const SUBJECT_ADDED = 'SUBJECT_ADDED'
export const SUBJECT_DESELECTED = 'SUBJECT_DESELECTED'
export const SUBJECT_SUBMIT = 'SUBJECT_SUBMIT'
export const SUBJECT_UPDATED = 'SUBJECT_UPDATED'
export const SUBJECT_DELETED = 'SUBJECT_DELETED'
export const SCALE_ADDED = 'SCALE_ADDED'
export const SCALE_DELETED = 'SCALE_DELETED'
export const CELL_ADDED = 'CELL_ADDED'
export const CELL_DELETED = 'CELL_DELETED'
export const CELL_UPDATED = 'CELL_UPDATED'
export const CELL_SELECTED = 'CELL_SELECTED'
export const CELL_DESELECTED = 'CELL_DESELECTED'
export const CELL_SUBMIT = 'CELL_SUBMIT'
export const BOX_ADDED = 'BOX_ADDED'
export const BOX_SELECTED = 'BOX_SELECTED'
export const BOX_DELETED = 'BOX_DELETED'
export const BOX_DESELECTED = 'BOX_DESELECTED'
export const BOX_SUBMIT = 'BOX_SUBMIT'
export const BOX_UPDATE = 'BOX_UPDATE'
export const SELECTOR_LOADED = 'SELECTOR_LOADED'
export const SELECTOR_REQUESTED = 'SELECTOR_REQUESTED'
export const SCALES_LOADED = 'SCALES_LOADED'
export const SCALES_REQUESTED = 'SCALES_REQUESTED'
export const SELECTOR_UPDATED = 'SELECTOR_UPDATED'
export const AUTH_REQ = 'AUTH_REQ'
export const AUTH_SUCC = 'AUTH_SUCC'
export const AUTH_FAIL = 'AUTH_FAIL'
export const REGISTER_KEY = 'REGISTER_KEY'
export const CANCEL_KEY = 'CANCEL_KEY'
export const LOGOUT_KEY = 'LOGOUT_KEY'
export const REG_REQ = 'REG_REQ'
export const REG_SUCC = 'REG_SUCC'
export const REG_FAIL = 'REG_FAIL'
export const POST_SUBJECT = 'POST_SUBJECT'
export const PUT_SUBJECT = 'PUT_SUBJECT'
export const DELETE_SUBJECT = 'DELETE_SUBJECT'
export const UPDATE_USER = 'UPDATE_USER'

export function userLoad(userData) {
    return {
        type: USER_LOAD,
        payload: userData
    }
}

export function subjectSelected(subjectId) {
    return {
        type: SUBJECT_SELECTED,
        payload: subjectId
    }
}

export function subjectDeleted(subjectName) {
    return {
        type: SUBJECT_DELETED,
        payload: subjectName
    }
}
export function subjectAdded(subject) {
    return {
        type: SUBJECT_ADDED,
        payload: subject
    }
}

export function subjectDeselected(subject) {
    return {
        type: SUBJECT_DESELECTED,
        payload: subject
    }
}

export function subjectUpdated(subject) {
    return {
        type: SUBJECT_UPDATED,
        payload: subject
    }
}

export function subjectSubmit(subject) {
    return {
        type: SUBJECT_SUBMIT,
        payload: subject
    }
}

export function scaleAdded(scale) {
    return {
        type: SCALE_ADDED,
        payload: scale
    }
}

export function scaleDeleted(scale) {
    return {
        type: SCALE_DELETED,
        payload: scale
    }
}

export function cellAdded(cellId, scaleId) {
    return {
        type: CELL_ADDED,
        payload: {
            cellId: cellId,
            scaleId: scaleId
        }
    }
}

export function cellDeleted(cellId, scaleId) {
    return {
        type: CELL_DELETED,
        payload: {
            cellId: cellId,
            scaleId: scaleId
        }
    }
}

export function cellUpdated(oldId, newId) {
    return {
        type: CELL_UPDATED,
        payload: {
            oldId: oldId,
            newId: newId
        }
    }
}

export function cellSelected(cell) {
    return {
        type: CELL_SELECTED,
        payload: cell
    }
}

export function cellDeselected(cell) {
    return {
        type: CELL_DESELECTED,
        payload: cell
    }
}

export function cellSubmit(cell) {
    return {
        type: CELL_SUBMIT,
        payload: cell
    }
}

export function boxSelected(box) {
    return {
        type: BOX_SELECTED,
        payload: box
    }
}

export function boxDeleted(name, selector) {
    console.log('for delete', name, selector)
    return {
        type: BOX_DELETED,
        payload: {
            name: name,
            selector: selector
        }
    }
}
export function boxAdded(box) {
    return {
        type: BOX_ADDED,
        payload: box
    }
}

export function boxDeselected(box) {
    return {
        type: BOX_DESELECTED,
        payload: box
    }
}

export function boxSubmit(box, selector) {
    return {
        type: BOX_SUBMIT,
        payload: {
            box: box,
            selector: selector
        }
    }
}

export function boxUpdate(box, selector) {
    return {
        type: BOX_UPDATE,
        payload: {
            box: box,
            selector: selector
        }
    }
}

export function selectorLoaded(selector) {
    return {
        type: SELECTOR_LOADED,
        payload: selector
    }
}

export function selectorRequested(name) {
    return {
        type: SELECTOR_REQUESTED,
        payload: name
    }
}

export function scalesLoaded(selector) {
    return {
        type: SCALES_LOADED,
        payload: selector
    }
}

export function scalesRequested(name) {
    return {
        type: SCALES_REQUESTED,
        payload: name
    }
}

export function selectorUpdated(newSelector) {
    console.log('new selector', newSelector)
    return {
        type: SELECTOR_UPDATED,
        payload: newSelector
    }
}

export function authReq(username, password) {
    return {
        type: AUTH_REQ,
        payload: {
            username: username,
            password: password
        }
    }
}

export function authSucc(user) {
    return {
        type: AUTH_SUCC,
        payload: user
    }
}

export function authFail() {
    return {
        type: AUTH_FAIL,
        payload: null
    }
}

export function registerKey() {
    return {
        type: REGISTER_KEY
    }
}

export function cancelKey() {
    return {
        type: CANCEL_KEY
    }
}

export function logoutKey() {
    return {
        type: LOGOUT_KEY
    }
}

export function regReq(username, password, isModerator) {
    return {
        type: REG_REQ,
        payload: {
            username: username,
            password: password,
            isModerator: isModerator
        }
    }
}

export function regSucc() {
    return {
        type: REG_SUCC,
    }
}

export function regFail() {
    return {
        type: REG_FAIL
    }
}

export function postSubject(user, subject) {
    console.log(user, subject)
    return {
        type: POST_SUBJECT,
        payload: {
            user: user,
            subject: subject
        }
    }
}

export function deleteSubject(user, subject) {
    console.log('delete subject', user, subject)
    return {
        type: DELETE_SUBJECT,
        payload: {
            user: user,
            subject: subject
        }
    }
}

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}