export const USER_LOAD = 'USER_LOAD'
export const SUBJECT_SELECTED = 'SUBJECT_SELECTED'
export const SUBJECT_ADDED = 'SUBJECT_ADDED'
export const SUBJECT_DELETED = 'SUBJECT_DELETED'
export const SCALE_ADDED = 'SCALE_ADDED'
export const SCALE_DELETED = 'SCALE_DELETED'
export const BOX_ADDED = 'BOX_ADDED'
export const BOX_SELECTED = 'BOX_SELECTED'
export const BOX_DELETED = 'BOX_DELETED'

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