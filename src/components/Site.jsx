import { siteText } from "@/constants";

export default function Site() {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">Site coding <em>나의 작업물</em></h2>
                <div className="site__wrap">
                    {siteText.map((nav, key) => (
                        <article className="site__item" key={key}>
                            <span className="num">{key + 1}.</span>
                            <div className="text">
                                <div>{nav.text[0]}</div>
                                <div>{nav.text[1]}</div>
                                <div>{nav.text[2]}</div>
                            </div>
                            <h3 className="title">{nav.title}</h3>
                            <div className="btn">
                                <a href={nav.code}>code</a>
                                <a href={nav.view}>view</a>
                            </div>
                            <div className="info">
                                <span>{nav.info[0]}</span>
                                <span>{nav.info[1]}</span>
                                <span>{nav.info[2]}</span>
                            </div>

                        </article >
                    ))}
                </div >
            </div >
        </section >
    )
}
