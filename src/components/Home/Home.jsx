import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import Feature from "../Feature/Feature";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            <CategoryList></CategoryList>
           <Feature></Feature>
        </div>
    );
};

export default Home;