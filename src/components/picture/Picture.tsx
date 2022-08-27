import { FC, ReactElement } from "react";
import { Images } from "../../App";

const Picture: FC<{images: Images, className: string}> = ({ images, className }): ReactElement => {
	return (
		<picture>
			<source
				srcSet={`${images.small} 1x, ${images.small2x} 2x`}
				media="(max-width: 767px)"
			></source>
			<source
				srcSet={`${images.medium} 1x, ${images.medium2x} 2x`}
				media="(max-width: 1023px)"
			></source>
			<source
				srcSet={`${images.large} 1x, ${images.large2x} 2x`}
				media="(min-width: 1024px)"
			></source>
			<img
				srcSet={`${images.large} 1x, ${images.large2x} 2x`}
				alt={images.alt}
				src={images.large2x}
				className={className}
			/>
		</picture>
	);
};

export default Picture;