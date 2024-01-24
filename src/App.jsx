import {
  PopularProducts,
  CustomerReviews,
  Hero,
  Footer,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";
import React from "react";

export const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding overflow-x-hidden">
        <SuperQuality />
      </section>
      <section className="padding-x py-10 overflow-x-hidden">
        <Services />
      </section>
      <section className="padding overflow-x-hidden">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding overflow-x-hidden">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full overflow-x-hidden">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8 overflow-x-hidden">
        <Footer />
      </section>
    </main>
  );
};

export default App;
