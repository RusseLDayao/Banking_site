import { card } from "../assets" ;
import styles, {layout} from "../styles";
import Button from "./Button";

const CardDeal = () => (
    <section className={`${layout.section} ml-10`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        < p className={`${styles.paragraph} max-w-[480px] mt-5`}>
            Ditch the credit card confusion! Hoobank isn't 
            just about easy billing, it's your ultimate credit 
            card sherpa. Find the perfect card for your spending 
            habits with our personalized recommendation engine. 
            Stop sifting through endless offers –
            Hoobank analyzes your expenses and reveals cards that
            maximize your rewards and minimize fees. No more missed
            opportunities or hidden charges. Hoobank gets you the
            best deal, effortlessly. Swipe smarter, save smarter,
            and unlock the full potential of your spending with Hoobank.
        </p>

        < Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} mr-10`}>
        <img src={card} alt='card' className="w-[100%] h-[100%]" />
      </div>
    </section>
 )

export default CardDeal