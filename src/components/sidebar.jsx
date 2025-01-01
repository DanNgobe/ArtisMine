import { RightOutlined } from '@ant-design/icons';
import { Avatar, Button, List, Typography } from 'antd';
const { Title, Text } = Typography;

const Sidebar = () => {
  const data = [
    {
      title: 'Dark Season 3',
      episode: 'Episode 3',
      duration: '42min',
      image: 'https://via.placeholder.com/80x120', // Placeholder image
    },
    {
      title: 'Transformers',
      episode: '2h 32min',
      duration: 'Movie',
      image: 'https://via.placeholder.com/80x120', // Placeholder image
    },
    {
      title: 'Lupin Season 2',
      episode: 'Episode 5',
      duration: '51min',
      image: 'https://via.placeholder.com/80x120', // Placeholder image
    },
    {
      title: "The Queen's Gambit",
      episode: 'Episode 7',
      duration: '1h 2min',
      image: 'https://via.placeholder.com/80x120', // Placeholder image
    },

    {
      title: 'The Mandalorian',
      episode: 'Episode 8',
      duration: '45min',
      image: 'https://via.placeholder.com/80x120', // Placeholder image
    },
  ];

  return (
    <section
      style={{
        flexBasis: '300px',
        flexShrink: 0,
        background: '#F7F9FC',
        borderRight: '1px solid #E0E0E0',
        padding: '0px 20px',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '16px',
          padding: '5px 20px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          height: '100%',
        }}
      >
        <Title level={4} style={{ marginBottom: '10px' }}>
          Your Library
        </Title>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item style={{ padding: '10px 0' }}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    shape="square"
                    size={80}
                    src={item.image}
                    style={{ borderRadius: '8px' }}
                  />
                }
                title={<Text style={{ fontWeight: 'bold' }}>{item.title}</Text>}
                description={
                  <div>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      {item.episode}
                    </Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      {item.duration}
                    </Text>
                  </div>
                }
              />
              <Button type="text" shape="circle" icon={<RightOutlined />} />
            </List.Item>
          )}
        />
      </div>
    </section>
  );
};

export default Sidebar;
