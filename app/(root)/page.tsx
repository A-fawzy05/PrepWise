import InterviewCard from '@/components/InterviewCard';
import { Button } from '@/components/ui/button';
import { dummyInterviews } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


function Page() {
  return ( <>
  <section className='card-cta'>
    <div className='flex flex-col gap-6 max-w-lg'>
      <h2>Get interview ready with Ai-Powered Practice & Feedback</h2>
      <p>Practice on Real interview questions & get instant feedback</p>
      <Button asChild className='btn-primary max-sm:w-full'>
        <Link href="/interview">Start an Interview</Link>
      </Button>
    </div>
    <Image src="/robot.png" alt="robo-dude" width={400} height={400} className='max-sm:hidden'/>
  </section>
  </> );
}

export default Page;