import { LeftOutlined, PlayCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Card, Carousel, Typography } from 'antd';
import { useRef } from 'react';

const { Title, Text } = Typography;

const MainContent = () => {
  const featuredContent = [
    {
      title: 'Spider-Man: Across the Spider-Verse',
      description: 'Miles Morales catapults across the Multiverse, facing new challenges.',
      image: 'https://via.placeholder.com/800x400', // Placeholder image
    },
    {
      title: 'The Super Mario Bros. Movie',
      description: 'Join Mario and friends on a fun-filled journey through the Mushroom Kingdom.',
      image: 'https://via.placeholder.com/800x400', // Placeholder image
    },
    {
      title: 'Avatar: The Way of Water',
      description: 'An epic return to Pandora in a breathtaking new adventure.',
      image: 'https://via.placeholder.com/800x400', // Placeholder image
    },
  ];

  const genres = [
    {
      title: 'Animation',
      movies: [
        { title: 'Movie 1', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 2', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 3', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 4', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 5', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 6', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 7', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 8', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 9', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 10', image: 'https://via.placeholder.com/240x160' },
      ],
    },
    {
      title: 'Action',
      movies: [
        { title: 'Movie 6', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 7', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 8', image: 'https://via.placeholder.com/240x160' },
      ],
    },
    {
      title: 'Comedy',
      movies: [
        { title: 'Movie 11', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 12', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 13', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 14', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 15', image: 'https://via.placeholder.com/240x160' },
      ],
    },
    {
      title: 'Drama',
      movies: [
        { title: 'Movie 16', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 17', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 18', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 19', image: 'https://via.placeholder.com/240x160' },
        { title: 'Movie 20', image: 'https://via.placeholder.com/240x160' },
      ],
    },
  ];

  const scrollRef = useRef([]);

  const scroll = (index, direction) => {
    const scrollContainer = scrollRef.current[index];
    if (scrollContainer) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ padding: '20px', margin: '10px' }}>
      {/* Featured Content Slider */}
      <Carousel autoplay effect={'scrollx'}>
        {featuredContent.map((item, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '16px',
                height: '400px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
                padding: '20px',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  padding: '20px',
                  borderRadius: '12px',
                }}
              >
                <Title level={3} style={{ color: '#fff' }}>
                  {item.title}
                </Title>
                <Text style={{ color: '#fff' }}>{item.description}</Text>
                <div style={{ marginTop: '20px' }}>
                  <Button
                    type="primary"
                    icon={<PlayCircleOutlined />}
                    style={{
                      marginRight: '10px',
                      borderRadius: '8px',
                      backgroundColor: '#FF5733',
                      border: 'none',
                    }}
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Genres with Horizontal Scrolling */}
      <div style={{ marginTop: '40px' }}>
        {genres.map((genre, index) => (
          <div key={index} style={{ marginBottom: '40px' }}>
            <Title level={4} style={{ marginBottom: '20px' }}>
              {genre.title}
            </Title>
            <div style={{ position: 'relative' }}>
              {/* Left Arrow */}
              <Button
                icon={<LeftOutlined />}
                shape="circle"
                onClick={() => scroll(index, 'left')}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '40%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              />

              {/* Scrollable Movie Cards */}
              <div
                ref={(el) => (scrollRef.current[index] = el)}
                style={{
                  display: 'flex',
                  overflowX: 'hidden',
                  gap: '16px',
                  padding: '10px',
                  scrollSnapType: 'x mandatory',
                  position: 'relative',
                }}
              >
                {genre.movies.map((movie, i) => (
                  <Card
                    key={i}
                    hoverable
                    cover={
                      <img
                        alt={movie.title}
                        src={movie.image}
                        style={{
                          borderTopLeftRadius: '12px',
                          borderTopRightRadius: '12px',
                        }}
                      />
                    }
                    style={{
                      minWidth: '200px',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      scrollSnapAlign: 'start',
                    }}
                  >
                    <Card.Meta
                      title={movie.title}
                      style={{ textAlign: 'center', fontWeight: 'bold' }}
                    />
                  </Card>
                ))}
              </div>

              {/* Right Arrow */}
              <Button
                icon={<RightOutlined />}
                shape="circle"
                onClick={() => scroll(index, 'right')}
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '40%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
