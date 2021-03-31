const Linkss=[
    {
        title:'Surface Pro X',
    },
    {
        title:'Surface Laptop 3',
    },
    {
        title:'Surface Pro 7',
    },
    {
        title:'Windows 10 apps',
    },
    {
        title:'Office apps',
    },
]
const Stores=[
    {
        title:'Account Profile',
    },
    {
        title:'Download Center',
    },
    {
        title:'Microsoft Store support',
    },
    {
        title:'Returns',
    },
    {
        title:'Older tracking',
    },
]
const Educations=[
    {
        title:'Microsfot in education',
    },
    {
        title:'Office for students',
    },
    {
        title:'Office 365 for schools',
    },
    {
        title:'Deals for studentss',
    },
    {
        title:'Microsfot Azure',
    },
]
const Enterprises=[
    {
        title:'Azure',
    },
    {
        title:'AppSource',
    },
    {
        title:'Automotive',
    },
    {
        title:'Government',
    },
    {
        title:'Healthcare',
    },
]
const Developers=[
    {
        title:'Visual Studio',
    },
    {
        title:'Windowszs Dev Center',
    },
    {
        title:'Developer Network',
    },
    {
        title:'TechNet',
    },
    {
        title:'Microsoft Developer',
    },
]
const Companys=[
    {
        title:'Careers',
    },
    {
        title:'About Microsoft',
    },
    {
        title:'Company news',
    },
    {
        title:'Privacy at Microsoft',
    },
    {
        title:'Inverstors',
    },
]

const Links = () => {
    return (
        <section>
            <div className="">
                {/* news */}
                <ul>
                    <li>Whats's New</li>
                    {Linkss.map(link=>(
                        <li>{link.title}</li>

                    ))}
                </ul>
                {/* stores */}
                <ul>
                    <li>Microsoft Store</li>
                    {Stores.map(store=>(
                        <li>{store.title}</li>

                    ))}
                </ul>

                {/* Educations */}
                <ul>
                    <li>Education</li>
                    {Educations.map(Education=>(
                        <li>{Education.title}</li>

                    ))}
                </ul>

                {/* enterprise */}
                <ul>
                    <li>Enterprise</li>
                    {Enterprises.map(Enterprise=>(
                        <li>{Enterprise.title}</li>

                    ))}
                </ul>

                {/* Develpoer */}
                <ul>
                    <li>Developer</li>
                    {Developers.map(Developer=>(
                        <li>{Developer.title}</li>

                    ))}
                </ul>

                {/* Company */}
                <ul>
                    <li>Company</li>
                    {Companys.map(Company=>(
                        <li>{Company.title}</li>

                    ))}
                </ul>
            </div>
            
        </section>
    );
}

export default Links;
