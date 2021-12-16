const title='Myshago-create your online store in 30 seconds';
const description='Myshago is a platform that allows merchants with no programming experience to set up an e-commerce store on their smartphone';
const SEO={
    title,
    description,  
      canonical='https://www.myshago.store/',
      openGraph={
        url: 'https://www.myshago.store/',
        title,
        description,
        images: [
          {
            url: 'https://www.myshago.store/logo.png',
            width: 800,
            height: 600,
            alt: title,
            type: 'image/jpeg',
          },
          
        ],
       
      },
      twitter={
        
        site: '@site',
        cardType: 'summary_large_image',
      }
}