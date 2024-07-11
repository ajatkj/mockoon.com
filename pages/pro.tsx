import { FunctionComponent } from 'react';
import Accordion from '../components/accordion';
import EmailForm from '../components/email-form';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Plans from '../components/plans';
import { pricing } from '../data/pricing';
import Layout from '../layout/layout';
import { AccordionData } from '../models/common.model';

const meta = {
  title: "Mockoon's Pro plans",
  description:
    'Discover Mockoon Pro plans with our cloud platform: data synchronization, team collaboration and online mock API deployments'
};

const faq: AccordionData = [
  {
    title: 'Features availability',
    items: [
      {
        title: 'How can I stay informed about new features?',
        content:
          'You can <a href="#product-updates-subscribe">subscribe to the product updates</a> below to be notified of new releases.'
      },
      {
        title: 'Can I give feedback or join a beta test?',
        content:
          'Sure! You can join us on our <a href="https://discord.gg/FtJjkejKGp" target="_blank">Discord server</a>. We will be happy to hear from you.'
      }
    ]
  },
  {
    title: 'Support and training',
    items: [
      {
        title: 'What is the "community support"?',
        content:
          "Community support is the free support channel for Mockoon users. It is available on our <a href='https://github.com/mockoon/mockoon/discussions' target='_blank' rel='noopener'>GitHub repository</a> or <a href='https://discord.gg/FtJjkejKGp' target='_blank' rel='noopener'>Discord server</a>."
      },
      {
        title: 'What is the "Enterprise support" (Enterprise plan)?',
        content:
          'We will provide a priority support channel for your team by email or through the platform of your choice (Slack, etc.) with a guaranteed response time of one business day. Our priority support service is provided during regular business hours and working days (9 am to 5 pm CET/CEST, Monday to Friday). Please refer to the <a href="/terms/">terms of service</a> for more information.'
      },
      {
        title:
          'What is the "Onboarding and deployment assistance" (Custom Enterprise plan)?',
        content:
          'We will provide you with a dedicated account manager who will help you deploy Mockoon tools in your organization. We will also provide you with advanced support during the deployment phase. For other plans, live training sessions can be <a href="/training/">purchased separately</a>'
      }
    ]
  },
  {
    title: 'Billing',
    items: [
      {
        title: 'Do you offer a free trial?',
        content: `We offer a ${pricing.SOLO.trialDays}-day free trial for all plans. You can cancel your subscription at any time during the trial period and you will not be charged.`
      },
      {
        title: 'How does per-seat billing work?',
        content:
          'For Team and Enterprise plans, you can choose the number of seats you need. Each seat is billed monthly. You can <a href="/contact-form/">contact us</a> to add or remove seats at any time.'
      },
      {
        title: 'I received emails from Paddle.com, what is it?',
        content:
          'Paddle.com is our payment provider. You will receive emails from them when you purchase a plan, when your subscription is renewed or when you cancel your subscription.'
      },
      {
        title: 'What payment methods do you accept?',
        content:
          'We accept credit cards (Visa, Mastercard, etc.) through our payment provider Paddle. You can also pay by bank transfer for the Enterprise plan. <a href="/contact-form/">Contact us</a> before purchasing for more information.'
      },
      {
        title: 'I have specific billing requirements, can you help me?',
        content:
          'We can provide you with tailored billing solutions. Do not hesitate to <a href="/contact-form/">contact us</a> to discuss your needs.'
      },
      {
        title: 'Do you offer discounts for schools, bootcamps or students?',
        content:
          'We provide educational institutions with free Solo plans for all their students. Do not hesitate to <a href="/contact-form/">contact us</a> to become a partner.'
      },
      {
        title: 'Do you have a discount for startups?',
        content:
          'We offer substantial discounts for startups and bootstrapped entrepreneurs who did not raise funds. Do not hesitate to <a href="/contact-form/">contact us</a> to learn about the conditions and benefits of the program.'
      },
      {
        title: 'How can I cancel my subscription?',
        content:
          'You can manage your subscription using the links in the emails you received from Paddle.com. You can also <a href="/contact-form/">contact us</a> and we will help you cancel your subscription.'
      },
      {
        title: 'Can I get a refund?',
        content:
          'We may offer a refund on a case-by-case basis if you have not used the service yet (usage quotas, etc.). Please refer to the <a href="/terms/">terms of service</a> for more information. In any case, do not hesitate to <a href="/contact-form/">contact us</a>. We will be happy to help you.'
      },
      {
        title: 'VAT',
        content:
          'Prices are in USD and exclude VAT. VAT may or may not be charged during checkout depending on various criteria like your location and quality (individual or business).'
      }
    ]
  },
  {
    title: 'Misc',
    items: [
      {
        title: 'Do you offer custom services?',
        content:
          'Our custom services can vary. Here is a brief overview of what type of service we provided in the past:<ul><li>Feature prioritization on the roadmap.</li><li>Advanced support during Mockoon tools deployment or configuration.</li><li>Help with your API mock creation.</li><li>Online training with live video conference.</li></ul><a href="/custom-services/">Learn more</a> about our custom services.'
      },
      {
        title: 'Contracting company',
        content:
          'Our enterprise services are provided by <a href="https://1kb.software" rel="noopener"><strong>1kB SARL-S</strong></a>, a company incorporated in Luxembourg under the no. B257186.<br/>VAT number: LU33209738'
      }
    ]
  }
];

const Pro: FunctionComponent = function () {
  return (
    <Layout footerBanner='contact'>
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title='Supercharge your API development with <span class="text-primary">Mockoon Pro</span> plans'
        subtitle='Never let API integration slow you down again. Collaborate with your team, keep your data in sync, and deploy your mock APIs to the cloud easily.'
        mainPicture='/images/pro-hero.png'
        mainPictureAlt='Mockoon logo in the cloud interconnected with other services'
        mainPictureWidth={1200}
        mainPictureHeight={783}
      />

      <Plans showTagline={true} />

      <section
        className='py-6 py-md-8 border-top bg-gradient-light-white'
        id='faq'
      >
        <div className='container' id='faq'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 align-items-center'>
              <h2 className='fw-bold mb-6 text-center'>Pro plans FAQ</h2>
              <Accordion data={faq} />
            </div>
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8' id='product-updates-subscribe'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 align-items-center'>
              <h2 className='fw-bold text-center mb-6'>
                Stay up-to-date with Mockoon Pro feature releases
              </h2>
              <div className='row align-items-center text-lg-start text-center'>
                <div className='col-12 justify-content-end'>
                  <EmailForm formType='productUpdates' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pro;
