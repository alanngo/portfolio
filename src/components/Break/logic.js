//stateless logic goes here
/**
 * 
 * @param {number} n 
 * @returns {Array}
 */
export const generateBreak = (n=1) => {
    let ret = []
    for (let i = 0; i < n; i++)
        ret.push(i)
    return ret
}