import { AppNotify } from './AppNotify'

let notifyRef: AppNotify;

export function setNotify(notify) {
    notifyRef = notify;
}

export function notifyError({ message }) {
    notifyRef?.error({ message })
}

export function notifyInfo({ message }) {
    notifyRef.info({ message })
}

export function closeNotify() {
    notifyRef.close()
}
