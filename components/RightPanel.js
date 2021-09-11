const RightPanel = ({ children, className }) => (
    <section className={`bg-gradient-to-l from-indigo-800 via-indigo-700 to-indigo-600 ${className}`}>
        { children }
    </section>
)

export default RightPanel