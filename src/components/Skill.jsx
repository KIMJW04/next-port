import { skillText } from "@/constants";

export default function Skill() {
    return (
        <section id="skill">
            <div className="skill__inner">
                <div className="skill__title">
                    <h2>Challenge <em>나의 도전</em></h2>
                </div>
                <div className="skill__desc">
                    {skillText.map((nav, key) => (
                        <div key={key}>
                            <span>{key + 1}.</span>
                            <h3>{nav.title}</h3>
                            <p>{nav.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
