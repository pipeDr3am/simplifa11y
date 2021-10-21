const uidMap = {}

export const createUid = () => Math.random().toString(36).substr(2, 9)