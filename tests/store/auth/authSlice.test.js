import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { initialState, testUser } from "../../fixtures/authFixtures"

describe('Testing authSlice', () => {
  test('should return initial state', () => {
    console.log(authSlice)
    const state = authSlice.reducer(initialState, {})

    expect(authSlice.name).toBe('auth')
    expect(state).toEqual(initialState)
  })

  test('should do login', () => {
    const state = authSlice.reducer(initialState, login(testUser))

    expect(state).toEqual({
      status: 'authenticated',
      ...testUser,
      errorMessage: null
    })
  })

  test('should do logout', () => {
    const state = authSlice.reducer(initialState, logout(testUser))

    expect(state).toEqual({
      status: 'not-authenticated', // 'checking', 'not-authenticated', 'authen: ated,
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    })
  })

  test('should change state to checking', () => {
    const state = authSlice.reducer(initialState, checkingCredentials())
    expect(state.status).toBe('checking')
  })
})