type post_data = {
  id: string;
  created_date: Date;
  updated_date: Date;
  title: string;
  author: string;
  body: string;
};

const posts_data: Array<post_data> = [
  {
    id: '1',
    title: 'Powerful Trading Tools and Features for Experienced Investors',
    created_date: new Date(),
    updated_date: new Date(),
    author: 'Nimesh Gautam',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia, vel illum quis perferendis ducimus quibusdam harum iste fuga exercitationem at quae accusantium placeat, possimus alias. Temporibus veniam provident laborum necessitatibus ullam sit est sapiente illum excepturi dignissimos. Similique repellat harum incidunt itaque dolorum dolore reiciendis facilis, exercitationem ut explicabo.',
  },
  {
    id: '2',
    title: '2023 Indian Premier League',
    created_date: new Date(),
    updated_date: new Date(),
    author: 'Nimesh Gautam',
    body: 'The 2023 Indian Premier League (also known as Tata IPL 2023 for sponsorship reasons and sometimes referred to as IPL 2023 or IPL 16) was the 16th season of the Indian Premier League, a franchise Twenty20 cricket league in India. It is organised by the Board of Control for Cricket in India.[1]',
  },
  {
    id: '3',
    title: 'Powerful Trading Tools and Features for Experienced Investors',
    created_date: new Date(),
    updated_date: new Date(),
    author: 'Nimesh Gautam',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia, vel illum quis perferendis ducimus quibusdam harum iste fuga exercitationem at quae accusantium placeat, possimus alias. Temporibus veniam provident laborum necessitatibus ullam sit est sapiente illum excepturi dignissimos. Similique repellat harum incidunt itaque dolorum dolore reiciendis facilis, exercitationem ut explicabo.',
  },
  {
    id: '4',
    title: 'Powerful Trading Tools and Features for Experienced Investors',
    created_date: new Date(),
    updated_date: new Date(),
    author: 'Nimesh Gautam',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia, vel illum quis perferendis ducimus quibusdam harum iste fuga exercitationem at quae accusantium placeat, possimus alias. Temporibus veniam provident laborum necessitatibus ullam sit est sapiente illum excepturi dignissimos. Similique repellat harum incidunt itaque dolorum dolore reiciendis facilis, exercitationem ut explicabo.',
  },
];

// let data_category = [
//   'Company',
//   'Design',
//   'Technology',
//   'Crypto',
//   'Artificial Intelligence',
//   'Work',
// ];

export default posts_data;
// export { data_category };
