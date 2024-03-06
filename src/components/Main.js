import Content from './Content'
import './main.css'
import first_image from "../assets/our_new_menu.jpg"
import second_image from "../assets/book_a_table.jpg"
import third_image from "../assets/opening_hours.jpg"

const Main = () => {
    return (
        <main>
            <section className="special_offer container">
                <h1>30% Off Your Bill</h1>
                <p>Enjoy delicious food and a vibrant atmosphere while saving a lot at Little Lemon Restaurant with a
                    special offer: 30% off your bill! Don't miss this chance! Join us and raise your level of satisfaction
                    and savings!</p>
            </section>

            <section className="container">
                <Content
                    title="Our New Menu"
                    imageSrc={first_image}
                    alt="Our New Menu"
                    description="Embark on a culinary journey with our latest creations featured in our new menu. Discover a range of tempting dishes to ignite your senses."
                    linkText="See our new menu"
                    link="/menu"
                />
                <Content
                    title="Book a table"
                    imageSrc={second_image}
                    alt="Reserved"
                    description="Make a reservation at our restaurant and let us take your dining experience to the next level with warm hospitality, fine cuisine and a welcoming atmosphere."
                    linkText="Book your table now"
                    link="/book"
                />
                <Content
                    title="Opening Hours"
                    imageSrc={third_image}
                    alt="Come in, we are open"
                    description="Opening hours: Monday to Sunday from 9:00 a.m. to 6:00 p.m. We are looking forward to seeing you during opening hours!"
                    linkText=""
                    link=""
                />
            </section>
        </main>
    )
}

export default Main