import Link from 'next/link';
import SideDrawerStyles from './styles'

const SideDrawer = props => {
    let drawerClasses = [''];
    if(props.show) {
        drawerClasses = ['open'];
    }
    return (
        <SideDrawerStyles className={drawerClasses}>
            <ul className="sideDrawer__nav">
                <li>
                    <Link href="/"><a title="Jay's home page">Home Page</a></Link>
                </li>
                <li>
                    <Link href="/about"><a title="More about Jay">About</a></Link>
                </li>
                <li>
                    <Link href="/projects"><a title="Jay's recent projects">Projects</a></Link>
                </li>
                <li>
                    <Link href="/resume"><a title="Jay's cummulative experience">Experience</a></Link>
                </li>
                <li>
                <Link href="/static/resume/jayfallon-resume-2019.pdf"><a target="_blank" title="Download Jay's resume">Download Resume</a></Link>
                </li>
            </ul>
        </SideDrawerStyles>
    )
}

export default SideDrawer
