import Head from 'next/head'; //to import bootstrap to next
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Bit Coin Price</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
        </Head>
        <Navbar />
        <div className="container">
        {props.children}

        </div>
    </div>
);

export default Layout;