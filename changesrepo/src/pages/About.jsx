import React from 'react'

const About = () => {
  return (
    <section class="about" id="about">
      <div data-aos="slide-right">
        <h1 class="heading">about <span>us</span></h1>
      </div>

      <div class="row">
        <div class="image" data-aos="slide-right">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/04/7a/5c/b8/hotel-sandy-s-tower.jpg"
            alt=""
            class="myabtimg"
          />
        </div>
        <div class="content" data-aos="slide-left">
          <h3>What is the secret receipe of our burgers</h3>
          <div class="paragraph">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              officia id et, corrupti assumenda.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              officia id et, corrupti assumenda.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              officia id et, corrupti assumenda.
            </p>
          </div>
          <div class="learnmore">
            <a href="#" class="btn ordernowbtn">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
