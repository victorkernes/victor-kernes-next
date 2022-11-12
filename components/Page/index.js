import Header from "../Header"

const Page = (props) => (
  <>
    <Header />
    {props.children}
  </>
);
export default Page;
