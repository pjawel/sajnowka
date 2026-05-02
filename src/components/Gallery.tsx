import { motion } from 'motion/react';

const images = [
  "https://scontent-waw2-1.xx.fbcdn.net/v/t51.82787-15/511512296_18085652227770958_7845839954877459438_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=aPx0i7SiaNoQ7kNvwHeu4M8&_nc_oc=AdrWQ8IBQ96pTL-9rfchcvEXFvbDu0iLbKZN8fW-GLpBXHtv_Eblg9X0KsBDV2PMopE&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=JM2srHKtUp9RFcoBnRlgPw&_nc_ss=7b2a8&oh=00_Af4cDBW6bVnIjXp2cD7o6YjO6Kt7Tju8ltMD5QjkmxY_VA&oe=69FB71D7",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t51.82787-15/559416618_18093942274770958_5746697178324289551_n.jpg?stp=dst-jpegr_tt6&_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=PHEGrACpqssQ7kNvwGks4Kt&_nc_oc=AdoE5kAf5dNqT33_3qHCkopxYCqiSEZnlLo_H1O_IGqNcsvpPi55hIcaPEmdNr2Glfg&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=5tC3kCvd7JlenvfYC3izgw&_nc_ss=7b2a8&oh=00_Af5nddHyTx9rZWZ846doLYpD6hUAqaznpL3vt8O692CDIQ&oe=69FB9772",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t51.82787-15/560589379_18093942304770958_7667541144618560067_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=rKkDHcW4VccQ7kNvwERZHh7&_nc_oc=AdqTSgx9XF28iK2QVrjLtn5g4qtplwTmt7DYNTH8Xvdj1kH-damNa34NksMGq06Vz-E&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=RAubCXHeRD-L0cNFwH4bPQ&_nc_ss=7b2a8&oh=00_Af6Y3XBK9lSWlJ_EhpTDcd49ZJkB5tGqSdGRbtIGf93jLg&oe=69FB6801",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t51.82787-15/560958393_18093942283770958_8490845631941268555_n.jpg?stp=dst-jpegr_tt6&_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=LraRENAA98EQ7kNvwFiedWe&_nc_oc=Adp76tw0z2GuRaaCCOVYNV4m4bYYRQpeQrqpA8Qik6PlUNVDXkIhO5K1-fEVpgfU3Fo&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-1.xx&_nc_gid=bgd166pKuF1u7qH4giGh_Q&_nc_ss=7b2a8&oh=00_Af6zv3DFLjYqTy0u7Qgv6UyOAme7oYW974lhN0vz9pgDvw&oe=69FB6ECF",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t51.82787-15/560461157_18093942313770958_2862501205785908265_n.jpg?stp=dst-jpegr_tt6&_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=SDVnv9S77c4Q7kNvwHkJ0vl&_nc_oc=AdqRZzDVudSErLLOu2mfbJnHVAc_KFmrACzZEqv5-_nWF9vtfzATtQJSSlEdXJB7p88&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=3YCZLFE0Y7JxgFc1dw_lzg&_nc_ss=7b2a8&oh=00_Af7N6vegBnqZqw0f0HsNC4EKBFcWLi5O36EwXPb0xHvRoA&oe=69FB8D5A",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t51.75761-15/502763574_18081295903770958_4627354807040865573_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=s9DwpyYJRMYQ7kNvwGwxDcB&_nc_oc=AdoKRyTLJ-u6xAK4MYcaXQhPZgZ_ZbfnSlFeXnEGqWmiFVqG26obUMdZBmuefLvds_c&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=d7qY0IfrgzzrXjvw-cSTlQ&_nc_ss=7b2a8&oh=00_Af7SpGjeZ0XGKpWZJ_7QB8rR_ztGR-9W-f1E8PnafGJQiQ&oe=69FB8603",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t51.75761-15/503277423_18081295885770958_871304293167716996_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=sjlecfK8cZwQ7kNvwHxC2Ij&_nc_oc=AdoaORyQiBAOk3z4zzcHlbgCIr6zlIfvyT4QGPIhpZWbLVg3brV53NgP_rpg_rzS434&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=JMYYx9yydzHb5FtM0wU88g&_nc_ss=7b2a8&oh=00_Af7gD_JIeHC8IVAp3XG65X0b5cyvSHqWsnKUXwb9wy8B5Q&oe=69FB7BDD",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/488726466_1482970886221059_7303121479004156562_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=uWzyURx2QqwQ7kNvwEyMSNJ&_nc_oc=Adqrzk0-FP7YI_4XaJseHmWou1gx63MEAiduLb94Gr-3P91d39-siKGoXaTYeinIKTM&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=cCNuOZY-mVrsdGS_46S0Wg&_nc_ss=7b2a8&oh=00_Af6074Fy9rStRyOCFLMUoPs79d0aia6xBYLfjzUMhNDiHQ&oe=69FB779B",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t1.6435-9/71799246_2153530344952459_640338847414091776_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_ohc=Ps8pJnYMG3gQ7kNvwHcRUQp&_nc_oc=AdotNO2eS6rsZmccOAUMXVp7YgBxaYSGjB2FyyeH2gZx79sju2LEujwN7UwMY9Tpreo&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=ApzmBL24nTKXycTXVYL4og&_nc_ss=7b2a8&oh=00_Af74USqpxwF0NNnROrDzpAntga7LQSh1MBtHT0MIdbD_eA&oe=6A1D2C02"
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
