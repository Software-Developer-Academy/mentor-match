// this is a Modal
const FeedbackForm = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[30em] flex justify-center">
                <form action="" className="shadow-md shadow-black bg-white p-2 rounded-md flex space-y-4 flex-col">
                    <legend className="text-sm font-semibold px-3">Please take a moment to provide feedback on the website</legend>
                    <textarea name="" id="" cols="30" rows="10" className="block bg-slate-300 p-2 focus:outline-none" placeholder="Word limit is 255"></textarea>
                    <button type="submit" className="block bg-gradient-to-r from-blue-600 to-blue-300 text-white w-fit text-sm p-2 rounded-sm">Submit feedback</button>
                </form>
            </div>
        </div>
    )
}

export default FeedbackForm