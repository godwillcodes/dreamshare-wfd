import HowDreamshareWorks from './components/home/HowDreamshareWorks';
import MeetPartners from './components/home/MeetPartners';
import HolidayActivities from './components/home/HolidayActivities';
import HolidayActivityForm from './components/home/HolidayInterest';
import { fetchTopRatedMovies } from "@/lib/FetchMoviesApi";


export default async function Home() {
  const initialMovies = await fetchTopRatedMovies();
  return (
    <div className="bg-white">
      <HowDreamshareWorks initialMovies={initialMovies} />
      <MeetPartners />
      <HolidayActivities />
      <HolidayActivityForm />
    </div>
  );
}
