import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PartnerImage from '../components/PartnerImage';

// Função para remover duplicatas do array
const removeDuplicates = (array) => [...new Set(array)];

const imageKeys = removeDuplicates([
  'image1.jpg', 'image2.jpg', 'image3.png', 'image4.jpg', 'image05.jpg',
  'image6.png', 'image7.png', 'image8.jpg', 'image9.jpg', 'image10.jpg',
  'image11.png', 'image12.jpg', 'image13.jpg', 'image4.jpg', 'image15.png',
  'image16.png', 'image17.jpg', 'image18.png', 'image19.png', 'image20.jpg',
  'image21.png', 'image22.jpg', 'image23.png', 'image24.png', 'image25.png',
  'image26.png', 'image27.png', 'image28.png', 'image29.png', 'image30.jpg',
  'image31.png', 'image32.jpg', 'image33.png', 'image34.jpg', 'image35.jpg',
  'image36.jpg', 'image37.jpg', 'image38.png', 'image39.jpg', 'image40.png',
  'image41.png', 'image42.jpg', 'image43.png', 'image44.jpg', 'image45.jpg',
  'image46.png', 'image47.jpg', 'image48.png', 'image49.png', 'image50.jpg',
  'image51.jpg', 'image52.png', 'image53.png'
]);

const Partner = () => {
  return (
    <>
      <Header />

      <div className="partner">
        <h1>Parcerias</h1>
        <small>*Para mais informações entre em contato conosco por email - <a href="/faleconosco">clique aqui!</a></small>
        <div className="line"></div>
        <div className="partner-info">
          <PartnerImage imageKeys={imageKeys} />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Partner;
