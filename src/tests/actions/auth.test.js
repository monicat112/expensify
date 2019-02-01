import { login, logout } from '../../actions/auth'

test('should generate login action object', () => {
    const id = 'asdf'
    expect(login(id)).toEqual({
        type: 'LOGIN',
        uid: id
    })
})

test('should generate logout action object', () => {
    expect(logout()).toEqual({
        type: 'LOGOUT'
    })
})