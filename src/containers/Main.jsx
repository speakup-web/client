import React from 'react'

function Main({ children }) {
  return (
    <main className="h-full overflow-y-auto">
      <div>{children}</div>
    </main>
  )
}

export default Main
