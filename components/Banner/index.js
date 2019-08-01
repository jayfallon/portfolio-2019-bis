import HomeBannerStyles from './styles'
const ReactMarkdown = require('react-markdown/with-html');

const BannerContent = `
Thanks for stopping by.
## I'm a digital designer, developer and data nerd based in Boston

`

const HomeBanner = props => (
    <HomeBannerStyles>
        <article>
            <ReactMarkdown source={BannerContent} escapeHtml={false} />
        </article>
    </HomeBannerStyles>
)

export default HomeBanner
