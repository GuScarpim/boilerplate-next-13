import { ReactElement } from 'react'

export interface IParams {
  params: {
    name: string
  }
}

export const metadata = {
  title: 'Boilerplate Next 13'
}

export default async function User({ params }: IParams): Promise<ReactElement> {
  const response = await fetch(`https://api.github.com/users/${params.name}`, {
    // cache: 'no-store',
    next: {
      revalidate: 30
    }
  })
  const user = await response.json()

  return (
    <div className="text-2xl">
      <li>name: {params.name}</li>
      <li className="break-words ">
        response: {JSON.stringify(user, null, 2)}
      </li>
    </div>
  )
}
