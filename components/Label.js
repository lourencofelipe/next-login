const Label = ({ children, name, className }) => (
    <h3 className={className}>
        {children}
        { name && <span>{ name }</span> }
    </h3>
)

export default Label