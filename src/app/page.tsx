"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Coffee, Sparkles, Star, TrendingUp, Instagram, Facebook, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="largeSizeMediumTitles"
      background="none"
      cardStyle="gradient-mesh"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Bibbio"
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Order Now", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Welcome to Bibbio Coffeeshop"
          description="Discover the perfect blend of premium coffee, artisan pastries, and a warm atmosphere. Every cup tells a story of passion, craftsmanship, and dedication to quality."
          background={{ variant: "glowing-orb" }}
          kpis={[
            { value: "500+", label: "Daily Visitors" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "15+", label: "Specialty Blends" }
          ]}
          enableKpiAnimation={true}
          tag="Premium Coffee Experience"
          tagIcon={Coffee}
          buttons={[
            { text: "Explore Menu", href: "#products" },
            { text: "Visit Us Today", href: "#contact" }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/multilayer-coffee-glass-with-cookie-saucer_23-2147908388.jpg"
          imageAlt="Bibbio Coffeeshop - Premium Coffee Setup"
          imagePosition="right"
          ariaLabel="Bibbio Coffeeshop Hero Section"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Crafted with passion, served with love. Bibbio is more than just coffee—it's a sanctuary for coffee lovers, a gathering place for friends, and a home for those who appreciate the art of the perfect brew."
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Our Story", href: "#" },
            { text: "Sustainability", href: "#" }
          ]}
          ariaLabel="About Bibbio Coffeeshop"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Collection"
          description="Handpicked selection of our most beloved beverages and pastries"
          tag="New Arrivals"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",              name: "Signature Espresso",              price: "$4.50",              variant: "Single Shot • Double Shot",              imageSrc: "https://img.b2bpic.net/free-photo/leftover-coffee-black-cup-window-sill_23-2147898257.jpg",              imageAlt: "Bibbio Signature Espresso",              isFavorited: false
            },
            {
              id: "2",              name: "Creamy Cappuccino",              price: "$5.75",              variant: "Small • Medium • Large",              imageSrc: "https://img.b2bpic.net/free-photo/hot-chocolade-cup_140725-9554.jpg",              imageAlt: "Creamy Cappuccino with Latte Art",              isFavorited: false
            },
            {
              id: "3",              name: "Butter Croissant",              price: "$3.99",              variant: "Plain • Chocolate • Almond",              imageSrc: "https://img.b2bpic.net/free-photo/yellow-cup-with-beverage-near-coffee-beans_23-2148180237.jpg",              imageAlt: "Freshly Baked Butter Croissant",              isFavorited: false
            },
            {
              id: "4",              name: "Fudgy Brownie",              price: "$4.25",              variant: "Classic • Salted Caramel",              imageSrc: "https://img.b2bpic.net/free-photo/top-view-cup-coffee-half-empty-inside-black-cup-brown-wooden-table-drink-coffee-liquid_140725-27964.jpg",              imageAlt: "Rich Chocolate Fudgy Brownie",              isFavorited: false
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="invertDefault"
          carouselMode="buttons"
          ariaLabel="Featured Products"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Coffee Lovers Say"
          description="Real feedback from our valued customers"
          tag="Customer Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              role: "Regular Customer",              company: "Marketing Executive",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/casual-smile-street-style-background-spring_1139-777.jpg",              imageAlt: "Sarah Mitchell Portrait"
            },
            {
              id: "2",              name: "James Chen",              role: "Coffee Enthusiast",              company: "Tech Industry",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-positive-executive-work_1098-519.jpg",              imageAlt: "James Chen Portrait"
            },
            {
              id: "3",              name: "Emma Rodriguez",              role: "Daily Visitor",              company: "Creative Designer",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-attractive-caucasian-smiling-woman_93675-135471.jpg",              imageAlt: "Emma Rodriguez Portrait"
            },
            {
              id: "4",              name: "Michael Johnson",              role: "Pastry Fan",              company: "Business Owner",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-cheerful-teenage-girl-sitting-cafe_1262-3048.jpg",              imageAlt: "Michael Johnson Portrait"
            },
            {
              id: "5",              name: "Priya Patel",              role: "Remote Worker",              company: "Software Developer",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-young-business-woman-standing-outside-office-buildings-business-success-concept_58466-12274.jpg",              imageAlt: "Priya Patel Portrait"
            },
            {
              id: "6",              name: "David Thompson",              role: "Morning Regular",              company: "Consultant",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/happy-smiling-businesswoman-looking-camera-with-arms-crossed-portrait_1163-4337.jpg",              imageAlt: "David Thompson Portrait"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          carouselMode="buttons"
          ariaLabel="Customer Testimonials"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          title="Bibbio by the Numbers"
          description="Our commitment to excellence reflected in real achievements"
          tag="Our Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",              title: "Years of Excellence",              subtitle: "Serving the community with passion since day one",              category: "Heritage",              value: "12 Years",              buttons: [{ text: "Our History", href: "#" }]
            },
            {
              id: "2",              title: "Organic Source",              subtitle: "Ethically sourced from premium roasters worldwide",              category: "Sustainability",              value: "100%",              buttons: [{ text: "Learn More", href: "#" }]
            },
            {
              id: "3",              title: "Customer Loyalty",              subtitle: "Members enjoying exclusive benefits and rewards",              category: "Community",              value: "2,500+",              buttons: [{ text: "Join Us", href: "#" }]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="invertDefault"
          carouselMode="buttons"
          ariaLabel="Bibbio Metrics"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about Bibbio Coffeeshop, our menu, and services"
          faqs={[
            {
              id: "1",              title: "What are your operating hours?",              content: "We're open Monday to Friday from 6:00 AM to 8:00 PM, Saturdays 7:00 AM to 9:00 PM, and Sundays 8:00 AM to 7:00 PM. We're closed on major holidays."
            },
            {
              id: "2",              title: "Do you offer WiFi for remote workers?",              content: "Yes! We offer free high-speed WiFi throughout our coffeeshop. We have plenty of seating with outlets available for laptops and devices. It's the perfect workspace for productivity."
            },
            {
              id: "3",              title: "Can I order for group events or catering?",              content: "Absolutely! We offer catering services for office events, meetings, and celebrations. Please contact us at least 48 hours in advance for bulk orders. Call us or visit in person to discuss your needs."
            },
            {
              id: "4",              title: "Are your pastries and food vegan-friendly?",              content: "We offer a selection of vegan pastries and beverages made with plant-based milk alternatives including oat, almond, and soy. Ask our baristas for vegan recommendations."
            },
            {
              id: "5",              title: "Do you have a loyalty program?",              content: "Yes! Join our Bibbio Rewards program and earn points on every purchase. Collect points to get free drinks, pastries, and exclusive member-only perks."
            },
            {
              id: "6",              title: "Where do you source your coffee beans?",              content: "We partner with ethical roasters from around the world, specializing in single-origin and fair-trade coffees. All our beans are carefully selected for quality and sustainability."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          ariaLabel="Frequently Asked Questions"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have a question or want to visit us? We'd love to hear from you. Reach out and let us know how we can help make your day better with great coffee."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your inquiry or event needs...",            rows: 5,
            required: true
          }}
          useInvertedBackground="invertDefault"
          imageSrc="https://img.b2bpic.net/free-photo/cup-with-delicious-coffee-table_23-2149703759.jpg"
          imageAlt="Roasted Coffee Beans"
          mediaPosition="right"
          buttonText="Send Message"
          ariaLabel="Contact Bibbio Coffeeshop"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Bibbio"
          copyrightText="© 2024 Bibbio Coffeeshop. All rights reserved."
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/bibbio", ariaLabel: "Follow us on Instagram" },
            { icon: Facebook, href: "https://facebook.com/bibbio", ariaLabel: "Follow us on Facebook" },
            { icon: Twitter, href: "https://twitter.com/bibbio", ariaLabel: "Follow us on Twitter" }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}