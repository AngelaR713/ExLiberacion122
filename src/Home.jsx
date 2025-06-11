import NetflixHeader from './components/NetfilxHeader/NetflixHeader';
import './Home.css';
import spideran from './assets/movies/1.jpeg'

function Home() {
  return (
    <>
      <NetflixHeader />
      
      <section className="hero-section">
        <div className="">
        </div>
        <div className="hero-image">
          <img 
            src={spideran} 
            alt="Spider-Man No Way Home"
            className="hero-img"
    
          />
        </div>
      </section>

      <section className="movies-section">
        <div className="movies-container">
          <div className="movie-card">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop" 
              alt="Queen of Tears"
              className="movie-img"
            />
            <div className="movie-overlay">
              <h3>QUEEN OF TEARS</h3>
            </div>
          </div>
          
          <div className="movie-card">
            <img 
              src="" 
              alt="Avatar"
              className="movie-img"
            />
            <div className="movie-overlay">
              <h3>AVATAR</h3>
            </div>
          </div>
          
          <div className="movie-card">
            <img 
              src="" 
              alt="Money Heist"
              className="movie-img"
            />
            <div className="movie-overlay">
              <h3>MONEY HEIST</h3>
            </div>
          </div>
          
          <div className="movie-card">
            <img 
              src="https://images.unsplash.com/photo-1489599904472-84b0193eae5d?w=300&h=200&fit=crop" 
              alt="Action Movie"
              className="movie-img"
            />
            <div className="movie-overlay">
              <h3>ACTION MOVIE</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
