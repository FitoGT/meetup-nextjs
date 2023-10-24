import { useRouter } from 'next/router'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm'

const NewMeetUp = () => {
  const router = useRouter()
  const addMeetUpHandler = async (data) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const res = await response.json()

    router.push('/')
  }

  return <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetUp