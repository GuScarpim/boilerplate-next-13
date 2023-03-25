import fetchMock from 'jest-fetch-mock'
import User, { IParams } from 'app/params/[name]/user/page'
import { render } from '@testing-library/react'
import { ReactElement } from 'react'

describe('User', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('renders user data', async () => {
    const name = 'guscarpim'
    const user = {
      name,
      response: {
        login: 'GuScarpim'
      }
    }

    fetchMock.mockResponse(JSON.stringify(user))

    const params = { params: { name: 'guscarpim' } }
    const { container } = render(await newFunction(params))
    const nameElement = container.querySelector(`li:nth-child(1)`)
    const responseElement = container.querySelector(`li:nth-child(2)`)

    expect(nameElement).toHaveTextContent(`name: ${name}`)
    expect(responseElement).toHaveTextContent(`"login": "${user.response.login}"`)


    function newFunction(params: IParams): Promise<ReactElement> {
      return new Promise((resolve) => resolve(User(params)))
    }
  })
})
