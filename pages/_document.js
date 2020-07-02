import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
            <Head>
                <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js?r=5426"></script>
                <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ScrollTrigger.min.js"></script>
                {/*<meta name="viewport" content="width=device-width, initial-scale=1.0"/>*/}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css" rel="stylesheet" />
                <link href="/style.css" rel="stylesheet" />
            </Head>
            <body>

            <Main />
  <NextScript />

            </body>
            </Html>
        )
    }
}

export default MyDocument
