import { BellOutlined, SearchOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Col, Dropdown, Input, Menu, Row } from 'antd';

const Header = () => {
  const menu = (
    <Menu
      items={[
        {
          label: 'Profile',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: 'Settings',
          key: '2',
          icon: <SettingOutlined />,
        },
        {
          label: 'Logout',
          key: '3',
          danger: true,
        },
      ]}
    />
  );

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        padding: '15px 30px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Row justify="space-between" align="middle" style={{ width: '100%' }}>
        {/* Left Section */}
        <Col>
          <Row align="middle" gutter={24}>
            <Col>
              <h1
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  margin: 0,
                  color: '#2E3A59',
                  letterSpacing: '1px',
                }}
              >
                ArtisMine
              </h1>
            </Col>
            <Col>
              {['Music', 'Photos', 'Videos', 'Art', 'More'].map((tab) => (
                <Button
                  key={tab}
                  type="text"
                  style={{
                    fontSize: '16px',
                    color: '#4A5568',
                    fontWeight: '500',
                    marginRight: '8px',
                  }}
                >
                  {tab}
                </Button>
              ))}
            </Col>
          </Row>
        </Col>

        {/* Center Section */}
        <Col flex="1" style={{ display: 'flex', justifyContent: 'center' }}>
          <Input
            placeholder="Search movies"
            prefix={<SearchOutlined style={{ color: '#9CA3AF' }} />}
            style={{
              borderRadius: '20px',
              maxWidth: '400px',
              padding: '10px 15px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#F7F9FC',
              border: 'none',
              color: '#2E3A59',
            }}
          />
        </Col>

        {/* Right Section */}
        <Col>
          <Row align="middle" gutter={24}>
            <Col>
              <Badge count={5} size="small" style={{ backgroundColor: '#FF6B6B' }}>
                <BellOutlined
                  style={{
                    fontSize: '22px',
                    cursor: 'pointer',
                    color: '#4A5568',
                  }}
                />
              </Badge>
            </Col>
            <Col>
              <Dropdown overlay={menu} trigger={['click']}>
                <Avatar
                  size="large"
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor: '#4A5568',
                    cursor: 'pointer',
                  }}
                />
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
