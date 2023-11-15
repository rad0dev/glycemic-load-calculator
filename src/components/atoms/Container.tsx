import { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
    {children}
  </div>
)

export default Container
