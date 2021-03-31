const Products = [
  {
    title: 'Microsoft Teams',
    description: ' Unleash the power of your team.',
    image: 'https://i.ibb.co/zVqhWn2/card5.png',
  },
  {
    title: 'Unlock the power of learning',
    description:
      '    Get students future-ready with Windows 10 devices. Starting at $219.',
    image: 'https://i.ibb.co/mGZcxcn/card6.jpg',
  },
  {
    title: 'Windows 10 Enterprise',
    description:
      'Download the free 90-day evaluation for IT professionals.',
    image: 'https://i.ibb.co/NpPvVHj/card7.png',
  },
  {
    title: 'Explore Kubernetes',
    description:
      '  Learn how Kubernetes works and get started with cloud native app development today.',
    image: 'https://i.ibb.co/LkP4L5T/card8.png',
  },
]

const Cards2 = () => {
  return (
    <section>
        {Products.map(product=>(
            <div>
                <img src={product.image} alt={product.title}/>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a href="#">Shop Now <i class="fas fa-chevron-right"></i></a>
            </div>

        ))}
    </section>
  )
}

export default Cards2
