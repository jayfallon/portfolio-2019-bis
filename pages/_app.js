import App, { Container } from "next/app";
import Head from "next/head";
import Page from '../components/Page'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Container>
          
          <Page>
            <Component {...pageProps} router={router} />
          </Page>
    
        </Container>

      </>
    );
  }
}
