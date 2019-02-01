import authReducer from '../../reducers/auth'

test('should set uid for login', () => {
    const uid = '1a37z'
    const state = authReducer(undefined, {type: 'LOGIN', uid})
    expect(state.uid).toBe(uid)
})

test('should clear uid for logout', () => {
    const state = authReducer({ uid: 'k9hg5'}, {type: 'LOGOUT'})
    expect(state).toEqual({})
})