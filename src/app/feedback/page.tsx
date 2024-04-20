import React from 'react';
import { useState } from 'react';
import FeedbackForm from '@/components/ui/feedbackForm';
import { GradButton } from '@/components/ui/grad-button';


const FeedbackPage: React.FC = () => {
    return (
        <div>
            <h1>Feedback Form</h1>
            <GradButton  variant={'default'} className='bg-blue-400 rounded-md w-[10em] h-[3em] text-sm hover:shadow-lg underline'>leave a feedback</GradButton>
            <FeedbackForm/>
        </div>
    );
};

export default FeedbackPage;