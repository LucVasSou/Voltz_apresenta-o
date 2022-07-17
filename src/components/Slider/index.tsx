import { Flex, Text} from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



export default function Slider() {
  return (
    <Flex 
    w="100%"
    maxW={["300px","720px", "980px"]}
    mx="auto"
    mb={["5", "10"]}
    h={["250px", "450px"]}
    >
      <Swiper
      // install Swiper modules
      modules={[ Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 4000,
      }}
      style={{width: '100%', flex: '1'}}
      
    >
      
      <SwiperSlide>
      <Link href="https://www.linkedin.com/in/lucas-souza-72a537a0/">
        <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        bgImage="url(/linkedin2.png)"
        bgRepeat="no-repeat"
        bgSize="cover"
        textAlign="center"
        bgPosition="center"
        cursor="pointer"
        >
          
        </Flex>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link href="https://github.com/LucVasSou">
        <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        bgImage="url(/github.png)"
        bgRepeat="no-repeat"
        bgSize="cover"
        textAlign="center"
        bgPosition="center"
        cursor="pointer"
        >
        </Flex>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link href="https://www.instagram.com/lucasvasouza/">
        <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        bgImage="url(/instagram.png)"
        bgRepeat="no-repeat"
        bgSize="cover"
        textAlign="center"
        bgPosition="center"
        cursor="pointer"
        >
          
        </Flex>
        </Link>
      </SwiperSlide>
      
      
    </Swiper>

    </Flex>
  )
}