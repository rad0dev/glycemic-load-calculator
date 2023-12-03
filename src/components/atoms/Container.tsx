import { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  let containerClasses = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'

  if (className) {
    containerClasses += ` ${className}`
  }

  return <div className={containerClasses}>{children}</div>
}

export default Container
