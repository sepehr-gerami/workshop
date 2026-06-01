import Getdata from "./getdata";
type MaineProps = {
  search: string;
};

function Main({ search }: MaineProps) {
  return <Getdata search={search} />;
}

export default Main;
