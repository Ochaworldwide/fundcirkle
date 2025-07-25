import {
  CheckCircleIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
  UsersIcon,
  PencilSquareIcon,
  UserGroupIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import ImageCarousel from "@/Component/ImageCarousel";
import FaqAccordion from "@/Component/FaqAccordion";
import AvatarCircle from "@/Component/AvatarCircle";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const benefits = [
  {
    icon: LockClosedIcon,
    title: "Your Money, Your Control",
    description:
      "No online payments. The money stays with you. We don't touch your money.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Zero Commission",
    description:
      "We don't charge any commission. Our platform is completely free to use.",
  },
  {
    icon: UsersIcon,
    title: "Effortless Management",
    description:
      "Create and manage your savings circle with just a few clicks. It's that simple.",
  },
  {
    icon: CheckCircleIcon,
    title: "Full Transparency",
    description:
      "Our platform ensures that every member of the circle has full visibility.",
  },
];

export default function Landing() {
  return (
    <div className="antialiased">

      <Header />
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        <div className="relative container mx-auto px-6 py-16 md:py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <AvatarCircle
                avatars={[
                  "/avatars/avatar-1.png",
                  "/avatars/avatar-2.png",
                  "/avatars/avatar-3.png",
                  "/avatars/avatar-4.png",
                  "/avatars/avatar-5.png",
                ]}
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Century old money pooling system is now online!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12">
              Cometee, Beesi, Marie-go-round... it has many names. We call it
              FundCirkle.
            </p>
            <Link
              to="/sign-up"
              className="inline-flex items-center gap-3 bg-[#00943F] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-lg md:text-xl font-bold hover:bg-[#007a34] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              <span className="bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded-full">
                NEW
              </span>
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="features"
        className="py-20 md:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Why FundCirkle?
            </h2>
            <p className="text-md md:text-lg text-gray-500 dark:text-gray-400 mt-4">
              A new standard in savings management.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-4 md:mb-6">
                    <Icon className="w-12 h-12 md:w-14 md:h-14 text-[#00943F]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="py-20 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex justify-center mb-6">
              <AvatarCircle
                avatars={[
                  "/avatars/avatar-6.png",
                  "/avatars/avatar-7.png",
                  "/avatars/avatar-8.png",
                ]}
                size={48}
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Explore the FundCirkle Experience
            </h2>
            <p className="text-md md:text-lg text-gray-500 dark:text-gray-400 mt-4">
              Powerful features designed for clarity and control.
            </p>
          </div>

          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="md:w-1/2 flex justify-center">
              <ImageCarousel
                images={["/details-1.png", "/details-2.png", "/details-3.png"]}
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Full Transparency, Always
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                View every detail of your Cirkle, from member contributions to
                payout schedules. Our clear and concise dashboard ensures you're
                always in the know.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-8 md:gap-12">
            <div className="md:w-1/2 flex justify-center">
              <ImageCarousel
                images={["/payment-1.png", "/payment-2.png", "/payment-3.png"]}
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Effortless Payments
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                Submit and track payments with ease. Our streamlined process
                makes it simple to manage your contributions and stay on top of
                your financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 md:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Getting Started is Easy
            </h2>
            <p className="text-md md:text-lg text-gray-500 dark:text-gray-400 mt-4">
              Just a few simple steps to financial clarity.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-4 md:gap-6 p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="flex-shrink-0 bg-primary/10 text-[#00943F] rounded-full p-2 md:p-3">
                <PencilSquareIcon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  1. Create Your Circle
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                  Define your circle's goals, contribution amounts, and payout
                  schedule with our intuitive setup process.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start gap-4 md:gap-6 p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="flex-shrink-0 bg-primary/10 text-[#00943F] rounded-full p-2 md:p-3">
                <UserGroupIcon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  2. Invite Members
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                  Securely invite friends, family, or colleagues with a simple
                  link. Manage your member list with ease.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-start gap-4 md:gap-6 p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="flex-shrink-0 bg-primary/10 text-[#00943F] rounded-full p-2 md:p-3">
                <BanknotesIcon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  3. Start Saving
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                  Track contributions, view payout schedules, and maintain full
                  transparency, all from one dashboard.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 md:mt-16">
            <Link
              to="/sign-up"
              className="bg-[#00943F] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-lg md:text-xl font-bold hover:bg-[#007a34] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-block"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-md md:text-lg text-gray-500 dark:text-gray-400 mt-4">
              Have questions? We have answers.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion
              question="Is FundCirkle free to use?"
              answer="Yes, FundCirkle is completely free to use. We do not charge any commission or fees for creating or participating in savings circles."
            />
            <FaqAccordion
              question="Does FundCirkle handle any payments?"
              answer="No, we do not process any payments. FundCirkle is a management platform that helps you track contributions and payouts. The actual money exchange is handled directly between members, ensuring you always have full control."
            />
            <FaqAccordion
              question="How is the order of payouts determined?"
              answer="The creator of the savings circle sets the rules, including the payout schedule. This can be a fixed order, a lottery, or any other method the group agrees upon. All details are transparently displayed to members."
            />
            <FaqAccordion
              question="Can I join more than one circle?"
              answer="Absolutely. You can create and participate in multiple savings circles simultaneously. Your dashboard will provide a clear overview of all your activities."
            />
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
