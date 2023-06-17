import { v4 as uuid } from 'uuid';

export enum Category {
  DOG = 'dog',
  CAT = 'cat',
}

type post_data = {
  id: string;
  created_at: Date;
  updated_at: Date;
  title: string;
  author: string;
  body: string;
  category: Category;
};

type Data = {
  posts: Array<post_data>;
};

const blog_data: Data = {
  posts: [
    {
      id: uuid(),
      title: 'Powerful Trading Tools and Features for Experienced Investors',
      created_at: new Date(),
      updated_at: new Date(),
      author: 'Nimesh Gautam',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia, vel illum quis perferendis ducimus quibusdam harum iste fuga exercitationem at quae accusantium placeat, possimus alias. Temporibus veniam provident laborum necessitatibus ullam sit est sapiente illum excepturi dignissimos. Similique repellat harum incidunt itaque dolorum dolore reiciendis facilis, exercitationem ut explicabo.',
      category: Category.DOG,
    },
    {
      id: uuid(),
      title: '2023 Indian Premier League',
      created_at: new Date(),
      updated_at: new Date(),
      author: 'Nimesh Gautam',
      body: 'The 2023 Indian Premier League (also known as Tata IPL 2023 for sponsorship reasons and sometimes referred to as IPL 2023 or IPL 16) was the 16th season of the Indian Premier League, a franchise Twenty20 cricket league in India. It is organised by the Board of Control for Cricket in India.[1]',
      category: Category.DOG,
    },
    {
      id: uuid(),
      title: 'Powerful Trading Tools and Features for Experienced Investors',
      created_at: new Date(),
      updated_at: new Date(),
      author: 'Nimesh Gautam',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia, vel illum quis perferendis ducimus quibusdam harum iste fuga exercitationem at quae accusantium placeat, possimus alias. Temporibus veniam provident laborum necessitatibus ullam sit est sapiente illum excepturi dignissimos. Similique repellat harum incidunt itaque dolorum dolore reiciendis facilis, exercitationem ut explicabo.',
      category: Category.CAT,
    },
    {
      id: uuid(),
      title: 'Powerful Trading Tools and Features for Experienced Investors',
      created_at: new Date(),
      updated_at: new Date(),
      author: 'Nimesh Gautam',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia, vel illum quis perferendis ducimus quibusdam harum iste fuga exercitationem at quae accusantium placeat, possimus alias. Temporibus veniam provident laborum necessitatibus ullam sit est sapiente illum excepturi dignissimos. Similique repellat harum incidunt itaque dolorum dolore reiciendis facilis, exercitationem ut explicabo.',
      category: Category.CAT,
    },
  ],
};

// let data_category = [
//   'Company',
//   'Design',
//   'Technology',
//   'Crypto',
//   'Artificial Intelligence',
//   'Work',
// ];

export default blog_data;
// export { data_category };
