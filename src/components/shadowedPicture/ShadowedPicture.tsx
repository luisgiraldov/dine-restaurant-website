import { FC, ReactElement } from "react";
import Picture from "../picture/Picture";
import { Images } from "../../App";
import Styles from "./ShadowedPicture.module.scss";

const ShadowedPicture: FC<{images: Images, className: string}> = ({ images, className }): ReactElement => {
    return (
        <Picture images={images} className={`${className} ${Styles["box-shadow"]}`} />
    );
};

export default ShadowedPicture;