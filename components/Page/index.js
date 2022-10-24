import Header from "../Header"

const Page = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
);
export default Page;
