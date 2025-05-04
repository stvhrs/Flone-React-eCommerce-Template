import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwentyTwo from "../../wrappers/hero-slider/HeroSliderTwentyTwo";
// import BannerTwentyEight from "../../wrappers/banner/BannerTwentyEight";


import TabProductEighteen from "../../wrappers/product/TabProductEighteen";

const HomeElectronicsThree = () => {
  return (
    <Fragment>
      <SEO
        title="Gubuk Pustaka Harnomi"
        titleTemplate="Elkapede"
        description="Gubuk Pustaka Harmoni menyediakan solusi pendidikan inovatif melalui buku, aplikasi, video edukatif, dan layanan produksi video. Kami fokus pada peningkatan akses pendidikan dan pengembangan penulis, dengan budaya kerja yang Partisipatif, Holistik, dan Menyenangkan.

"
      />
      <LayoutOne headerTop="invisible">
        {/* hero slider */}
        <HeroSliderTwentyTwo />
        {/* banner */}
        {/* <BannerTwentyEight spaceTopClass="pt-100" spaceBottomClass="pb-70" /> */}
        {/* product tab */}
        <TabProductEighteen category="electronics" spaceBottomClass="pb-70" />


      </LayoutOne>
    </Fragment>
  );
};

export default HomeElectronicsThree;
