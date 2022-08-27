import { ReactElement } from "react";
import Styles from "./Menu.module.scss";
import Description from "../../description/Description";
import { menuData } from "../../../data/data";
import MenuSection from "../../menuSection/MenuSection";

const Menu = (): ReactElement => {
    return (
        <section className={Styles.menu}>
            <Description title={menuData[0].title} text={menuData[0].text} />
            <MenuSection title={menuData[1].title} text={menuData[1].text} images={menuData[1].images} />
            <MenuSection title={menuData[2].title} text={menuData[2].text} images={menuData[2].images} />
            <MenuSection title={menuData[3].title} text={menuData[3].text} images={menuData[3].images} />
        </section>
    );
};

export default Menu;