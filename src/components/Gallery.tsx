import { motion } from 'motion/react';

const images = [
  "https://scontent-waw2-2.xx.fbcdn.net/v/t51.82787-15/559416618_18093942274770958_5746697178324289551_n.jpg?stp=dst-jpegr_tt6&_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=4r5hUyGmUuIQ7kNvwFxpC-5&_nc_oc=AdpjlZRcBmTGw7P40pDPjjgchFITMJc8j-rGhffOaLBUUVh_n24_GbBvJfr2yELFBxE&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=XtK8hptgTqdYHGqxk--iaQ&_nc_ss=7a3a8&oh=00_Af1s81ZCIJa7HaBr0-4l0JObClQEsBw7byGZapIg4-CrUQ&oe=69EE3032",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t51.82787-15/560589379_18093942304770958_7667541144618560067_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=x1bUCmQZxpEQ7kNvwEoShBx&_nc_oc=AdreY0roZDOR4lTiN3_1qPMjgq7I5CvxwwA7hpflzgMI0lDZ5qgJ586Rx70LeDeiTkw&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=sVDzUJ6vPbqWIKQy9_kY9Q&_nc_ss=7a3a8&oh=00_Af1tmFp3j9VYJQJ8rURqkBf2hUvI_39UZJmjlptNz-a3cQ&oe=69EE3901",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t51.75761-15/502763574_18081295903770958_4627354807040865573_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=eH_-U5wgtoMQ7kNvwGFYvXD&_nc_oc=AdpqpvjsrfBPzIDhL3JY9ZsmXwW_1SnC7P29hRdm92a0feLYbGgwVbLJQ01Ok0FPRCo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=abPpzHTwfeZrxLApA1_99A&_nc_ss=7a3a8&oh=00_Af2Hr0C8wv0m-27y0NVQEZVkQ5PE3WZRmxLyNcmhFtXPhg&oe=69EE5703",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/488726466_1482970886221059_7303121479004156562_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=usYcik6oaWsQ7kNvwGVDVaG&_nc_oc=AdqIt5SbvNXMvWtkigpEGHU4fwI57q_jIa0D3_FCAFe9RqXDO8pL5bctWfSWQbdm1GU&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=7fdbtFP51Ruz4aJRhcJslA&_nc_ss=7a3a8&oh=00_Af2_Lrw0lGRJrZcBMpC41vpFfnCAXWXkSWgxuWFRi3yVrg&oe=69EE489B",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/487224966_1474895417028606_5716074648560400238_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=C-ThDlgphzsQ7kNvwGPqf7h&_nc_oc=AdodRVi3iEHTDH7XwkyvaJIKUsGXT0GyKRp5gFcTbpJv7hS6RFHgRGjA65r-6M4M_AA&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=PoOWimEdJKsGd0TQ-Bu4Pw&_nc_ss=7a3a8&oh=00_Af2wW-b2xrLRuv2D34fruxa_GEZBpmn573sZB4AmbrACsw&oe=69EE4808",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/486652361_1471529357365212_6729168692460130972_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=lgPhqOJaZUQQ7kNvwF7KJ0G&_nc_oc=AdqtUEOVzWd1iSqQd1ef7b3UWDR0OxiGKSzLZLdoHpwuoPWzhIq8pjRvz8SXzwSVFTw&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=LR3ptKF-t7d9SPzb5NibtA&_nc_ss=7a3a8&oh=00_Af0G4RqXNwMo32e6xBTHO5cFA_ZmMRcp4lSvImV0yRlz3Q&oe=69EE45F4",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/482024594_3574028419569304_7873692625385977131_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=06a7ca&_nc_ohc=4NqaR4E0210Q7kNvwFpYsfR&_nc_oc=AdobREIfNTfOJ7Nd2BWRmcN6rbuFjhiD3dSkaZkX__hjH-WJuU-Ok-BgHL9CLsiDMfA&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=fSBf4OaprMQWDh0rf6bj9g&_nc_ss=7a3a8&oh=00_Af0ujrcH1q-gPlzWWwbNv2rwk1pk75aSoKnVLDDw-Oa1Nw&oe=69EE5C7B",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/488794472_1482970662887748_5261418575658265172_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=UBupFqSn6ZIQ7kNvwFnimiN&_nc_oc=Adpr3DBN-VCTOomcnJTfG0MMhjO9fubrNgvN8G42RTCI1QbJJ5oojgXdiMhKnF94j_A&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=bVWcmJZ60JCReYPsghKu0Q&_nc_ss=7a3a8&oh=00_Af2uYp9ukUB6XBvi4PDWph6_wgjipSFZVbFPMNO1-LFFKw&oe=69EE4C4C"
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-label">Wizualizacja Sali</span>
          <h2 className="text-5xl md:text-6xl font-serif text-ink italic mb-6">Nasza Przestrzeń</h2>
          <div className="w-20 h-[1px] bg-accent/30 mx-auto" />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative overflow-hidden group break-inside-avoid"
            >
              <img 
                src={src} 
                alt={`Sala Sajnówka ${index + 1}`}
                className="w-full h-auto grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-ink/5 group-hover:border-accent/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
