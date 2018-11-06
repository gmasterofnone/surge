import { getTopic } from '../thunks/getTopic'
import { isLoading, hasErrored, addTopic } from '../actions/'
import * as API from '../utils/Helper';



jest.mock('../utils/Helper.js')

describe('getTopics', () => {
  let mockTopic;
  let mockDispatch;

  beforeEach(() => {
    mockTopic = { search: 'immigration' }
    mockDispatch = jest.fn()
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getTopic(mockTopic)
    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
  

  it('should dispatch isLoading(true) if the response is ok', async () => {
    const thunk = getTopic(mockTopic)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it.skip('should dispatch the payload if the response is ok', async () => {
    const mockPayload = [];
    API.buildNews = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockPayload
      })
    }))
    const thunk = getTopic(mockTopic)
    
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(addTopic(mockTopic, mockPayload))
  })

  // it('should dispatch isLoading(false) if the response is ok', async () => {
  //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //     ok: true
  //   }))

  //   const thunk = fetchStaff(mockUrl)

  //   await thunk(mockDispatch)

  //   expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  // })

  // it('should dispatch fetchBios if the response is ok', async () => {
  //   const mockStaff = ['Christie', 'Will']

  //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //     ok: true,
  //     json: () => Promise.resolve({
  //       bio: mockStaff
  //     })
  //   }))
  //   const thunk = fetchStaff(mockUrl)

  //   await thunk(mockDispatch)

  //   expect(mockDispatch).toHaveBeenCalledWith(fetchBios())
  // })

  // it('should dispatch setStaff', async () => {
  //   const mockStaff = ['Christie', 'Will']

  //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //     ok: true,
  //     json: () => Promise.resolve({
  //       bio: mockStaff
  //     })
  //   }))
  //   const thunk = fetchStaff(mockUrl)

  //   await thunk(mockDispatch)

  //   expect(mockDispatch).toHaveBeenCalledWith(setStaff())
  // })
})