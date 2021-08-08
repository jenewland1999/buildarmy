import { GridLoader } from "react-spinners";

interface Props {
  loading: boolean;
}

const Loader = (props: Props) => {
  const { loading } = props;

  return (
    <div className="grid place-content-center p-8">
      <GridLoader
        color="#ffc107"
        css="display:block"
        loading={loading}
        size={16}
      />
    </div>
  );
};

export default Loader;
