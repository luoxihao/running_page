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
  siteTitle: '罗熙浩的运动页面',
  siteUrl: 'https://yihong.run',
  logo: 'assets/WeChatdf00885705dc00b7cf5f2da8f41c5ffe.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: '页面作者的Blog',
      url: 'https://github.com/yihong0618/gitblog',
    },
  ],
};

export default data;
