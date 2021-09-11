import Image from "next/image"

const ImageButton = ({ children, src, alt, width, height, className }) => (
    <button className={ className }>
        <Image src={ src } alt={ alt } width={ width } height={ height }></Image>
        {children}
    </button>
)

export default ImageButton