import Image from "next/image";

function CategoryPage() {
  return (
    <section id="products" className="products">
      <div className="title">Products</div>
      <div className="product-category-grid">
        {/* <!-- Showcase product here --> */}
        <div className="product">
          <Image
            src="https://w16manik.blr1.cdn.digitaloceanspaces.com/frxsh/assets/men/mensaparel.webp"
            quality={100}
            alt="Men's apparel"
            width={300}
            height={300}
          />
          <div className="product-hover">
            <a href="./src/shop.html">
              <div className="text">Men's apparel</div>
            </a>
          </div>
        </div>

        <div className="product">
          <Image
            src="https://w16manik.blr1.cdn.digitaloceanspaces.com/frxsh/assets/women-apparel.jpg"
            alt="Women's apparel"
            quality={100}
            width={300}
            height={300}
          />
          <div className="product-hover">
            <a href="./src/womens.html">
              <div className="text">Women's apparel</div>
            </a>
          </div>
        </div>

        <div className="product">
          <Image
            src="https://w16manik.blr1.cdn.digitaloceanspaces.com/frxsh/assets/sneakers2.jpg"
            alt="Sneakers"
            quality={100}
            width={300}
            height={300}
          />
          <div className="product-hover">
            <a href="./src/sneaker.html">
              <div className="text">Sneakers</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryPage;
