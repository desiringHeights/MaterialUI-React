import React, {useState} from 'react';

import Button from '../components/Button';
import Card from '../components/card/card';
import ImageRetina from '../components/ImageRetina';
import List from '../components/list/list';
import Slider from '../components/slider/slider';
import SliderPaginationMobile from '../components/sliderPaginationMobile/sliderPaginationMobile';
import SMP1 from '../assets/images/smp-img-1.png';
import SMP1_2x from '../assets/images/smp-img-1@2x.png';
import SMP2 from '../assets/images/smp-img-2.png';
import SMP2_2x from '../assets/images/smp-img-2@2x.png';
import SMP3 from '../assets/images/smp-img-3.png';
import SMP3_2x from '../assets/images/smp-img-3@2x.png';
import SMP4 from '../assets/images/smp-img-4.png';
import SMP4_2x from '../assets/images/smp-img-4@2x.png';

export default function SocialMediaPlatforms() {
  const pagination = ['Tiktok', 'Facebook', 'Instagram', 'Twitter'];
  const [swiper, setSwiper] = useState(null);
  const [swiperIndex, setSwiperIndex] = useState(0);

  const slideTo = (index) => {
    if(!swiper) return;

    swiper.slideTo(index);
  };

  return (
    <div className='container'>
      <Slider
        hidePaginationForMobile={true}
        pagination={pagination}
        onChange={(index) => setSwiperIndex(index)}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        <Card
          title='Promote on TikTok'
          header={
            <p className='text-medium'>
              Advertise your brand on TikTok, using real people to promote your products or services. Let users create a video based on your script and post it on their social media wall.
            </p>
          }
          image={
            <ImageRetina img1x={SMP1} img2x={SMP1_2x} alt='Promote on TikTok'/>
          }
          footer={
            <>
              <SliderPaginationMobile items={pagination} slideTo={slideTo} index={swiperIndex}/>
              <List>
                <li>
                  Original Content Creation based on your script.
                </li>
                <li>
                  Social Wall distribution of your video.
                </li>
                <li>
                  Ad Text Supported including #hashtags.
                </li>
                <li>
                  Tags Supported
                </li>
              </List>
              <Button text='Sign Up'/>
            </>
          }
          />
        <Card
          title='Promote on Facebook'
          header={
            <p className='text-medium'>
              Distribute your brand content organically on Facebook. Our users will post your brand creatives on their social wall, stories or they can create a custom video based on your script.
            </p>
          }
          image={
            <ImageRetina img1x={SMP2} img2x={SMP2_2x} alt='Promote on Facebook'/>
          }
          footer={
            <>
              <SliderPaginationMobile items={pagination} slideTo={slideTo} index={swiperIndex}/>
              <List>
                <li>
                  Original Content Creation based on your script.
                </li>
                <li>
                  Social Wall distribution of your video.
                </li>
                <li>
                  Ad Text Supported including #hashtags.
                </li>
                <li>
                  Tags Supported
                </li>
              </List>
              <Button text='Sign Up'/>
            </>
          }
        />
        <Card
          title='Promote on Instagram'
          header={
            <p className='text-medium'>
              The right tool you have been expecting. Distribute your content on Instagram through thousands of real and authentic voices.
            </p>
          }
          image={
            <ImageRetina img1x={SMP3} img2x={SMP3_2x} alt='Promote on Instagram'/>
          }
          footer={
            <>
              <SliderPaginationMobile items={pagination} slideTo={slideTo} index={swiperIndex}/>
              <List>
                <li>
                  Original Content Creation based on your script.
                </li>
                <li>
                  Social Wall distribution of your video.
                </li>
                <li>
                  Ad Text Supported including #hashtags.
                </li>
                <li>
                  Tags Supported
                </li>
              </List>
              <Button text='Sign Up'/>
            </>
          }
        />
        <Card
          title='Promote on Twitter'
          header={
            <p className='text-medium'>
              Let our users spread the word about your
              brand on Twitter. You can distribute your ad
              or you can ask people to create a custom review about your product or service.
            </p>
          }
          image={
            <ImageRetina img1x={SMP4} img2x={SMP4_2x} alt='Promote on Twitter'/>
          }
          footer={
            <>
              <SliderPaginationMobile items={pagination} slideTo={slideTo} index={swiperIndex}/>
              <List>
                <li>
                  Original Content Creation based on your script.
                </li>
                <li>
                  Social Wall distribution of your video.
                </li>
                <li>
                  Ad Text Supported including #hashtags.
                </li>
                <li>
                  Tags Supported
                </li>
              </List>
              <Button text='Sign Up'/>
            </>
          }
        />
        </Slider>
      </div>
  );
}
