'use client'

import { useRouter } from 'next/navigation'

export default function SetLocationPage() {
  const router = useRouter()

  const setLocation = (loc: string) => {
    document.cookie = `location=${loc}; path=/`
    router.push('/')
  }

  return (
    <div className="p-4 space-y-2">
      <button onClick={() => setLocation('my')}>Set location = us</button>
      <button onClick={() => setLocation('vn')}>Set location = vn</button>
      <button onClick={() => setLocation('')}>Clear location</button>
    </div>
  )
}