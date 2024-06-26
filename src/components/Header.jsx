import { headerNav } from "@/constants";
import { useState } from "react";

export default function Header() {
    const [show, setShow] = useState(false);
    const ToggleMenu = () => {
        setShow((prevShow) => !prevShow);
    }

    return (
        <header id="header" role="header">
            <div className="header__inner">
                <h1 className="header__logo">
                    <a href="#">portfolio <em>next.js</em></a>
                </h1>
                <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={show ? "true" : "false"}
                    role="button"
                    tabIndex="0"
                    onClick={ToggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    )
}
