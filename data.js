const Instructors = [
  {
    name: 'Paul Kelly',
    title: 'Freelance Brand Identity Designer',
    portfolioUrl: 'https://www.behance.net/paulkellydesigns',
    imageUrl:
      'https://res.cloudinary.com/yeswecancreate/image/upload/v1633086059/temp_image_20210928_114636_d45f462b-a45d-41ee-99c8-cb90b2577b4e_zvzfr2.jpg',
  },
  {
    name: 'Miguel Camacho',
    title: 'Ilustrator and Visual Designer',
    portfolioUrl: 'https://Miguelcm.com',
    imageUrl:
      'https://res.cloudinary.com/yeswecancreate/image/upload/v1633087106/TNA-Miguel-Camacho_inwlvp.jpg',
  },
  {
    name: 'Fiyin Adeniyi',
    title: 'Senior Designer, Check DC',
    portfolioUrl: 'https://www.behance.net/fiyinadeniyi',
    imageUrl:
      'https://res.cloudinary.com/yeswecancreate/image/upload/v1633087546/3eff5291001ba1b338568d57129ecd58b98528e861afeb8650518e5f30e17c3a_gdzytx.jpg',
  },
  {
    name: 'ROJTHEGOAT',
    title: 'Creative Director, Hyraki Studios',
    portfolioUrl: 'https://www.behance.net/rowlandolamide',
    imageUrl:
      'https://res.cloudinary.com/yeswecancreate/image/upload/v1633080131/BIDC%201.0/ROJTHEGOAT.jpg',
  },
];

const today = new Date(Date.now()).toLocaleDateString();

let registrationExpired = false;

if (today === '29/11/2021') {
  registrationExpired = true;
}

export { Instructors, registrationExpired };
