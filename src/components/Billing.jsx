import { apple,bill,google } from '../assets';
import styles, {layout} from '../styles';

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse} ml-10`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='billing'  className='w-100% h-[100%] relative z-5 '/>
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full
      white__gradient'/>
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full
      pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily Control your <br className='sm:block hidden'/>
        billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>  
          Tired of juggling paper bills and confusing invoices?
          Hoobank puts control in your pocket with its mobile 
          payment app. Manage your finances effortlessly, whether you're sending 
          invoices on the go or staying on top of bills. Keep track of everything in
          one simple interface, say goodbye to late fees, and experience the freedom of hassle-free
          billing all from your smartphone. Hoobank, your financial management simplified.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10
        mt-6'>
          <img src={apple} alt='appstore'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer '/>
            <img src={google} alt='playtore'
            className='w-[128px] h-[42px] object-contain  cursor-pointer '/>
        </div>
      </div>
    </section>
  )
}

export default Billing