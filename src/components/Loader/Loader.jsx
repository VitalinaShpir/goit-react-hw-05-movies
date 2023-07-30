import { LoaderWrap } from './Loader.styled';
import { Vortex } from 'react-loader-spinner';

 const Loader = () => {
  return (
    <LoaderWrap>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </LoaderWrap>
  );
};

export default Loader