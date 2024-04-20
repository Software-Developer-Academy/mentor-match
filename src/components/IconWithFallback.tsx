import { useState } from "react"
import Image from "next/image"

const IconWithFallback = (props: { [x: string]: any; src: string; fallbackSrc: string; }) => {

    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            alt="Icon"
            {...rest}
            src={imgSrc}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    )
}

export default IconWithFallback