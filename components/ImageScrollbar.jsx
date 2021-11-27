import Image from 'next/image';
import { Box } from '@chakra-ui/react';

const ImageScrollbar = ({ data }) => {
  return (
    // <ScrollMenu
    //   LeftArrow={LeftArrow}
    //   RightArrow={RightArrow}
    //   // style={{ overflow: 'hidden' }}
    // >
    <>
      {/* {data.map((image) => ( */}
      <Box
        width={['910px', '100%', '100%', '910px']}
        // key={}
        // itemID={image.id}
        // overflow='hidden'
        p='1'
      >
        <Image
          alt='property'
          placeholder='blur'
          blurDataURL={data[0] && data[0].url}
          src={data[0] && data[0].url}
          width={1000}
          height={500}
          sizes='(max-width:500px) 500px,100px, (max-width:1023px) 400px,1000px'
        />
      </Box>
      {/* ))} */}
    </>
    // </ScrollMenu>
  );
};

export default ImageScrollbar;
