import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (project) {
        var projectImage = 'images/portfolio/' + project.image;
        return (
          <div
            key={project.title}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              width: '600px',
              margin: '0 auto',
            }}
          >
            {/* Details Section */}
            <div
              style={{
                flex: '1',
                marginRight: '20px',
              }}
            >
              <h5
                style={{
                  fontSize: '18px',
                  marginBottom: '10px',
                  fontWeight: 'bold',
                }}
              >
                {project.title}
              </h5>
              <p
                style={{
                  fontSize: '14px',
                  color: '#555',
                }}
              >
                {project.category}
              </p>
            </div>

            {/* Image Section */}
            <div
              style={{
                flex: '0 0 200 px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                alt={project.title}
                src={projectImage}
                style={{
                  width: '100%',
                  height: '150px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Few of my projects include:</h1>
            <div id="portfolio-wrapper">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
