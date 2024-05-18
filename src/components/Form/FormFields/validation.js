export const optional = null;
export const required = x => !x && x !== false && x !== 0 && error('required');

/** @param {number} max */
export function maxLength(max) {
    return x => x && x.length > max && error('maxLength', max);
}

const emailRegex = /.+@.+\..+/;
export const email = x => x && !emailRegex.test(x) && error('email');

/**
 * @template {string} T
 * @param {T} id
 */
export function error(id, ...params) {
    return { id, params };
}
