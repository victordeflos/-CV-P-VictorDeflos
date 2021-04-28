import movieapp from "./img/movieapp2.png"
import movieapp2 from "./img/movieapp-small.png"
import postapp from "./img/postapp2.png"
import postapp2 from "./img/postapp-small.png"
import contactapp from "./img/contactapp2.png"
import contactapp2 from "./img/contactapp-small.png"




export const MovieState = () => {
  return [
    {
      title: 'The Movie App',
      mainImg: movieapp,
      secondaryImg: movieapp2,
      url: '/work/movie-app',
      movieText: nananana,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'The Post App',
      mainImg: postapp,
      secondaryImg: postapp2,
      url: '/work/post-app',
      
      movietext: nananana,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'The ContactBook App',
      mainImg: contactapp,
      secondaryImg: contactapp2,
      url: '/work/contact-app',
      movietext: nananana,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};