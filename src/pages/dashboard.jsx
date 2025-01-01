import Header from '../components/header';
import MainContent from '../components/main';
import Sidebar from '../components/sidebar';

const Dashboard = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ flexShrink: 0, padding: '10px 20px', background: '#F7F9FC' }}>
        <Header />
      </div>
      {/* Main Content Area */}
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        <Sidebar />

        {/* Main Page */}
        <div
          style={{
            flexGrow: 1,
            overflowY: 'auto',
            background: '#FFFFFF',
          }}
        >
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
