const Input = ({ placeholder, type, className }) => (
    <>
        <input type={type} placeholder={placeholder} className={className}>
        </input>
        <style jsx>
            {`
                input:focus
                {
                 outline: none;
                 border: 1px #6B68F2 solid;
                }
            `}
        </style>
    </>
)

export default Input