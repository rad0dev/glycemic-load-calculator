import { FC, PropsWithChildren } from 'react'

interface HeaderProps extends PropsWithChildren {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Header: FC<HeaderProps> = ({ children, level = 'h1' }: HeaderProps) => {
  const HeaderTag = level

  return (
    <HeaderTag className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight text-purple-950">
      {children}
    </HeaderTag>
  )
}

export default Header
