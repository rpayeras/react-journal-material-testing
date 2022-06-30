export const testUser = {
  uid: 'ABC123',
  email: 'test@mail.com',
  displayName: 'Test user',
  photoURL: 'https://test.jpg',
}

export const initialState = {
  status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authenticatedState = {
  status: 'authenticated',
  ...testUser,
  errorMessage: null,
}

export const notAuthenticatedState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

