import { useState, useEffect } from 'react';

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const blogs = [
    {
      id: 1,
      title: 'Beginning the Journey',
      date: 'April 8, 2025',
      summary: 'First day of our educational tour, visiting the Subic Bay Police Station. We learned about their technology and operations and their role in maintaining peace and order in the area.',
      content: 'On the first day of our educational tour, we visited the Subic Bay Police Station. The officers shared insights about their daily operations and how they utilize technology to enhance public safety. We were given a tour of the station and learned about the various departments and their functions. The highlight was a demonstration of their communication systems and how they respond to emergencies. It was an eye-opening experience that made us appreciate the hard work of law enforcement officers.',
      images: ['images/tour/police.jfif']
    },
    {
      id: 2,
      title: 'Subic Bay Freeport Zone',
      date: 'April 8, 2025',
      summary: 'Exploring the Subic Bay Freeport Zone and its technological advancements.',
      content: 'On our first day, we explored the Subic Bay Freeport Zone, a hub of technological advancements and economic growth. We visited various companies that showcased their innovative solutions in logistics, manufacturing, and IT services. The tour provided us with insights into how technology is transforming industries and creating job opportunities. We also learned about the history of Subic Bay and its significance as a former US naval base. It was an inspiring start to our educational journey!',
      images: ['images/tour/ship.jfif']
    },
    {
      id: 3,
      title: 'National Museum of Natural History',
      date: 'April 9, 2025',
      summary: 'Exploring the National Museum of Natural History and its exhibits.',
      content: 'We visited the National Museum of Natural History, where we learned about the rich biodiversity of the Philippines and how technology is used in conservation efforts. The museum showcased various exhibits, including fossils, flora, and fauna. We were particularly fascinated by the interactive displays that allowed us to learn more about the ecosystems in our country. The tour guide explained how technology plays a crucial role in research and preservation of our natural heritage. It was a great opportunity to appreciate the beauty of nature and the importance of protecting it.',
      images: ['images/tour/museum.jfif']
    },
    {
      id: 4,
      title: 'Metropolitan Manila Development Authority (MMDA)',
      date: 'April 10, 2025',
      summary: 'Learning about the MMDA and their use of technology in traffic management.',
      content: 'On our fourth day, we visited the Metropolitan Manila Development Authority (MMDA) to learn about their use of technology in traffic management. The MMDA officers demonstrated their traffic monitoring systems and how they use data analytics to improve traffic flow. We also learned about their efforts in promoting sustainable transportation and reducing carbon emissions. It was an insightful experience that highlighted the role of technology in making our cities more efficient and environmentally friendly.',
      images: ['images/tour/mmda.jfif']
    },
    {
      id: 5,
      title: 'Light Rail Transit Authority (LRTA)',
      date: 'April 11, 2025',
      summary: 'Visiting the LRTA and learning about their technology in public transportation.',
      content: 'We visited the Light Rail Transit Authority (LRTA) to learn about their technology in public transportation. The LRTA staff explained how they use technology to manage train schedules, monitor passenger flow, and ensure safety. We were given a tour of the control room where they monitor train operations in real-time. It was fascinating to see how technology is used to improve public transportation and make it more efficient for commuters. We also learned about their future plans for expanding the rail network and incorporating more advanced technologies.',
      images: ['images/tour/lrt.jfif']
    },
    {
      id: 6,
      title: 'Hytec Power Incorporated',
      date: 'April 11, 2025',
      summary: 'Visiting Hytec Power Incorporated and learning about their technologies in education.',
      content: 'We visited Hytec Power Incorporated to learn about their technologies in education. The company specializes in developing educational software and tools that enhance learning experiences. We were given a tour of their facilities and had the opportunity to interact with their products. The team shared insights into how technology can be used to make education more engaging and effective. It was an inspiring visit that highlighted the potential of technology in transforming the way we learn.',
      images: ['images/tour/hytec.jfif']
    },
    {
      id: 7,
      title: 'Bonifacio Global City (BGC)',
      date: 'April 13, 2025',
      summary: 'Exploring the vibrant and modern Bonifacio Global City (BGC).',
      content: 'On our last day, we explored Bonifacio Global City (BGC), known for its modern architecture and vibrant atmosphere. We visited various tech companies and startups that showcased their innovative solutions. The tour provided us with insights into the startup culture in the Philippines and how technology is driving economic growth. We also enjoyed the beautiful parks and public spaces in BGC, which are designed to promote community engagement and well-being. It was a fitting end to our educational tour, leaving us inspired and motivated to pursue careers in technology.',
      images: ['images/tour/bgc.jfif']
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setFilteredBlogs(blogs);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredBlogs(blogs);
    } else {
      const term = searchTerm.toLowerCase();
      const filtered = blogs.filter(blog => 
        blog.title.toLowerCase().includes(term) ||
        blog.summary.toLowerCase().includes(term) ||
        blog.content.toLowerCase().includes(term)
      );
      setFilteredBlogs(filtered);
    }
  }, [searchTerm]);

  const openBlog = (blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = 'hidden';
  };

  const closeBlog = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1><i className="fas fa-blog"></i> Blog</h1>
        <p>Follow my educational journey through these blog posts.</p>

        <div className="blog-search">
          <div className="search-input-container">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search blogs by title, summary, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading blogs...</p>
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="no-results">
          <i className="fas fa-search fa-3x"></i>
          <p>No blogs found matching "{searchTerm}"</p>
          <button className="btn" onClick={() => setSearchTerm('')}>Clear Search</button>
        </div>
      ) : (
        <div className="blog-container">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="blog-card" onClick={() => openBlog(blog)}>
              <div className="blog-card-image-container">
                <img src={blog.images[0]} alt={blog.title} className="blog-card-image" />
                <div className="blog-card-date">
                  <i className="fas fa-calendar-alt"></i> {blog.date}
                </div>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">{blog.title}</h3>
                <p className="blog-card-summary">{blog.summary}</p>
                <button className="blog-read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedBlog && (
        <div className="blog-modal" onClick={closeBlog}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={closeBlog} aria-label="Close blog">
              <i className="fas fa-times"></i>
            </button>

            <div className="blog-modal-header">
              <h2>{selectedBlog.title}</h2>
              <div className="blog-modal-meta">
                <span><i className="fas fa-calendar-alt"></i> {selectedBlog.date}</span>
              </div>
            </div>

            <div className="blog-modal-body">
              <p className="blog-modal-content-text">{selectedBlog.content}</p>
              <div className="blog-modal-images">
                {selectedBlog.images.map((image, index) => (
                  <div key={index} className="blog-modal-image-container">
                    <img
                      src={image}
                      alt={`${selectedBlog.title} - image ${index + 1}`}
                      className="blog-modal-image"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="blog-modal-footer">
              <button className="btn" onClick={closeBlog}>
                <i className="fas fa-arrow-left"></i> Back to Blogs
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
