import NewItem from './new-item';

const Page = () => {
    return (
        <div className="container mx-auto mt-10 text-gray-100">
            <h1 className="text-2xl mb-5">Add New Item</h1>
            <NewItem />
        </div>
    );
}

export default Page;
