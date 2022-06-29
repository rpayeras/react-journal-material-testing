import { authSlice } from "../../../../src/store/auth/authSlice"
import { initialState } from "../../../fixtures/authFixtures"

describe('Testing authSlice', () => {
  test('should return initial state', () => {
    console.log(authSlice)
    const state = authSlice.reducer(initialState, {})

    expect(authSlice.name).toBe('auth')
    expect(state).toEqual(initialState)
  })
})