import Button from "@components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Newsletter = () => (
  <section className="flex flex-col">
    <h3 className="font-display font-bold mb-2">
      Subscribe to the Buildarmy Newsletter
    </h3>
    <p className=" mb-4">
      Be the first to hear about brand new sets, promotions and events taking
      place within the Buildarmy community.
    </p>
    <form action="#" method="post" className="flex mt-auto">
      <label className="block w-full">
        <span className="sr-only">Your Email Address</span>
        <input
          type="email"
          name="email"
          id="newsletter-email"
          placeholder="Your email address"
          className="border-none py-2 px-4 rounded-l-md text-secondary-darkest text-xl flex-grow w-full"
          required
        />
      </label>

      <Button
        variant="primary"
        size="lg"
        className="rounded-l-none text-secondary-darkest leading-none"
      >
        <span className="sr-only sm:not-sr-only">Subscribe</span>
        <FontAwesomeIcon icon="paper-plane" className="not-sr-only sm:hidden" />
      </Button>
    </form>
  </section>
);

export default Newsletter;
