import React from 'react'

export default function List() {
  return (
    <ul className='ul'>
        <li><div className='flex'>
             <img src="https://es.familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg" alt="img"/>
            <div className='title'>
                <h3 className='name'><a className='a'href='/Calendar'>Dr.Garcia</a></h3>
            </div>
            </div>
            
        </li>
        <li><div className='flex'>
             <img src="https://media.revistagq.com/photos/5ca5fd6e3492a940f5bf1bf0/16:9/w_1280,c_limit/doctor_mike_gq_5080.jpg" alt="img"/>
            <div className='title'>
                <h3 className='name'><a className='a' href='/Calendar'>Dr.Davidson</a></h3>
            </div>
            </div>
            
        </li>
        <li><div className='flex'>
             <img src="https://img.freepik.com/foto-gratis/hermosa-joven-doctora-mirando-camara-oficina_1301-7807.jpg?w=2000" alt="img"/>
            <div className='title'>
                <h3 className='name'><a className='a'href='/Calendar'>Dr.Lawrence</a></h3>
            </div>
            </div>
            
        </li>
    </ul>
);
}
