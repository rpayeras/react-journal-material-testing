import { loginWithEmailPassword, singInWithGoogle } from '../../../src/firebase/providers'
import { checkingAuthentication, checkingCredentials, login, logout, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from '../../../src/store/auth'
import { clearNotesLogout } from '../../../src/store/journal'
import { testUser } from '../../fixtures/authFixtures'

jest.mock('../../../src/firebase/providers')
jest.mock('@firebase/auth')

describe('authThunks tests', () => {
  const dispatch = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should call checkingCredentials', async () => {
    await checkingAuthentication()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
  })

  test('should sigin with google', async () => {
    const loginData = { ok: true, ...testUser }

    await singInWithGoogle.mockResolvedValue(loginData)

    await startGoogleSignIn()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(loginData))
  })

  test('should fail sigin with google', async () => {
    const loginData = { ok: false, errorMessage: 'Error' }

    await singInWithGoogle.mockResolvedValue(loginData)

    await startGoogleSignIn()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))
  })

  test('should login with email and password', async () => {
    const loginData = { ok: true, ...testUser }

    await loginWithEmailPassword.mockResolvedValue(loginData)

    await startLoginWithEmailPassword({ email: testUser.email, password: '1234' })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(loginData))
  })

  test('should fail login with email and password', async () => {
    const loginData = { ok: false, errorMessage: 'Error' }

    await loginWithEmailPassword.mockResolvedValue(loginData)

    await startLoginWithEmailPassword({ email: testUser.email, password: '1234' })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout(loginData))
  })

  test('should logout', async () => {
    await startLogout()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
    expect(dispatch).toHaveBeenCalledWith(logout())
  })
})
