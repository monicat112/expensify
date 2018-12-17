const moment = require.requireActual('moment')

// we're forcing moment to start at a specific point in time
// that keeps our snapshot test from failing because of timestamp differences
export default (timestamp = 0) => {
    return moment(timestamp)
}
