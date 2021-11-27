import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
    area,
  },
}) => (
  <Box maxWidth='1000px' margin='auto' p='4'>
    {photos && <ImageScrollbar data={photos} />}
    <Box w='full' p='6'>
      <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
        <Flex alignItems='center'>
          <Box paddingRight='3' color='green.400'>
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight='bold' fontSize='lg'>
            AED {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Text>
        </Flex>
        <Box>
          <Avatar size='sm' src={agency?.logo?.url} />
        </Box>
      </Flex>
      <Flex
        alignItems='center'
        p='1'
        justifyContent='space-between'
        w='250px'
        color='blue.400'
      >
        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
        <BsGridFill />
      </Flex>
      <Text fontSize='lg' fontWeight='bold'>
        {title}
      </Text>
      <Text lineHeight='2' color='gray.600'>
        {description}
      </Text>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
