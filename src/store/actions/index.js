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

export function userLoad(userData) {
    return {
        type: USER_LOAD,
        payload: userData
    }
}

export function subjectSelected(subject) {
    return {
        type: SUBJECT_SELECTED,
        payload: subject
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

export function boxDeleted(box) {
    return {
        type: BOX_DELETED,
        payload: box
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

export function boxSubmit(box) {
    return {
        type: BOX_SUBMIT,
        payload: box
    }
}

export function boxUpdate(box) {
    return {
        type: BOX_UPDATE,
        payload: box
    }
}