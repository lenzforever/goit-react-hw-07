import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader-container">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        glassColor="#c0efff"
        color="#213547"
      />
    </div>
  );
};

export default Loader;
