import Link from 'next/link';
import FooterStyles from './styles'

const Footer = props => (
    <FooterStyles>
        <section className="footer__content">
            <h3>Let's Talk</h3>
            <nav>
                <ul>
                    <li>
                        <Link href="https://www.linkedin.com/in/jayfallon/"><a title="Jay Fallon's LinkedIn profile">LinkedIn</a></Link>
                    </li>
                    <li>
                        <Link href="https://github.com/jayfallon"><a title="Jay Fallon's GitHub profile">GitHub</a></Link>
                    </li>
                    <li>
                        <Link href="https://medium.com/@jayfallon"><a title="Jay Fallon's Medium posts">Medium</a></Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/jayfallon/"><a title="Jay Fallon's Instagram profile">Instagram</a></Link>
                    </li>
                    <li>
                    <Link href="/resume"><a title="Resume page">Resume</a></Link>
                    </li>
                </ul>
                <p>
                    <Link href="#pageTop"><a title="hello">Back to top</a></Link>
                </p>
            </nav>
        </section>
    </FooterStyles>
)

export default Footer
