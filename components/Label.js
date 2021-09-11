const Label = ({ children, name, className, required }) => (
    <h3 className={className}>
        {children}
        {name && <span>{name}</span>}
        { required && <span className="text-blue-600">*</span>}
    </h3>
)

export default Label