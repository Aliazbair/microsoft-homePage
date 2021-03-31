const Products = [
  {
    title: 'New Surface Pro 7',
    description:
      'See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7to put her plans into play',
    image: 'https://i.ibb.co/LZPVKq9/card1.png',
  },
  {
    title: 'New Surface Laptop 3',
    description:
      '   Express yourself powerfully with a thin, light, and elegant design,faster performance, and up to 11.5 hours battery life.',
    image: 'https://i.ibb.co/KjGFHVJ/card2.png',
  },
  {
    title: 'Save $150 + free controller',
    description:
      'Buy an Xbox One X console and double your fun with a free select extra controller. Starting at $349.',
    image: 'https://i.ibb.co/2cnshH6/card3.png',
  },
  {
    title: 'The new Microsoft Edge',
    description:
      'Expect more. World class performance, with more privacy, moreproductivity, and more value.',
    image: 'https://i.ibb.co/G57P0Pb/card4.png',
  },
]

const Cards = () => {
  return (
    <section>
      {Products.map((product) => (
        <div>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <a href="#">Learn More <i class="fas fa-chevron-right"></i></a>
        </div>
      ))}
    </section>
  )
}

export default Cards
