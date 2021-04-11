import Link from "next/link";

const UtilityBar = () => (
  <div className="bg-white hidden md:block">
    <div className="xl:container xl:mx-auto px-4 flex items-center justify-between">
      <ul className="flex">
        <li className="py-2 px-3 pl-0">
          <Link href="/about-us">About Us</Link>
        </li>
        <li className="py-2 px-3">
          <Link href="/about-us/rewards-system">Rewards System</Link>
        </li>
      </ul>
      <p>
        We're still shipping orders throughout the pandemic.{" "}
        <Link href="#">
          <a className="text-accent-dark pl-2">Learn More</a>
        </Link>
      </p>
    </div>
  </div>
);

export default UtilityBar;
