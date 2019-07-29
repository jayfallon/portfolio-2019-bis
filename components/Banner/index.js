import HomeBannerStyles from './styles'
const ReactMarkdown = require('react-markdown/with-html');

const BannerContent = `
Thanks for stopping by.
## I'm a digital designer, developer and data nerd based in Boston

`

const HomeBanner = props => (
    <HomeBannerStyles>
        <ReactMarkdown source={BannerContent} escapeHtml={false} />
    </HomeBannerStyles>
)

export default HomeBanner
