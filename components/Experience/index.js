import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import ExperienceStyles from './styles';

const resumeData = [
  {
    sectionTitle: 'Summary',
    sectionContent:
      "Jay Fallon is a User Experience professional with years of experience in product design and development for a list of clients that includes large enterprises, small businesses and start-up ventures. Jay's interests lie in customer focused application design and development, rapid and iterative prototyping, user-centric design and testing methodologies, the responsive experience and courseware design production.",
  },
  {
    sectionTitle: 'Technical skills',
    sectionContent:
      'User experience design, interaction design, information architecture, usability testing, front-end development to include modern CSS, HTML, JavaScript (React, React Native, Next.js, Gatsby.js), AngularJS, GraphQL, Node/Express, JSX, Jade/Pug, Styled Components, PostCSS, Sass/Scss, LESS, Stylus, Git, responsive design, Python, Ruby/Rails, Java-based frameworks; audio-visual creation and design to include Sketch, InVision, Zeplin, OmniGraffle, Framer, Adobe Premiere, After Effects, Illustrator, Photoshop and Audition. Agile methodologies. Fluent in English and Spanish.',
  },
  {
    sectionTitle: 'Education',
    sectionContent: [
      {
        entityTitle: 'Harvard University Extension School',
        entityLocation: 'Cambridge, MA',
        entityDates: 'Master of Liberal Arts, Digital Design, May 2019',
        entityDesc:
          'Concentration in Digital Design, with coursework in information systems, software development, instructional design and digital production.',
      },
      {
        entityTitle: 'Northeastern University',
        entityLocation: 'Boston, MA',
        entityDates:
          'Bachelor of Science in Business Administration, June 1998',
        entityDesc:
          'Majored in International Business and Finance. Completed cooperative education assignments at Boston’s Better Snacks, FMRC and PictureTel with learning opportunities and responsibilities in operations, marketing, technical documentation and internationalization.',
      },
    ],
  },
  {
    sectionTitle: 'Details of experience',
    sectionContent: [
      {
        entityTitle: 'State Street Global Advisors, Inc.',
        entityLocation: 'Boston, MA',
        entityDates: 'April 2019 - Present',
        entityJob: 'Senior User Experience Designer and Developer.',
        entityDesc:
          'As a UX designer and developer, Jay works to support SSgA’s global digital team in its efforts to implement digital transformation initiatives by providing design and development deliverables, consultation and oversight as they migrate their content offerings and lead generation programs to the latest edition Adobe Experience Manager, complete with responsive design and analytical integration.',
      },
      {
        entityTitle: 'Syrinx Consulting, Inc.',
        entityLocation: 'Boston, MA',
        entityDates: 'June 2018 - March 2019',
        entityJob: 'Senior User Experience Designer and Developer.',
        entityDesc:
          'As a UX designer and developer, Jay works to support SSgA’s global digital team in its efforts to implement digital transformation initiatives by providing design and development deliverables, consultation and oversight as they migrate their content offerings and lead generation programs to the latest edition Adobe Experience Manager, complete with responsive design and analytical integration.',
      },
      {
        entityTitle: 'James Fallon Consulting',
        entityLocation: 'Boston, MA',
        entityDates:
          'September 2009 - December 2010, March 2012 - March 2013, June 2016 – June 2018',
        entityJob: 'Senior User Experience Designer and Developer.',
        entityDesc:
          "Responsible for assisting clients with web-based strategies, product research, design and development. Project engagements include working with Style Me Pretty on their upcoming website release, a ground-up overhaul of their existing products. Jay's responsibilities included working closely with the client to craft and implement a comprehensive experience strategy in addition to providing research, design and demonstration deliverables.",
      },
      {
        entityTitle: 'Cengage Learning, Inc.',
        entityLocation: 'Boston, MA',
        entityDates: 'March 2014 – June 2016',
        entityJob: 'Senior User Experience Designer and Developer.',
        entityDesc:
          'Created an in-house CSS framework and reusable component library, provided design direction and development on multiple Cengage projects that included legacy code conversion, cross-platform CSS standardization, component design and user testing. In addition to his day to day responsibilities, Jay worked alongside senior management to define design and technical requirements for future platform releases.',
      },
      {
        entityTitle: 'Boston Technologies, Inc.',
        entityLocation: 'Boston, MA',
        entityDates: 'December 2010 – March 2012',
        entityJob: 'Software Engineer, User Experience Designer and Developer.',
        entityDesc:
          'Working in conjunction with a development team, Jay was responsible for the user experience and front-end architecture, design and development on a foreign exchange trading platform. Duties included research, development and testing for both internal and external product offerings in the form of web-based dashboards, trading applications and analysis.',
      },
      {
        entityTitle: 'State Street Global Advisors, Inc.',
        entityLocation: 'Boston, MA',
        entityDates: 'June 2007 – September 2008',
        entityJob: 'User Experience Developer.',
        entityDesc:
          "As a consultant, Jay worked closely with multiple internal teams on projects requiring design, development and ongoing maintenance for existing, new and transitioning web-based products. Jay's responsibilities included the design, production and deployment of deliverables along with providing testing and technical support.",
      },
      {
        entityTitle: 'netNumina Solutions, Inc.',
        entityLocation: 'Cambridge, MA',
        entityDates: 'June 2000 – December 2006',
        entityJob:
          'Principal Consultant, User Experience Designer and Developer.',
        entityDesc:
          'Duties include providing technical expertise to account managers, user experience and development teams as well as executing the user experience requirements into deliverables for integration with web applications or standalone websites. Client list includes Fidelity Management & Resource Company, State Street Global Advisors, Johnson & Johnson, Pfizer and ADQSR.',
      },
    ],
  },
];

const Experience = props => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <>
      <Header />
      <main id="main__content" role="main">
        <ExperienceStyles>
          {resumeData.map((elem, i) => (
            <article key={i}>
              <>
                <h3>{elem.sectionTitle}</h3>

                {typeof elem.sectionContent == 'object' ? (
                  <>
                    {elem.sectionContent.map((el, j) => (
                      <ul className="resume__listing--list" key={j}>
                        <li className="resume__listing--title">
                          <h4>{el.entityTitle}</h4>
                          <span>{el.entityLocation}</span>
                        </li>
                        <li className="resume__listing--dates">
                          {el.entityDates}
                        </li>
                        <li className="resume__listing--job">{el.entityJob}</li>
                        <li className="resume__listing--desc">
                          {el.entityDesc}
                        </li>
                      </ul>
                    ))}
                  </>
                ) : (
                  <p>{elem.sectionContent}</p>
                )}
              </>
            </article>
          ))}
        </ExperienceStyles>
      </main>
      <Footer />
    </>
  </ThemeProvider>
);

export default Experience;
