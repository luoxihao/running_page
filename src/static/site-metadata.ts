interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '罗熙浩的跑步页面',
  siteUrl: 'https://yihong.run',
  logo: 'https://s2.loli.net/2024/12/25/AtWnY1gzGxBmoZH.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: '原作者Blog',
      url: 'https://github.com/yihong0618/gitblog',
    },
    
  ],
};

export default data;
