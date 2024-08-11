import className from 'classnames'

function MyButton({ 
    children,
    plain,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest 
}) {
    const classes = className(rest.className,'flex items-center px-3 py-1.5 border', {
        'text-white': !outline,
        'border-black text-black': plain,
        'border-blue-500 bg-blue-500': primary,
        'border-violet-900 bg-violet-500': secondary,
        'border-green-500 bg-green-500': success ,
        'border-orange-400 bg-yellow-400': warning,
        'border-red-500 bg-red-500': danger,
        'rounded-full': rounded,
        'text-blue-500 bg-white': outline && primary,
        'text-violet-900 bg-white': outline && secondary,
        'text-green-500 bg-white': outline && success,
        'text-orange-400 bg-white': outline && warning,
        'text-red-500 bg-white': outline && danger,
    });

    return (
        <button {...rest} className={classes}>
            {children}
        </button>);
}


export default MyButton;