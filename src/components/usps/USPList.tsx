const USPList: React.FC = ({ children }) => {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{children}</ul>
  );
};

export default USPList;
