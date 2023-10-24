import MeetUpDetails from "../../components/meetups/MeetupDetails"

const MeetupDetail = ({ meetup }) => {
  console.log(meetup)
  return <MeetUpDetails
    id={meetup.id}
    title={meetup.title}
    image={meetup.image}
    address={meetup.address}
    description={meetup.description}
  />
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      }
    ]
  }
}

export async function getStaticProps(context) {

  const meetupId = context.params.meetupId
  console.log(meetupId)
  return {
    props: {
      meetup: {
        id: meetupId,
        title: 'First MeetUp',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Turkenstrasse',
        description: "description",
      }
    }
  }
}

export default MeetupDetail