
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
       
            <li>
                <a href="https://www.instagram.com/aguilar_tech/" target="_blank">
                    <img src="/imagens/instagram.png" alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Lucas Aguilar. <br/>
            (Curso realizado pela Alura)
        </p>
       </section>
    </footer>)
}

export default Rodape