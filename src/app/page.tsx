"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Eye, Sparkles, Zap, GraduationCap, Leaf, MousePointer, Image, TrendingUp, Users, Star, HelpCircle, Twitter, Facebook } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="radialGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "How It Works", id: "features" },
            { name: "Examples", id: "products" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="CucumberScale"
          button={{
            text: "Try Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="See How Big a Cucumber Really Is"
          description="Compare the size of a cucumber to everyday objects in seconds. Perfect for educators, gardeners, and anyone who wants to understand dimensions visually."
          tag="Visual Learning Tool"
          tagIcon={Eye}
          buttons={[
            { text: "Compare Now", href: "products" },
            { text: "Learn More", href: "features" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338650738-i1k4kyut.jpg",
              imageAlt: "Small cucumber compared to grape"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338651506-olnfgocd.jpg",
              imageAlt: "Medium cucumber compared to smartphone"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338652299-rj7sykob.jpg",
              imageAlt: "Large cucumber compared to water bottle"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338646374-xfk8u3xy.jpg",
              imageAlt: "Cucumber size comparison with household items"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338647028-7kdvewka.jpg",
              imageAlt: "Educational measuring tool for vegetables"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Making Size Visual"
          description={[
            "Understanding measurements can be challenging without proper visual references. Our tool bridges that gap by providing instant, clear comparisons between cucumbers and everyday objects.",
            "Whether you're a teacher explaining dimensions to students, a gardener tracking growth stages, or simply curious about sizes, our visual comparison system makes learning intuitive and engaging."
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="How It Works"
          description="Simple tools for instant visual size comparisons"
          tag="Features"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              title: "Instant Comparisons",
              description: "Select a cucumber size and immediately see it compared to familiar objects like phones, keys, or coins",
              icon: Zap
            },
            {
              title: "Educational Focus",
              description: "Perfect for teachers and students learning about measurements, dimensions, and spatial reasoning",
              icon: GraduationCap
            },
            {
              title: "Gardener Friendly",
              description: "Track cucumber growth stages and understand harvest timing with visual size references",
              icon: Leaf
            },
            {
              title: "Simple Interface",
              description: "Clean, intuitive design that anyone can use without complicated instructions or setup",
              icon: MousePointer
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Comparison Examples"
          description="Explore different cucumber sizes with real-world comparisons"
          tag="Gallery"
          tagIcon={Image}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              brand: "Mini Cucumber",
              name: "Baby Cucumber (2-3 inches)",
              price: "Grape Size",
              rating: 5,
              reviewCount: "Perfect for snacking",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338650738-i1k4kyut.jpg",
              imageAlt: "Small baby cucumber compared to grape"
            },
            {
              id: "2",
              brand: "Standard Cucumber",
              name: "Medium Cucumber (6-8 inches)",
              price: "Phone Size",
              rating: 5,
              reviewCount: "Most common size",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338651506-olnfgocd.jpg",
              imageAlt: "Medium cucumber compared to smartphone"
            },
            {
              id: "3",
              brand: "Large Cucumber",
              name: "Full-Size Cucumber (10-12 inches)",
              price: "Bottle Size",
              rating: 5,
              reviewCount: "Great for slicing",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338652299-rj7sykob.jpg",
              imageAlt: "Large cucumber compared to water bottle"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Learning Impact"
          description="See how visual comparisons enhance understanding"
          tag="Statistics"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "95",
              title: "percent",
              description: "Students better understand size concepts with visual comparisons",
              icon: Users
            },
            {
              id: "2",
              value: "1000",
              title: "educators",
              description: "Teachers using visual tools report improved engagement",
              icon: GraduationCap
            },
            {
              id: "3",
              value: "80",
              title: "percent",
              description: "Gardeners find size references helpful for harvest timing",
              icon: Leaf
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Educators Say"
          description="Real feedback from teachers, gardeners, and learners"
          tag="Success Stories"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Elementary Teacher",
              company: "Greenwood Elementary",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338652957-d8y0aotk.jpg",
              imageAlt: "Sarah Mitchell, Elementary Teacher"
            },
            {
              id: "2",
              name: "Mike Rodriguez",
              role: "Home Gardener",
              company: "Urban Gardening Club",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338653688-o8brbjlz.jpg",
              imageAlt: "Mike Rodriguez, Home Gardener"
            },
            {
              id: "3",
              name: "Emma Chen",
              role: "Science Student",
              company: "Roosevelt High School",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338654388-jki8cmjr.jpg",
              imageAlt: "Emma Chen, Science Student"
            },
            {
              id: "4",
              name: "David Park",
              role: "Parent Educator",
              company: "Home School Network",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338655123-f243mjso.jpg",
              imageAlt: "David Park, Parent Educator"
            },
            {
              id: "5",
              name: "Dr. Lisa Johnson",
              role: "Education Researcher",
              company: "Learning Sciences Institute",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338655771-nuu2nssb.jpg",
              imageAlt: "Dr. Lisa Johnson, Education Researcher"
            },
            {
              id: "6",
              name: "Tom Wilson",
              role: "Commercial Grower",
              company: "Wilson Farms",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35Znpd3ByEERAsUQupIuQAIsKDh/uploaded-1763338656432-teg7uymx.jpg",
              imageAlt: "Tom Wilson, Commercial Grower"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Common Questions"
          description="Everything you need to know about cucumber size comparisons"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How accurate are the size comparisons?",
              content: "Our comparisons use average dimensions for both cucumbers and common objects. While individual items may vary slightly, the comparisons provide reliable visual references for understanding relative sizes."
            },
            {
              id: "2",
              title: "Can I use this tool for teaching?",
              content: "Absolutely! This tool is designed with educators in mind. It's perfect for teaching measurement concepts, spatial reasoning, and helping students visualize dimensions in science and math classes."
            },
            {
              id: "3",
              title: "Is this helpful for gardening?",
              content: "Yes! Gardeners can use these comparisons to understand cucumber growth stages, determine optimal harvest times, and communicate about plant progress with visual references."
            },
            {
              id: "4",
              title: "What objects do you compare cucumbers to?",
              content: "We compare cucumbers to everyday household items like smartphones, keys, coins, water bottles, grapes, and other common objects that people are familiar with."
            },
            {
              id: "5",
              title: "Do you plan to add other vegetables?",
              content: "We're considering expanding to other vegetables based on user feedback. Currently, we're focused on making the cucumber comparison tool as comprehensive and useful as possible."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions about cucumber comparisons or suggestions for improvements? We'd love to hear from educators, gardeners, and learners."
          buttonText="Send Message"
          inputs={[
            { name: "name", type: "text", placeholder: "Your name", required: true },
            { name: "email", type: "email", placeholder: "Your email", required: true },
            { name: "role", type: "text", placeholder: "Teacher, Gardener, Student, etc.", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us how you use size comparisons or what features you'd like to see...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="CucumberScale"
          copyrightText="© 2025 CucumberScale. Making sizes visual."
          columns={[
            {
              title: "Learn",
              items: [
                { label: "How It Works", href: "features" },
                { label: "Examples", href: "products" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              title: "Use Cases",
              items: [
                { label: "For Educators", href: "about" },
                { label: "For Gardeners", href: "about" },
                { label: "For Students", href: "about" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Feedback", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/cucumberscale", ariaLabel: "Follow us on Twitter" },
            { icon: Facebook, href: "https://facebook.com/cucumberscale", ariaLabel: "Like us on Facebook" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}