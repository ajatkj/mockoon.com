import Link from 'next/link';
import { FunctionComponent } from 'react';
import Accordion from '../components/accordion';
import CompanyLogos from '../components/company-logos';
import EmailForm from '../components/email-form';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { AccordionData } from '../models/common.model';

const meta = {
  title: "Mockoon's Official Course",
  description:
    'Mockoon offers an official course to help you get started with API mocking and API design. Learn how to create and manage your mock APIs with Mockoon.'
};

const keyPoints = [
  'Step-by-step progression from beginner to advanced user',
  'Course delivered by the creator of Mockoon!',
  'Learn to use all Mockoon features',
  'Apply your knowledge with practical exercises'
];

const courseContent: AccordionData = [
  {
    items: [
      {
        title: 'Getting started',
        text: [
          'Introduction to Mockoon',
          'Installing Mockoon desktop application',
          'Create your first mock API'
        ]
      },
      {
        title: 'Creating responses',
        text: [
          'Adding a JSON body',
          'Serving external files',
          'Create reusable mock data with the data buckets',
          'Adding environment and route headers',
          'Adding delays'
        ]
      },
      {
        title: 'Create more realistic responses with templating',
        text: [
          'Introduction to Handlebars templating',
          'Templating helpers support',
          'Using Mockoon helpers',
          'Using Faker.js helpers',
          'Using the AI assistant'
        ]
      },
      {
        title: 'Dynamic responses with rules',
        text: [
          'Create multiple responses for a route',
          'Identifying the default response',
          'Random and sequential modes',
          'Add rules to serve the right response at the right time',
          'Create global rules to apply to all routes'
        ]
      },
      {
        title: 'Create fully automated CRUD mock endpoints',
        text: [
          'Overview of the CRUD endpoints',
          'Creating a CRUD endpoint',
          'Sorting and pagination'
        ]
      },
      {
        title: 'Partial mocking with the proxy mode',
        text: ['Configure the proxy mode', 'Create a partial mock API']
      },
      {
        title: 'Logging and recording',
        text: [
          'Overview of the logs',
          'Record entering requests to create mocks'
        ]
      },
      {
        title: 'Deploy your mocks anywhere with the CLI',
        text: [
          'Installing the CLI',
          'Deploying your mocks to a server',
          'Using the CLI with CI/CD: GitHub Actions'
        ]
      }
    ]
  }
];

const Course: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title='🎓 Mockoon <span class="text-primary">Official Course</span> <span class="badge text-bg-gray-300 fs-4 align-text-top ms-2">Coming soon</span>'
        subtitle='Mockoon offers an official course to help you get started with API mocking and API design. Learn how to create and manage your mock APIs with Mockoon.'
        mainPictureWidth={1200}
        mainPictureHeight={783}
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center g-10'>
            <div className='col-12 col-lg-7'>
              <p>
                This course has been designed to help you{' '}
                <strong>get started</strong> with Mockoon and learn{' '}
                <strong>how to use all its features</strong>. It will also help
                you <strong>master API mocking</strong> and many{' '}
                <strong>API concepts</strong>.
              </p>
              <p>
                {' '}
                This course will be available as a video course and will be
                included in the <Link href={'/pro/'}>Pro subscription</Link>.
              </p>

              <div className='mt-6'>
                {keyPoints.map((keyPoint, keyPointIndex) => (
                  <div
                    key={`taskcomingsoon${keyPointIndex}`}
                    className='d-flex'
                  >
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                      <i className='icon icon-check'></i>
                    </div>
                    <p className='text-gray-800'>{keyPoint}</p>
                  </div>
                ))}
              </div>

              <h3 className='my-6'>What's inside the course...</h3>

              <Accordion
                data={courseContent}
                openFirst
                counterSuffix={{ singular: 'lesson', plural: 'lessons' }}
              />
            </div>

            <div className='col-12 col-lg-5 sticky-top'>
              <div className='card shadow-light-lg mb-6 mb-md-0'>
                <div className='card-body'>
                  <img
                    src='/images/official-online-course/mockoon-official-online-course.png'
                    className='img-fluid mx-auto d-block rounded'
                    alt='select generate from template in the route creation menu to create a AI-generated mock API endpoint'
                    width='1400'
                    height='797'
                  />
                  <div className='py-4'>
                    <div className='d-flex align-items-center justify-content-center'>
                      <div className='avatar avatar-xl'>
                        <img
                          className='avatar-img img-thumbnail rounded-circle mr-4'
                          src='/images/about/guillaume.jpg'
                          alt='Creator of Mockoon'
                          width={128}
                          height={128}
                        />
                      </div>
                      <div className='ps-5'>
                        <p className='fs-sm fw-bold mb-0'>Guillaume</p>
                        <p className='fs-sm text-muted mb-0'>
                          Creator of Mockoon
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <span className='h2 mb-0 mt-2'>$</span>
                    <span className='price display-2 mb-0'>49</span>
                    <span className='h3 mb-0 mt-2'>*</span>
                  </div>
                  <p className='text-center text-body-secondary mb-5'>
                    one time purchase
                  </p>
                  <div className='alert alert-light text-center'>
                    💡 This course will also be part of the Pro subscription.
                  </div>
                  <p className='text-center'>
                    Get informed when the course is available and get a{' '}
                    <strong>25% discount</strong> on the regular course price.
                  </p>
                  <EmailForm formType='coursepreview' />
                </div>
                <div className='card-footer'>
                  <p className='mb-0 text-center h6 text-muted'>
                    * Price in USD excluding VAT or sales tax where applicable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompanyLogos />
    </Layout>
  );
};

export default Course;
