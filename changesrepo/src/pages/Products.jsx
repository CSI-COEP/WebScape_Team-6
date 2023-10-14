import React from 'react'

const Products = () => {
  return (
    <section class="products" id="products">
      <div data-aos="slide-right">
        <h1 class="heading">our <span>products</span></h1>
      </div>
      <div class="box-container" data-aos="slide-up">
        <div class="box">
          <div class="box-head">
            <span class="title">mini burger</span>
            <a href="#" class="name">Bacon Burger</a>
          </div>
          <div class="image">
            <img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
            />
          </div>
          <div class="box-bottom">
            <div class="info">
              <b class="price">$24</b>
              <span class="amount">110gr / 300 Cal</span>
            </div>
            <div class="product-btn">
              <a href="#">
                <i class="fas fa-plus"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="box-head">
            <span class="title">cheese burger</span>
            <a href="#" class="name">cheese Burger</a>
          </div>
          <div class="image">
            <img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
            />
          </div>
          <div class="box-bottom">
            <div class="info">
              <b class="price">$25</b>
              <span class="amount">140gr / 2500 Cal</span>
            </div>
            <div class="product-btn">
              <a href="#">
                <i class="fas fa-plus"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="box-head">
            <span class="title">Double burger</span>
            <a href="#" class="name">Double Burger</a>
          </div>
          <div class="image">
            <img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
            />
          </div>
          <div class="box-bottom">
            <div class="info">
              <b class="price">$24.00</b>
              <span class="amount">440gr / 600 Cal</span>
            </div>
            <div class="product-btn">
              <a href="#">
                <i class="fas fa-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
