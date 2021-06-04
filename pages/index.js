import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick Job</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Quick Job</h1>

        <div className={styles.description}>
          <h2>Authors</h2>
          <code className={styles.code}>
            Bryan Huang
            <br />
            Hanbing Wang
            <br />
            Tae Hyun Lee
          </code>
        </div>

        <i className={styles.shortDescription}>
          The following shows the development of a ficticious app from wireframe
          to a high fidelity mock up. This development process was under the
          supervision of professor Matthew Bietz of University of California,
          Irvine under the course "SWE 263P User Experience and Interaction."
        </i>

        <div className={styles.mainBody}>
          <h1>High Fidelity Mock Up</h1>
          <iframe
            className={styles.figmaEmbed}
            src={
              "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fj9Zg6owiGktYWXnd664cxn%2FQuick-Job-High-Fidelity%3Fscaling%3Dscale-down%26page-id%3D0%253A1%26node-id%3D2%253A3"
            }
            allowfullscreen
          ></iframe>

          <div className={styles.section}>
            <h1 className={styles.sectionTitle}>Introduction</h1>
            <h2>Problem and Use Case</h2>
            <p className={styles.bodyText}>
              The problem that our team wanted to solve is to help everyday
              people relieve themselves of the burdens of everyday
              inconveniences. These inconveniences can be represented in forms
              of tasks, such as household chores, maintaining a vehicle, or
              driving a person to a particular location. The idea in general is
              to provide a network for two types of users, “job posters” and
              “job consumers”, to help each other. Job posters are the users
              that post quick jobs for job consumers to consume. In return for
              performing a job, a job consumer will be paid in monetary
              incentives; however, a user is not constrained to only being
              either a job poster or job consumer. Rather, a user can be both a
              job poster one day and a job consumer another day. For example, a
              user today can post a job to mow his or her lawn, while the next
              day that same user can consume a job posted by another user. By
              allowing people to connect and perform favors for one another, our
              project would create a win-win situation for both parties
              involved. One user will be relieved of the inconvenience of doing
              that job themselves, while the other user would have access to
              earn quick cash.
            </p>
            <h2>Methods in chronological order</h2>
            <p>
              <ul>
                <li>Conduct interview for User Research</li>
                <li>Define epics and user stories</li>
                <li>Draw initial wireframe</li>
                <li>Conduct interview for User Evaluation</li>
                <li>
                  Perform Heuristic Evaluation individually and as a group
                </li>
                <li>Draw High-Fidelity Mockup</li>
              </ul>
            </p>
            <h2>Competitive Analysis</h2>
            <p className={styles.bodyText}>
              For our application’s competitive analysis, we found three
              competitors that were slightly similar in idea, but also slightly
              different at the same time. The first competitor that we found was
              Craigslist. Craigslist is an online marketplace that’s target
              demographic is the local communities. Users of Craigslist post
              used items or job services for sale along with a contact form. The
              second was Upwork, which is a service marketplace that connects
              freelance workers with companies. Users of Upwork are often
              contract workers and companies looking to solve a particular
              business problem. The third was Facebook Marketplace, which is
              similar to Craigslist, in which users buy and sell used items
              along with services. There are some notable differences between
              the three competitor’s mentioned. First of all, Craigslist does
              not provide an option for user profiles and nor is there a chat
              function. Facebook and Upwork both provide chat functionality and
              user profiles; however, Upwork’s user profile includes user
              ratings which Facebook does not. Another difference is target
              demographics for the user base. Facebook and Craigslist both serve
              the local communities, but Upwork mainly focuses on contract
              workers and companies on a global scale.
            </p>
          </div>

          <div className={styles.section}>
            <h1 className={styles.sectionTitle}>User Research and Personas</h1>
            <h2>Identifying the Target Users</h2>
            <p className={styles.bodyText}>
              The target user population for this application is day to day
              people who want to perform quick jobs to gain fast forms of
              payment, or people who want to look for quick and easy services
              from their local area. The ideal user will be an adult at least 18
              years of age with access to a cellular phone or internet.
              Essentially, this application will solely focus on everyone inside
              local communities to help each other perform jobs or other forms
              of maintenance. Going into a more detailed description, our target
              user population can be split into two forms: a job lister and a
              job seeker. The job lister can be someone who is very busy and
              cannot perform certain tasks. Because of a higher opportunity
              cost, the job lister can pass that job onto a job seeker. The
              second user type is the job seeker. The job seeker is ideally
              someone who has available free time and wishes to use that time to
              perform temporary work. This can range from stay at home parents,
              to college students, or even a currently unemployed person.
            </p>

            <h2>Research Questions, Interviews, and Personas</h2>

            <p className={styles.bodyText}>
              The purpose of this research was to understand more about the
              target population of the problem in which we are trying to solve.
              We want to be able to provide a platform for people to help each
              other perform tasks. We understand that there are people with less
              time than others and people with more time than others; we want to
              figure out how to merge this gap. Because of this, the purpose of
              our research was to understand how people interact with each other
              over online platforms, and understand the circumstances that force
              a person to go out to look for a service or provide a service. To
              understand our target users more, we drawn research questions to
              answer.
              <br />
              <br />
              The research questions we drawn for this research are the
              following:
            </p>
            <ul>
              <li>
                How do people interact when they need a service or provide a
                service?
              </li>
              <li>Why do people want to seek out services?</li>
              <li>Why do people want to provide services?</li>
            </ul>
            <p className={styles.bodyText}>
              To find the answers to our research questions, we had to compile a
              list of interview questions related to the research questions and
              find potential target users to interview. Each of the three team
              members had to find 3 candidates to interview. The ideal candidate
              in our case was to be someone at least 18 years of age, who’s
              capable of using either a computer or a mobile device.
              Additionally, that person should have experience with using
              similar competitor apps such as Facebook Marketplace, Craigslist,
              Ebay, Fiverr, or Upwork; however, the candidate is not expected to
              have used all competitor apps; just at least a handful. After we
              figured out our target interview candidates, we met up with them
              in person and asked them to review a consent form. When the
              candidate agreed with the consent form, we conducted the interview
              while recording their responses. The interviewer also took notes
              on each answer, briefly writing down the main idea and emotion
              behind each answer.
            </p>

            <p className={styles.bodyText}>
              After our interviews, we utilized a Miro Board to first post all
              interview responses as separate notes, initially grouped by
              interview questions. After some discussion, we then grouped the
              responses by similarities instead of interview questions. Lastly,
              we created labels for each group as a short summary, which helped
              us to come up with our research findings and also acted as the
              blueprint for the three different personas afterwards. Below is a
              screenshot of the Miro board that we used. Because of the vast
              amount of notes that our group had, we could not capture the Miro
              board in its entirety. Each black note represents a label that
              corresponds to each grouping.
            </p>

            <iframe
              width="768"
              height="432"
              src="https://miro.com/app/live-embed/o9J_lHVwJj0=/?moveToViewport=-323,-1593,10669,5558"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            ></iframe>
            <p className={styles.bodyText}>
              Processing the results from the research findings, we generated 3
              fictitional user personas that represent 3 different type of users
              of our application.
            </p>
            <h2>Persona Gallery</h2>
            <Carousel width={400} infiniteLoop emulateTouch>
              <div>
                <img src={"persona1.png"} />
              </div>

              <div>
                <img src={"persona2.png"} />
              </div>

              <div>
                <img src={"persona3.png"} />
              </div>
            </Carousel>
          </div>

          <div className={styles.section}>
            <h1 className={styles.sectionTitle}>Wireframe</h1>
            <h2>Mock Up</h2>
            <p className={styles.bodyText}>
              After creating our user personas, we proceeded to work on a
              wireframe.
            </p>
            <iframe
              className={styles.figmaEmbed}
              src={
                "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcD30iAocEeU0SSWub0hULH%2FQuick-Job-Wireframe%3Fscaling%3Dscale-down%26page-id%3D0%253A1%26node-id%3D1%253A337"
              }
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
