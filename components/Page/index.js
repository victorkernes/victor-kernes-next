import Header from "../Header";
import Footer from "../Footer";

const Page = (props) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);
export default Page;
