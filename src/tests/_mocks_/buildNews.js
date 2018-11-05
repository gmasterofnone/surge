export let buildNews = jest.fn().mockImplementation(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve({
    bio: mockStaff
  })
}))