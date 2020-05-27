import {Provider} from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import {initStore} from '../redux'

import '../../public/css/themify-icons/themify-icons.css'
import '../../public/css/fetcher.css'
import '../../public/js/navbar'

import '../scss/App.scss'

export default withRedux(initStore, {debug: process.env.DEBUG == 'true' ? true : false})(
    class Application extends App {
        static async getInitialProps({Component, ctx}) {
            return {
                pageProps: {
                    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
                }
            }
        }

        render() {
            const {Component, pageProps, store} = this.props;
            return (
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            )
        }
    }
)