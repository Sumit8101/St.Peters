import React from 'react'
import Header from './Header'
import './Home.css'

export default function Home() {
  return (
    <>
    <Header />
    <div>
         <div className="container m-2">
        <div className="row content">
          <div className="col-8 slider">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="./img/1.jpg"
                    class="d-block w-100"
                    alt="..."
                    height="480px"
                    width="400px"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="./img/2.jpg"
                    class="d-block w-100"
                    alt="..."
                    height="480px"
                    width="400px"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="./img/3.jpg"
                    class="d-block w-100"
                    alt="..."
                    height="480px"
                    width="400px"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-4 event">
            <h2>News/Events</h2>
            <marquee behavior="scroll" direction="up" scrollamount="5">
            <li> <a href="notice.html">
                        4th Edition of Pariksha Pe Charcha
                    </a></li>
                <hr />
                <li><a href="notice.html">
                        Celebration of Republic Day
                    </a></li>
                <hr />
                <li><a href="notice.html">
                        Birthday celebration of Netaji Subhas Chandra Bose
                    </a></li>
                <hr />
                <li><a href="notice.html">
                        Observance of Road Safety Month 
                    </a></li>
                <hr />
                <li><a href="notice.html">
                        Celebration of Swami Vivekananda''s Birth Anniversary
                    </a></li>
                <hr />
                <li><a href="notice.html">
                        National Youth Festival 2022
                    </a></li>
                <hr />
                <li><a href="notice.html">
                        Half Yearly Examination Time Table
                    </a></li>
                <hr />
                
            </marquee>
           
          </div>
        </div>
      </div>
      <div className="container principle">
        <h1>What Our School Principal says?</h1>
        <img src="./img/principle.png" alt="" width="140px" height="170px" />
        <span>Our motto “Spread the Light” is at the heart of everything we do at the school. We aim to not just
                impart knowledge to the students, but also to inculcate in them - wisdom, compassion and a
                humanitarian spirit. We have a multi-cultural student population; hence we teach children the
                importance of tolerance and respecting each other’s culture. Discipline, values and integrity are
                the very foundation of this school. <br /> <br />

                Besides rigorous scholastic programs, we seek to develop and nurture the different facets of a
                child. The school encourages all students to participate in a variety of co-curricular activities
                from dance, art and drama to a variety of sports to social work to environmental conservation
                activities, (the list goes on). It is important for a child to explore and find their strengths in
                order to reach their true potential. Whether a child is an introvert or extrovert personality, the
                aim is to nurture the child into a self-confident individual. <br /> <br />

                Our mission is to continue to do what we have always done: develop this school and the students with
                integrity and values; also, to give our students the best opportunities and the best all-round
                education. Our vision is to produce conscientious, smart and confident citizens of India who will go
                out into the world and make us proud!</span>
      </div>
      
    </div>
    </>
  )
}
