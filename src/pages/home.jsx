// Import dependencies
import { SmileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Layout, Row, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <Layout padding="0" margin="0">
      {/* Header */}
      <Header style={{ backgroundColor: '#000', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="logo" style={{ color: '#ff4d4f', fontSize: '28px', fontWeight: 'bold' }}>
          ArtisMine
        </div>
      </Header>

      {/* Main Content */}
      <Content style={{ padding: '50px', background: '#121212', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Hero Section */}
          <Row gutter={16} align="middle" justify="center" style={{ marginBottom: '50px' }}>
            <Col span={12}>
              <Title style={{ color: '#ff4d4f' }}>Your Gateway to Entertainment</Title>
              <Paragraph style={{ fontSize: '18px', lineHeight: '1.8', color: '#d9d9d9' }}>
                Dive into a world of music, videos, and art created by a vibrant community of
                creators. Stay entertained, stay connected, and explore the magic of creative
                expression.
              </Paragraph>
              <Button type="primary" size="large" style={{ marginRight: '10px' }}>
                Explore Now
              </Button>
              <Button size="large" style={{ background: '#444', color: '#fff', border: 'none' }}>
                Learn More
              </Button>
            </Col>
            <Col span={12}>
              <img
                src="https://via.placeholder.com/500x300?text=Entertainment+Image" // Replace with your image URL
                alt="Entertainment"
                style={{ width: '100%', borderRadius: '8px', border: '2px solid #ff4d4f' }}
              />
            </Col>
          </Row>

          {/* Features Section */}
          <Row gutter={[16, 16]} justify="center">
            <Col span={8}>
              <Card
                hoverable
                cover={
                  <SmileOutlined style={{ fontSize: '64px', color: '#ff4d4f', padding: '20px' }} />
                }
                style={{ backgroundColor: '#1f1f1f', color: '#fff' }}
              >
                <Title level={4} style={{ color: '#ff4d4f' }}>
                  Music for Everyone
                </Title>
                <Paragraph style={{ color: '#d9d9d9' }}>
                  Stream the latest tracks from emerging and established artists around the globe.
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={
                  <UserOutlined style={{ fontSize: '64px', color: '#ff4d4f', padding: '20px' }} />
                }
                style={{ backgroundColor: '#1f1f1f', color: '#fff' }}
              >
                <Title level={4} style={{ color: '#ff4d4f' }}>
                  Engage with Creators
                </Title>
                <Paragraph style={{ color: '#d9d9d9' }}>
                  Connect directly with creators and show your support for their amazing work.
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={
                  <TeamOutlined style={{ fontSize: '64px', color: '#ff4d4f', padding: '20px' }} />
                }
                style={{ backgroundColor: '#1f1f1f', color: '#fff' }}
              >
                <Title level={4} style={{ color: '#ff4d4f' }}>
                  Discover Hidden Gems
                </Title>
                <Paragraph style={{ color: '#d9d9d9' }}>
                  Uncover unique content and fresh talent that you won't find anywhere else.
                </Paragraph>
              </Card>
            </Col>
          </Row>

          {/* Broken Images Section */}
          <Row gutter={[16, 16]} justify="center" style={{ marginTop: '50px' }}>
            <Col span={6}>
              <img
                src="https://via.placeholder.com/150x150?text=Broken+3"
                alt="Broken 1"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Col>
            <Col span={6}>
              <img
                src="https://via.placeholder.com/150x150?text=Broken+3"
                alt="Broken 2"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Col>
            <Col span={6}>
              <img
                src="https://via.placeholder.com/150x150?text=Broken+3"
                alt="Broken 3"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Col>
            <Col span={6}>
              <img
                src="https://via.placeholder.com/150x150?text=Broken+4"
                alt="Broken 4"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Col>
          </Row>
        </div>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>
        ArtisMine ©2024
      </Footer>
    </Layout>
  );
};

export default HomePage;
