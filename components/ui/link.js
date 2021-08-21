import classNames from "classnames"
import NextLink from "next/link"

export default function Link(props) {
    const {href, children, type, size, className} = props

    const classN = classNames(`px-6 py-3 text-center whitespace-nowrap ${className}`, {
        'bg-orange-500 hover:bg-orange-600 text-white' : type === 'secondary',
        'bg-cyan-500 hover:bg-cyan-600 text-white' : type === 'primary',
        'bg-${color}-500 hover:bg-${color}-600 text-white' : type === 'primary',
        'bg-transparent text-gray-700' : type === 'transparent',
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
    })

    return (
        <NextLink href={href}>
            <a className={classN}>{children}</a>
        </NextLink>
    )
}

Link.defaultProps = {
    size: 'sm'
}
