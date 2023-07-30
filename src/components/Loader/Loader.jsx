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
        colors={['purple', 'pink', 'fuchsia', 'violet', 'darkmagenta', 'hotpink']}
      />
    </LoaderWrap>
  );
};

export default Loader