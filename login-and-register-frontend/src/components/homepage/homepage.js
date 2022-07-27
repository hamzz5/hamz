import React from "react"
import "./homepage.css"

import img1 from '../homepage/img/100march.jpg'
import img3 from '../homepage/img/billboardindo.jpg'
import img5 from '../homepage/img/jenismusikk.jpg'
import img6 from '../homepage/img/juicy-luicy_169.jpeg'
import img7 from '../homepage/img/konserHIVI.jpg'
import img8 from '../homepage/img/konserisyana.jpg'
import img9 from '../homepage/img/konsersheilaon7.jpg'
import img10 from '../homepage/img/maspamkonser.jpg'
import img12 from '../homepage/img/musicyeh.png'
import img13 from '../homepage/img/nadinkonser.jpeg'
import img16 from '../homepage/img/raisakonser.jpeg'
import img17 from '../homepage/img/raisaw.jpg'
import img18 from '../homepage/img/sheilaon7.jpg'
import img19 from '../homepage/img/tuluskonser.jpeg'
import img20 from '../homepage/img/tuluss.jpg'
import img21 from '../homepage/img/concert.jpg'


const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <nav>
                <div className="layar-dalam">
                    <div className="logo">
                    <a href="Music.htm">
                        <img src={img12} alt="img" />
                    </a>{" "}
                    </div>
                    <div className="menu">
                    <a href="/#" className="tombol-menu">
                        <span className="garis" />
                        <span className="garis" />
                        <span className="garis" />
                    </a>
                    <ul>
                        <li>
                        <a href="#home">Home</a>
                        </li>
                        <li>
                        <a href="#support">Artist</a>
                        </li>
                        <li>
                        <a href="#aboutus">About</a>
                        </li>
                        <li>
                        <a href="#gallery">Gallery</a>
                        </li>
                        <li>
                        <a href="#blog">News</a>
                        </li>
                        <li>
                        <a href="#team">Genre</a>
                        </li>
                        <li>
                        <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <div className="layar-penuh">
                <header id="home">
                    <div className="overlay" />
                        <img src={img21} alt="img" />
                    <div className="intro">
                    <h3>INDONESIAN MUSIC CONCERT</h3>
                    <p>
                        Indonesia memiliki sejumlah artis ternama, mari kita healing untuk
                        sejukkan hati dan pikiran.
                    </p>
                    <p>
                        <a href="form yaw.html" className="tombol">
                        Order Ticket Now
                        </a>
                    </p>
                    </div>
                </header>
                <section className="abuabu" id="support">
                    <div className="layar-dalam support">
                    <div>
                        <img src={img17} alt="img" />
                        <h6> Raisa </h6>
                        <p>
                        Raisa Andriana adalah seorang penyanyi, penulis lagu, dan aktris
                        berkebangsaan Indonesia.
                        </p>
                    </div>
                    <div>
                        <img src={img20} alt="img" />
                        <h6>Tulus</h6>
                        <p>
                        Muhammad Tulus Rusydi adalah penyanyi, pencipta lagu, dan arsitek
                        Indonesia asal Minangkabau. Ia menamatkan studinya di Universitas
                        Katolik Parahyangan.
                        </p>
                    </div>
                    <div>
                        <img src={img18} alt="img" />
                        <h6>Sheila on 7</h6>
                        <p>
                        Sheila on 7 adalah grup musik Indonesia yang berdiri pada 6 Mei 1996
                        di Yogyakarta. Grup band ini pada awalnya adalah sekumpulan anak-anak
                        sekolah dari beberapa SMA di Yogyakarta.
                        </p>
                    </div>
                    </div>
                </section>
                <main>
                    <section id="aboutus">
                    <div className="layar-dalam">
                        <h3>About Us</h3>
                        <p className="ringkasan"></p>
                        <div className="konten-isi">
                        <p>
                            Sudah lama festival musik Indonesia tidak diselenggarakan akibat
                            adanya covid 19 yang menghebohkan dunia. Maka dari itu, kami sebagai
                            tim yang sangat mengerti masyarakat Indonesia butuh healing. kami
                            mengadakan konser yang semarak! ayo join guys!
                        </p>
                        </div>
                    </div>
                    </section>
                    <section id="gallery">
                    <div>
                        <img src={img7} alt="img" />
                    </div>
                    <div>
                        <img src={img9} alt="img" />
                    </div>
                    <div>
                        <img src={img16} alt="img" />
                    </div>
                    <div>
                        <img src={img10} alt="img" />
                    </div>
                    <div>
                        <img src={img19} alt="img" />
                    </div>
                    <div>
                        <img src={img13} alt="img" />
                    </div>
                    <div>
                        <img src={img8} alt="img" />
                    </div>
                    <div>
                    <img src={img6} alt="img" />
                    </div>
                    </section>
                    <section className="quote">
                    <div className="layar-dalam">
                        <p>Music dengan hangatnya menyimpan segala kenangan dan rindu.</p>
                    </div>
                    </section>
                    <section className="abuabu" id="blog">
                    <div className="layar-dalam">
                        <h3>You may also like</h3>
                        <p className="ringkasan">Berita terkini mengenai music Indonesia.</p>
                        <div className="blog">
                        <div className="area">
                            <div
                            className="gambar"
                            style={{ backgroundImage: <img src={img3} alt="img" /> }}
                            />
                            <div className="text">
                            <article>
                                <h4>
                                <a href="/#">Indonesian Music?</a>
                                </h4>
                                <p>
                                Solois Mahen masih perkasa di puncak Chart Billboard
                                Indonesia. Masih mengusung Pura Pura Lupa, Mahen mengalahkan
                                Andmesh dan penyanyi Indonesia lain di tangga Billboard.
                                </p>
                            </article>
                            </div>
                        </div>
                        <div className="area">
                            <div
                            className="gambar"
                            style={{
                                backgroundImage: <img src={img1} alt="img" />
                            }}
                            />
                            <div className="text">
                            <article>
                                <h4>
                                <a href="/#"> Music?</a>
                                </h4>
                                <p>
                                Pengaruh musik menjadi salah satu gaya hidup yang menggerakan
                                seseorang dalam beraktivitas. here is the top 100 on billboard
                                music in 2021.
                                </p>
                            </article>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section id="team">
                    <div className="layar-dalam">
                        <h3>Genre</h3>
                        <p className="ringkasan">
                        Dan inilah kami yang membuat acara yang menyenangkan di sekeliling
                        anda.
                        </p>
                        <div className="tim">
                        <div>
                        <img src={img5} alt="img" />
                            <h6>Genre Musik Indonesia</h6>
                            <span>
                            Dangdut | Pop | Daerah | Keroncong | Religi | Jazz | Rock |
                            Lainnya
                            </span>
                        </div>
                        </div>
                    </div>
                    </section>
                </main>
                <footer id="contact">
                    <div className="layar-dalam">
                    <div>
                        <h5>Info</h5>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, sunt?
                    </div>
                    <div>
                        <h5>Contact</h5>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, sunt?
                    </div>
                    <div>
                        <h5>Help</h5>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, sunt?
                    </div>
                    <div>
                        <h5>Sitemap</h5>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, sunt?
                    </div>
                    </div>
                    <div className="layar-dalam">
                    <div className="copyright">© 2022 Concert Indonesia</div>
                    </div>
                </footer>
            </div>

            <div className="homepage">
                <div className="button" onClick={() => setLoginUser({})} >Logout</div>
            </div>
        </div>
        )
    }

    

export default Homepage