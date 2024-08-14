import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Considerate Gorgeous Salmon</title>
        <meta property="og:title" content="Considerate Gorgeous Salmon" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100 thq-body-small thq-link">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101 thq-body-small thq-link">
              About Us
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102 thq-body-small thq-link">
              Services
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103 thq-body-small thq-link">
              Contact Us
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104 thq-body-large">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105 thq-body-large">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106 thq-body-large">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107 thq-body-large">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114 thq-body-small">Explore Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115 thq-body-small">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text116 thq-body-large">
              Discover amazing products and services tailored just for you.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text117 thq-heading-1">
              Welcome to Our Website
            </h1>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <h2 className="home-text118 thq-heading-2">Feature 1 Title</h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text119 thq-heading-2">Feature 2 Title</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text120 thq-heading-2">Feature 3 Title</h2>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121 thq-body-small">
              Description for Feature 1
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Description for Feature 2
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123 thq-body-small">
              Description for Feature 3
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Shop Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text125 thq-body-large">
              Explore our latest deals and promotions
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126 thq-heading-2">
              Discover Our Exclusive Offers
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <h2 className="home-text127 thq-heading-2">Advanced Security</h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text128 thq-heading-2">
              User-Friendly Interface
            </h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text129 thq-heading-2">
              24/7 Customer Support
            </h2>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132 thq-body-small">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <p className="home-text133 thq-body-large">Basic plan</p>
          </Fragment>
        }
        plan2={
          <Fragment>
            <p className="home-text134 thq-body-large">Business plan</p>
          </Fragment>
        }
        plan3={
          <Fragment>
            <p className="home-text135 thq-body-large">Enterprise plan</p>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="home-text140 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text143 thq-heading-2">Pricing plan</h2>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <h3 className="home-text144 thq-heading-3">$9.99/month</h3>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <h3 className="home-text145 thq-heading-3">$19.99/month</h3>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <h3 className="home-text146 thq-heading-3">$29.99/month</h3>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147 thq-body-small">Sign Up</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <h3 className="home-text148 thq-heading-3">$200/yr</h3>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <p className="home-text149 thq-body-large">or $200 yearly</p>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150 thq-body-small">Sign Up</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <h3 className="home-text151 thq-heading-3">$299/yr</h3>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <p className="home-text152 thq-body-large">or $299 yearly</p>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153 thq-body-small">Sign Up</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <h3 className="home-text154 thq-heading-3">$499/yr</h3>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <p className="home-text155 thq-body-large">or $499 yearly</p>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Feature 1 included
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Feature 2 included
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165 thq-body-small">
              Feature 1 included
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166 thq-body-small">
              Feature 2 included
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Feature 1 included
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170 thq-body-small">
              Feature 2 included
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <h2 className="home-text186 thq-heading-2">Step 1: Register</h2>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <h2 className="home-text187 thq-heading-2">Step 2: Explore</h2>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <h2 className="home-text188 thq-heading-2">Step 3: Purchase</h2>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <h2 className="home-text189 thq-heading-2">Step 4: Enjoy</h2>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190 thq-body-small">
              Create an account to access exclusive features
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191 thq-body-small">
              Discover a wide range of products and services
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Select your desired items and proceed to checkout
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193 thq-body-small">
              Receive your order and enjoy your purchase
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194 thq-body-small">
              Great service! I highly recommend their products.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195 thq-body-small">
              The team was very professional and delivered exceptional results.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196 thq-body-small">
              I was impressed by the quality of their work and attention to
              detail.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197 thq-body-small">
              Outstanding experience from start to finish. Will definitely work
              with them again.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text199 thq-heading-2">Testimonials</h2>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <strong className="home-text200 thq-body-large">John Doe</strong>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <strong className="home-text201 thq-body-large">Jane Smith</strong>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <strong className="home-text202 thq-body-large">
              David Johnson
            </strong>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <strong className="home-text203 thq-body-large">Emily Brown</strong>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204 thq-body-small">
              CEO, Company ABC
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205 thq-body-small">
              Marketing Manager, Company XYZ
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206 thq-body-small">
              CTO, Tech Solutions Inc.
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207 thq-body-small">
              Founder, Startup Co.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <p className="home-text208 thq-body-large">
              Feel free to reach out to us for any inquiries or feedback.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text209 thq-heading-2">Contact Us</h2>
          </Fragment>
        }
        location1={
          <Fragment>
            <h3 className="home-text210 thq-heading-3">Headquarters</h3>
          </Fragment>
        }
        location2={
          <Fragment>
            <h3 className="home-text211 thq-heading-3">Branch Office</h3>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <p className="home-text212 thq-body-large">
              123 Main Street, City, Country
            </p>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <p className="home-text213 thq-body-large">
              456 Park Avenue, City, Country
            </p>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215 thq-body-small">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216 thq-body-small">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218 thq-body-small">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
