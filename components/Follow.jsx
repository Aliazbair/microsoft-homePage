const follows = [
  {
    image: 'https://i.ibb.co/LrVMXNR/social-fb.png',
    title: 'Facebook',
    link: 'https://facebook.com',
  },
  {
    image: 'https://i.ibb.co/vJvbLwm/social-twitter.png',
    title: 'Twitter',
    link: 'https://twitter.com',
  },
  {
    image: 'https://i.ibb.co/b30HMhR/social-linkedin.png',
    title: 'Linkedin',
    link: 'https://linkedin.com',
  },
]

const Follow = () => {
  return (
    <section>
      <p>Follow Microsoft</p>
      {follows.map((follow) => (
        <a href={follow.link} className=''>
          <img src={follow.image} alt={follow.title} />
        </a>
      ))}
    </section>
  )
}

export default Follow
