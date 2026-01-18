import type {PropsWithChildren,ReactNode} from 'react'

interface AnotherCardProp extends PropsWithChildren{
    title:string,
    footer?:ReactNode
}

// children to handle any number of args
function AnotherCard({title,children,footer}:AnotherCardProp) {
  return (
    <div>
        {title}
        <div>
            {children}
        </div>
        {footer && <footer>
                {footer}
            </footer>}
    </div>
  )
}

export default AnotherCard