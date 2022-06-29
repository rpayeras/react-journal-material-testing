import { readFile } from "fs/promises"
import path from "path"
import { fileUpload } from "../../src/helpers/fileUpload"

import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'dzh9xkyvw',
  api_key: '375519873198554',
  api_secret: 'Y9XyFM5uF6PGTLxMEZeMQFMcrOU',
  secure: true
})

describe('fileUpload helper tests', () => {
  test('should upload file', async () => {
    const image = await readFile(path.join(__dirname, './mocks/mock.jpg'))
    const file = new File([image], 'test')

    const url = await fileUpload(file)
    expect(typeof url).toBe('string')

    const segments = url.split('/')
    const id = segments[segments.length - 1].replace('.jpg', '')

    await cloudinary.api.delete_resources([id])
  })

  test('should return an error if file is empty', async () => {
    const file = new File([], 'foto.jpg')
    const res = await fileUpload(file)

    expect(typeof res).toBe('object')
  })
})