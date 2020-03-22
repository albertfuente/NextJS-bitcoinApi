import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';



const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to Bitzprice</h1>
            {props.bpi.time.updated}
        </div>
    </Layout>

);

Index.getInitialProps = async function () {
    const rest = await fetch
    ('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await rest.json();
    return {
        bpi: data
    }
}

export default Index