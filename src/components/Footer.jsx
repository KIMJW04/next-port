import { footerText } from "@/constants"

export default function Footer() {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__text">
                    <span>Miento</span>
                    <span>© Miento</span>
                </div>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="#">sign up</a>
                        </div>
                        <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((nav, key) => (
                                <li key={key}>
                                    <a href={nav.link}>{nav.title}</a>
                                    <em>{nav.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    © 2024 Miento<br />
                    이 사이트는 Next.js를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer >
    )
}
