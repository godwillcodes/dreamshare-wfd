import HowDreamshareWorks from './components/home/HowDreamshareWorks';
import MeetPartners from './components/home/MeetPartners';
import HolidayActivities from './components/home/HolidayActivities';
import HolidayActivityForm from './components/home/HolidayInterest';

export default function Home() {
  return (
    <div className="">
      <HowDreamshareWorks />
      <MeetPartners />
      <HolidayActivities />
      <HolidayActivityForm />
    </div>
  );
}
