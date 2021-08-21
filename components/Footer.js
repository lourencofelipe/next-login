const Footer = ({ children }) => (
    <footer className="">
        <nav className="flex items-center justify-center space-x-6 text-gray-600 dark:text-gray-300">
            {children}
        </nav>
    </footer>
)

export default Footer