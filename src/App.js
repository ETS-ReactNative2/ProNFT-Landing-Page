import { Download, Features, SectionWrapper } from "./components";

import assets from "./assets";
import styles from "./styles/Global";

function App() {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store and collect NFTS, exchange & earn crypto. Join 25+ million of people using ProNFT Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNFT Marketplace. Smooth constant colors of a fulent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNft is built with using expo which runs natively on all users' devices. You can easily get your app into peoples hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="This app features two screens. The first (HomeScreen) lists all NFTs while the second screeen (Details screen) shows information about the specific nfts and bids being made."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by{" "}
        </p>
        <span className={styles.whiteText}>JBCodes | Jaheim Brown</span>
      </div>
    </>
  );
}

export default App;
