import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'

const HomePage = (props) => {

  return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
  // fetch data from an API

  const client = await MongoClient.connect('mongodb+srv://fitogt:adolfo01@freecluster.ja6fe.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    }
  }
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage