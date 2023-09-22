import '../../css/Home.css'

function Home() {

    return (
        <>
            <section id='home'>
                <div className="homeMain">
                    <div className='imgContainer'>
                        <img src="https://media.discordapp.net/attachments/1154824436625719398/1154824728016601128/9c6e4959-97d5-4608-81c4-b5a5223b5ce2.png?width=480&height=670" alt="Foto Bernardo" className='foto' />

                        <div className="imgFrames">
                            <div className="imgFrame topL"></div>
                            <div className="imgFrame topR"></div>
                            <div className="imgFrame bottL"></div>
                            <div className="imgFrame bottR"></div>
                        </div>
                    </div>

                    <div className='textoHome'>
                        <div className='titleHome'>
                            <h3>Olá meu nome é _</h3>
                            <h1><span className="destacar">Bernardo</span> Rezende</h1>
                        </div>

                        <div className='paragrafoHome'>
                            <p>
                                Sou um desenvolvedor web front-end trainee entusiasta
                                da tecnologia e formado pela Tech4Me da alterdata.
                            </p>
                        </div>

                        <div className='homeLinks'>
                            <a href="https://github.com/BernRezz" class="fa fa-github"></a>
                            <a href="https://www.linkedin.com/in/bernardo-pm-rezende" class="fa fa-linkedin"></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home