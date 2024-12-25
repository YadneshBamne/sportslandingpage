import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function Gallery() {
  return (
    <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src='https://res.cloudinary.com/dyhby7bo9/image/upload/v1735043375/OJUSPHOTOS/wp6ctwtgewbvwa3ntozw.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src='https://res.cloudinary.com/dyhby7bo9/image/upload/v1735121312/gqn6cj6oagyimux4ziao.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://res.cloudinary.com/dyhby7bo9/image/upload/v1735121311/pr98rop3vi0nbp0lxf2u.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src='https://res.cloudinary.com/dyhby7bo9/image/upload/v1735043371/OJUSPHOTOS/lsnqsmtptfj6bbx2vtw6.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://res.cloudinary.com/dyhby7bo9/image/upload/v1735043375/OJUSPHOTOS/wp6ctwtgewbvwa3ntozw.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src='https://res.cloudinary.com/dyhby7bo9/image/upload/v1735121311/vnowofiby9vkfookilxp.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>
    </MDBRow>
  );
}
