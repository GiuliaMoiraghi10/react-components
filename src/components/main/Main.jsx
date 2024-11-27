import card from './card/Card.jsx'

export default function Main() {

    return (
        <main>
            <section className="container">
                <h1>Il mio blog</h1>
                <div className="container">
                    <div className="raw">
                        <div className="col-12">
                            <div>{card}</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}