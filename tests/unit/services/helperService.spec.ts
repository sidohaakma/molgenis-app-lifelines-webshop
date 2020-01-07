
import { getApplicationForm } from '@/services/helperService'

const mockResponses: { [key: string]: Object } = {
  '/files/1234': {
    filename: 'test.pdf',
    blob () {
      return Promise.resolve(new Blob())
    }
  }
}

jest.mock('@molgenis/molgenis-api-client', () => {
  return {
    get: (url: string) => {
      if (!mockResponses.hasOwnProperty(url)) {
        console.warn('mock response not found for url', url)
      }
      return Promise.resolve(mockResponses[url])
    },
    post: jest.fn()
  }
})

describe('getApplicationForm', () => {
  it('attaches name before returning', async (done) => {
    const blobName = 'test.pdf'
    const blob = await getApplicationForm('1234', blobName)
    expect(blob.name).toBe(blobName)
    done()
  })
})
