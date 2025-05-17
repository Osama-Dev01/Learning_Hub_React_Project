import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  PieChart, 
  List, 
  Settings, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2,
  Menu,
  X 
} from 'lucide-react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  // State management
  const [activeSection, setActiveSection] = useState('content');
  const [contents, setContents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Responsive handling
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initial content
  useEffect(() => {
    setContents([
      {
        id: 1,
        title: 'Mathematics for 6-8 Years',
        category: 'Mathematics',
        ageGroup: '6-8 years',
        classLevel: '1st Grade',
        area: 'Global',
        type: 'Video',
        published: true
      }
    ]);
  }, []);

  // Content Management Functions
  const openContentModal = (content = null) => {
    setCurrentContent(content);
    setIsModalOpen(true);
  };

  const handleContentSubmit = (newContent) => {
    if (currentContent) {
      // Edit existing content
      setContents(contents.map(c => 
        c.id === currentContent.id ? {...newContent, id: currentContent.id} : c
      ));
    } else {
      // Add new content
      setContents([...contents, {...newContent, id: contents.length + 1}]);
    }
    setIsModalOpen(false);
  };

  const deleteContent = (id) => {
    setContents(contents.filter(c => c.id !== id));
  };

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  // Mobile Menu Toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Sidebar Menu Renderer
  const renderSidebarMenu = () => {
    const menuItems = [
      { key: 'content', icon: <BookOpen />, label: 'Content' },
      { key: 'categories', icon: <List />, label: 'Categories' },
      { key: 'users', icon: <Users />, label: 'Users' },
      { key: 'analytics', icon: <PieChart />, label: 'Analytics' },
      { key: 'settings', icon: <Settings />, label: 'Settings' }
    ];

    return (
      <nav className={`sidebar-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        {menuItems.map((item) => (
          <button
            key={item.key}
            className={`sidebar-menu-item ${activeSection === item.key ? 'active' : ''}`}
            onClick={() => {
              setActiveSection(item.key);
              if (isMobile) toggleMobileMenu();
            }}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
        <button 
          className="sidebar-menu-item logout-button"
          onClick={handleLogout}
        >
          <LogOut />
          <span>Logout</span>
        </button>
      </nav>
    );
  };

  // Render Content Based on Active Section
  const renderContent = () => {
    switch(activeSection) {
      case 'content':
        return renderContentManagement();
      case 'categories':
        return renderCategoryManagement();
      case 'users':
        return renderUserManagement();
      case 'analytics':
        return renderAnalytics();
      case 'settings':
        return renderSettings();
      default:
        return renderContentManagement();
    }
  };

  // Content Management Render
  const renderContentManagement = () => (
    <div className="dashboard-section">
      <div className="section-header">
        <h2>Content Management</h2>
        <button 
          className="add-content-btn"
          onClick={() => openContentModal()}
        >
          <Plus /> Add Content
        </button>
      </div>

      <div className="content-filters">
        <select>
          <option>Category</option>
          <option>Mathematics</option>
          <option>Science</option>
        </select>
        <select>
          <option>Age Group</option>
          <option>3-5 years</option>
          <option>6-8 years</option>
        </select>
        <select>
          <option>Class</option>
          <option>Kindergarten</option>
          <option>1st Grade</option>
        </select>
      </div>

      <div className="table-responsive">
        <table className="content-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Age Group</th>
              <th>Class</th>
              <th>Area</th>
              <th>Type</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contents.map(content => (
              <tr key={content.id}>
                <td>{content.title}</td>
                <td>{content.category}</td>
                <td>{content.ageGroup}</td>
                <td>{content.classLevel}</td>
                <td>{content.area}</td>
                <td>{content.type}</td>
                <td>{content.published ? 'Yes' : 'No'}</td>
                <td>
                  <div className="action-buttons">
                    <button 
                      onClick={() => openContentModal(content)}
                      className="edit-btn"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={() => deleteContent(content.id)}
                      className="delete-btn"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && renderContentModal()}
    </div>
  );

  // Content Modal Render
  const renderContentModal = () => (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{currentContent ? 'Edit Content' : 'Add New Content'}</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.target));
          handleContentSubmit({
            ...formData,
            published: e.target.published.checked
          });
        }}>
          <input
            name="title"
            defaultValue={currentContent?.title || ''}
            placeholder="Content Title"
            required
          />
          <select
            name="category"
            defaultValue={currentContent?.category || ''}
            required
          >
            <option value="">Select Category</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>Language</option>
          </select>
          <select
            name="ageGroup"
            defaultValue={currentContent?.ageGroup || ''}
            required
          >
            <option value="">Select Age Group</option>
            <option>3-5 years</option>
            <option>6-8 years</option>
          </select>
          <select
            name="classLevel"
            defaultValue={currentContent?.classLevel || ''}
            required
          >
            <option value="">Select Class Level</option>
            <option>Kindergarten</option>
            <option>1st Grade</option>
          </select>
          <input
            name="area"
            defaultValue={currentContent?.area || ''}
            placeholder="Geographic Area"
          />
          <select
            name="type"
            defaultValue={currentContent?.type || ''}
            required
          >
            <option value="">Select Content Type</option>
            <option>Video</option>
            <option>PDF</option>
            <option>Social Media Post</option>
          </select>
          <label>
            <input
              type="checkbox"
              name="published"
              defaultChecked={currentContent?.published || false}
            />
            Publish Content
          </label>
          <div className="modal-actions">
            <button type="submit">
              {currentContent ? 'Update' : 'Add'}
            </button>
            <button type="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Placeholder renders for other sections
  const renderCategoryManagement = () => (
    <div className="dashboard-section">
      <h2>Category Management</h2>
      <p>Manage content categories</p>
    </div>
  );

  const renderUserManagement = () => (
    <div className="dashboard-section">
      <h2>User Management</h2>
      <p>Manage user accounts</p>
    </div>
  );

  const renderAnalytics = () => (
    <div className="dashboard-section">
      <h2>Content Analytics</h2>
      <p>View content insights</p>
    </div>
  );

  const renderSettings = () => (
    <div className="dashboard-section">
      <h2>Settings</h2>
      <p>Configure application settings</p>
    </div>
  );

  return (
    <div className="dashboard-container">
      {/* Mobile Menu Toggle */}
      {isMobile && (
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      )}

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${isMobileMenuOpen ? 'mobile-menu-visible' : ''}`}>
        {renderSidebarMenu()}
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;